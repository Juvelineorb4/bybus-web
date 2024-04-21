import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard.module.css";
import Card from "@/components/Card";
import ModalTransportEmployee from "@/components/ModalTransportEmployee";
import ModalTravel from "@/components/ModalTravel";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "@/graphql/custom/queries/home";
import * as subscriptions from "@/graphql/custom/subscriptions/home";
import TableEmployees from "@/components/TableEmployees";
import TableOffices from "@/components/TableOffices";
import TableTravels from "../TableTravels";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Autocomplete,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TableOrderDetails from "../TableOrderDetails";
import { useRouter } from "next/router";

const Dashboard = ({ dataResult, userType }) => {
  const router = useRouter().query;
  const [travels, setTravels] = useState(false);
  const [travel, setTravel] = useState("");
  const [transport, setTransport] = useState(false);
  const [data, setData] = useState(dataResult);
  const [dataTravels, setDataTravels] = useState([]);
  const [dataOrders, setDataOrders] = useState([]);
  const [userT, setUserT] = useState(userType);

  const openTravels = () => {
    setTravels(true);
  };
  const openTransport = () => {
    setTransport(true);
  };
  const Employee = async () => {
    const user = await Auth.currentAuthenticatedUser({});
    const list = await API.graphql({
      query: queries.getEmployee,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        id: dataResult?.id,
      },
    });

    setData(list?.data?.getEmployee);

    const fetchAllBookings = async (nextToken, result = []) => {
      const response = await API.graphql({
        query: queries.getBookingbyAgencyID,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          agencyID: list?.data?.getEmployee?.agencyID,
          nextToken,
        },
      });
      console.log("Se hizo una consulta");
      const items = response.data.getBookingbyAgencyID.items;
      result.push(...items);

      // Actualiza dataTravels aquí
      let aprobados = result.filter((obj) => obj.status === "AVAILABLE");
      let cancelados = result.filter((obj) => obj.status !== "AVAILABLE");
      aprobados.sort(
        (a, b) => new Date(a.departure.date) - new Date(b.departure.date)
      );
      cancelados.sort(
        (a, b) => new Date(a.departure.date) - new Date(b.departure.date)
      );
      let resultado = [...aprobados, ...cancelados];
      let arrayFilter = resultado.filter(
        (objeto) => objeto.officeID === dataResult.officeID
      );
      setDataTravels(arrayFilter);

      if (response.data.getBookingbyAgencyID.nextToken) {
        return fetchAllBookings(
          response.data.getBookingbyAgencyID.nextToken,
          result
        );
      }

      return result;
    };

    await fetchAllBookings();
  };

  const Travels = async () => {
    const fetchAllOrders = async (nextToken, result = []) => {
      const response = await API.graphql({
        query: queries.listOrderDetails,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          filter: {
            bookingID: { eq: travel },
          },
          nextToken,
        },
      });
      // return;

      const items = response.data.listOrderDetails.items;
      result.push(...items);

      if (response.data.listOrderDetails.nextToken) {
        return fetchAllOrders(response.data.listOrderDetails.nextToken, result);
      }

      return result;
    };
    const allOrders = await fetchAllOrders();
    console.log(allOrders);
    setDataOrders(allOrders);
  };

  useEffect(() => {
    if (!travels || !transport) Employee();
    if (travel) Travels();
  }, [transport, travels, travel]);

  return (
    <div className={styles.section}>
      <div className={styles.pages}>
        <div className={styles.panel}>
          {userT === "employee" && (
            <>
              <Card
                title={`Agregar una nuevo viaje`}
                onHandle={openTravels}
                icon={`bx bx-calendar-plus`}
              />
              {/* <Card
                title={`Agregar un nuevo transporte`}
                onHandle={openTransport}
                icon={`bx bxs-bus`}
              /> */}
            </>
          )}
        </div>
        <div className={styles.agencies}>
          <div className={styles.title}>
            <h2 style={{ fontWeight: "bold" }}>Lista de Viajes</h2>
            <IconButton aria-label="refresh-email" onClick={() => Employee()}>
              <RefreshIcon />
            </IconButton>
          </div>
          {dataTravels && <TableTravels rows={dataTravels} />}
        </div>
        <div className={styles.agencies}>
          <div className={styles.title}>
            <h2 style={{ fontWeight: "bold" }}>Lista de Ordenes de Venta</h2>
          </div>
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              // getOptionLabel={(option) => option.rif}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              options={dataTravels}
              value={travel}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <div
                    onClick={() => {
                      setTravel(option.id);
                    }}
                  >{`${option.departure.city}, ${option.departure.state} - ${
                    option.arrival.city
                  }, ${option.arrival.state} ${
                    option.departure.date
                  } - ${option.departure.time.slice(0, 5)}`}</div>
                </Box>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Seleccionar viaje" />
              )}
            />
          </FormControl>
          {travel ? (
            <TableOrderDetails rows={dataOrders} />
          ) : (
            <div className={styles.nothingTable}>
              Selecciona un viaje antes para poder ver sus ordenes de venta
            </div>
          )}
        </div>

        <ModalTravel
          offices={data?.office}
          open={travels}
          close={() => setTravels(!travels)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
