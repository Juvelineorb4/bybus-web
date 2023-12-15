import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutation from "@/graphql/custom/mutations/profile";
import ModalOfficeEdit from "./ModalOfficeEdit";

const TableOffices = ({ rows }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const DeleteOffice = async (officeId) => {
    const office = await API.graphql({
      query: mutation.updateOffice,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        input: {
          id: officeId,
          status: 'DISABLED'
        }
      },
    });
  };


  const columns = [
    {
      field: "name",
      headerName: "Nombre",
      width: 400,
    },
    {
      field: "state",
      headerName: "Estado",
      width: 150,
    },
    {
      field: "city",
      headerName: "Ciudad",
      width: 150,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === "ENABLED" ? 'ACTIVO' : 'INACTIVO'}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <Stack>
            <button
              onClick={() => {
                setData(params.row);
                setOpen(!open);
              }}
            >{`Ver`}</button>
            <button
              onClick={() => {
                let opcion = confirm("Quieres eliminar la siguiente agencia de viaje?");
                if (opcion == true) {
                  alert('Se ha eliminado con exito. Refresque la pagina');
                  DeleteOffice(params.row.id)
                } else {
                  alert('Has cancelado con exito');
                }
              }}
            >{`Eliminar`}</button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: 900 }}>
      <DataGrid
        rows={rows ? rows : ""}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick={true}
        slots={{ toolbar: GridToolbar }}
        loading={rows ? false : true}
      />
      <ModalOfficeEdit open={open} close={() => setOpen(!open)} data={data} />
    </Box>
  );
};

export default TableOffices;
