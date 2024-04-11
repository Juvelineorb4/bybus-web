import Reac, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import BlockRoundedIcon from "@mui/icons-material/BlockRounded";
import ModalBlock from "./ModalBlock";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ModalAgencies from "./ModalAgencies";

const TableEmailSubs = ({ rows }) => {
  const [anchoVentana, setAnchoVentana] = useState(0);

  useEffect(() => {
    const manejarCambioDeTamaño = () => setAnchoVentana(window.innerWidth);

    window.addEventListener('resize', manejarCambioDeTamaño);
    return () => {
      window.removeEventListener('resize', manejarCambioDeTamaño);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [openA, setOpenA] = useState(false);
  const [dataA, setDataA] = useState({});
  console.log(rows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "status",
      headerName: "Estado",
      width: 150,
      editable: true,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
      editable: true,
    },
    {
      field: "rif",
      headerName: "RIF",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 300,
      editable: true,
    },
    {
      field: "percentage",
      headerName: "Porcentaje %",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Acciones",
      width: 110,
      renderCell: (params) => {
        return (
          <div>
            <IconButton
              aria-label="delete-agency-subs"
              onClick={() => {
                setData(params.row);
                setOpen(!open);
              }}
            >
              {params.row.status === "ACTIVO" ? (
                <BlockRoundedIcon />
              ) : (
                <ThumbUpOffAltRoundedIcon />
              )}
            </IconButton>
            <IconButton
              aria-label="delete-agency-subs"
              onClick={() => {
                setOpenA(!open);
                setDataA(params.row);
                console.log(params);
              }}
            >
              <AddBusinessIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 400, width: anchoVentana >= 1440 && anchoVentana <= 1740 ? 1200 : anchoVentana >= 1740 && anchoVentana <= 2140 ? 1400 : anchoVentana >= 2140 ? 1900 : '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        density='compact'

        style={{width: '100%'}}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        slots={{ toolbar: GridToolbar }}
      />
      <ModalBlock
        data={data}
        open={open}
        close={() => {
          setOpen(!open);
          setData({});
        }}
      />
      <ModalAgencies
        data={dataA}
        type={`edit`}
        open={openA}
        close={() => {
          setOpenA(!openA);
          setDataA({});
        }}
      />
    </Box>
  );
};

export default TableEmailSubs;