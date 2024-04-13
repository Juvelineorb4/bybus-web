import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import ModalTravelEdit from "./ModalTravelEdit";
import { useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutation from "@/graphql/custom/mutations/profile";

const TableTravels = ({ rows, type }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const filteredData = rows
    .map((item) => {
      return {
        ...item,
        departureTime: item.departure,
      };
    })
    .filter((item) => item.status !== "CANCELLED");
  const DeleteBooking = async (bookingId) => {
    const booking = await API.graphql({
      query: mutation.updateBooking,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        input: {
          id: bookingId,
          status: "CANCELLED",
        },
      },
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "departureCity",
      headerName: "Salida",
      width: 110,
      editable: true,
    },
    {
      field: "arrivalCity",
      headerName: "Destino",
      width: 150,
      editable: true,
    },
    {
      field: "departure",
      renderCell: (params) => {
        return (
          <Stack>
            <div>{params.formattedValue.date}</div>
            <div>{params.formattedValue.time.slice(0, 5)}</div>
          </Stack>
        );
      },
      headerName: "Fecha y Hora",
      width: 129,
    },
    // {
    //   field: "departure",
    //   valueGetter: (params) => {
    //     return new Date(params.value.date).toISOString().split("T")[0]; // Formatear la fecha como YYYY-MM-DD;
    //   },

    //   renderCell: (params) => {
    //     const formattedDate = new Date(params.value)
    //       .toISOString()
    //       .split("T")[0]; // Formatear la fecha como YYYY-MM-DD
    //     return <div>{formattedDate}</div>;
    //   },
    //   headerName: "Fecha (Salida)",
    //   width: 129,
    // },
    // {
    //   field: "departureTime",
    //   valueGetter: (params) => {
    //     return params.value.time.slice(0, 5); // Formatear la fecha como YYYY-MM-DD;
    //   },

    //   renderCell: (params) => {
    //     return <div>{params.value}</div>;
    //   },
    //   headerName: "Hora (Salida)",
    //   width: 129,
    // },
    {
      field: "status",
      headerName: "Estado",
      width: 110,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === "AVAILABLE"
              ? "DISPONIBLE"
              : params.row.status === "BOARDING"
              ? "ABORDANDO"
              : params.row.status === "ARRIVED"
              ? "FINALIZO"
              : params.row.status === "SOLDOUT"
              ? "AGOTADO"
              : "CANCELADO"}
          </div>
        );
      },
    },
    {
      field: "ticketsAvailable",
      headerName: "Disponibles",
      width: 135,
      editable: true,
      renderCell: (params) => {
        return <div>{`${params.row.stock} tickets`}</div>;
      },
    },
    {
      field: "ticketsSell",
      headerName: "Vendidos",
      width: 135,
      editable: true,
      renderCell: (params) => {
        return <div>{`${params.row?.tickets?.items?.length} tickets`}</div>;
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <Stack
            style={{
              flexDirection: "row",
            }}
          >
            <button
              onClick={() => {
                setData(params.row);
                setOpen(!open);
              }}
            >{`Editar`}</button>
            {params.row.status !== "SOLDOUT" && (
              <button
                onClick={() => {
                  let opcion = confirm("Quieres eliminar el siguiente viaje?");
                  if (opcion == true) {
                    alert("Se ha eliminado con exito. Refresque la pagina");
                    DeleteBooking(params.row.id);
                  } else {
                    alert("Has cancelado con exito");
                  }
                }}
              >{`Eliminar`}</button>
            )}
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={filteredData ? filteredData : ""}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        density={`compact`}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
      <ModalTravelEdit data={data} open={open} close={() => setOpen(!open)} />
    </Box>
  );
};

export default TableTravels;
