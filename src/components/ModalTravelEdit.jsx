import React, { useEffect, useLayoutEffect } from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { features, time, transportes, venezuela, week } from "@/constants";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/custom/mutations/employee";
import {
  updateBooking as UPDATEBOOKING,
  createOrderDetail as CREATEORDERDETAILS,
  createTicket as CREATETICKET,
} from "@/graphql/custom/mutations/profile";
import { getBooking as GETBOOKING } from "@/graphql/custom/queries/profile";
import * as subscriptions from "@/graphql/subscriptions";
import { useUser } from "@/context/UserContext";

export default function ModalTravelEdit({ data, open, close }) {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(data.price);
  const [stockVerify, setStockVerify] = useState(0);
  const [stock, setStock] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [parking, setParking] = useState(data?.transportParking);
  const [selectCharts, setSelectCharts] = useState([]);
  const [edit, setEdit] = useState(false);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const handleChangeCharts = (event) => {
    const {
      target: { value },
    } = event;
    setSelectCharts(typeof value === "string" ? value.split(",") : value);
  };
  const onEditTravel = async () => {
    const params = {
      id: data?.id,
      transportParking: parking,
      transportFeatures: selectCharts,
    };
    console.log("params", params);
    try {
      const update = await API.graphql({
        query: mutations.updateBooking,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: params,
        },
      });
      console.log("AQUIII", update);
      close();
      alert("Tu viaje fue actualizado correctamente");
      location.reload();
    } catch (error) {
      console.log("EL ERROR:  ", error.Error);
      alert(error);
      close();
      setParking("");
      setSelectCharts([]);
    }
  };
  const onHandleOrder = async () => {
    let respuesta = window.confirm("¿Deseas agregar una comprar por taquilla?");

    if (!respuesta) {
      return;
    }
    setIsDisabled(true);
    try {
      console.log("STOCK: ", stock);
      const { attributes } = await Auth.currentAuthenticatedUser();
      console.log("ID: ", data?.id);
      const bookingData = await API.graphql({
        query: GETBOOKING,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          id: data?.id,
        },
      });

      if (bookingData.data.getBooking.stock !== stock) {
        console.log("Cambios Existentes, refresca Pagina");
        setIsDisabled(false);
        alert("Cambios Existentes");
        return;
      }

      /* Creamos el orderDetail */
      const orderDetail = await API.graphql({
        query: CREATEORDERDETAILS,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            amount: 1,
            paymentMethod: "TAQUILLA",
            customerName: attributes?.name,
            paymentID: "",
            customerDocument: "",
            isGuest: false,
            total: 0,
            customerEmail: attributes?.email,
            userID: attributes["custom:userTableID"],
            bookingID: data?.id,
          },
        },
      });
      console.log("ORDERDETAILS: ", orderDetail);
      /* Creamos el ticket */
      let i = stock.toString().padStart(2, "0");
      const ticket = await API.graphql({
        query: CREATETICKET,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            code: `${data?.code}-${i}`,
            bookingID: data?.id,
            status: "PAID",
            customerID: "29f7c1aa-8b49-4db0-baaa-8e78879f2437",
            orderDetailID: orderDetail?.data?.createOrderDetail.id,
            description: "TAQUILLA",
          },
        },
      });
      /* Actualizamos el stock */
      const updateBookingStock = await API.graphql({
        query: UPDATEBOOKING,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            id: data.id,
            stock: stock - 1,
          },
        },
      });
      setStock(updateBookingStock.data.updateBooking.stock);
    } catch (error) {
      console.log(error);
    }
    setIsDisabled(false);
  };

  useEffect(() => {
    console.log(data.stock);
    setStockVerify(data?.stock);
    setStock(data?.stock);

    const updateSub = API.graphql({
      query: subscriptions.onUpdateBooking,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        id: data.id,
      },
    }).subscribe({
      next: ({ provider, value: { data } }) => {
        setStockVerify(data?.onUpdateBooking?.stock);
        console.log("QUE VERGA HACE: ", data?.onUpdateBooking?.stock);
      },
      error: (error) => console.warn(error),
    });
    return () => {
      updateSub.unsubscribe();
    };
  }, [data]);

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.contentTravel}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h2>Tu viaje</h2>
              </div>
              <div className={styles.inputs}>
                <div className={styles.travel}>
                  <div className={styles.departure}>
                    <p>Salida</p>
                    <div className={styles.form}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Estado"
                        defaultValue={data?.departure?.state}
                        disabled
                      />
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Ciudad"
                        defaultValue={data?.departure?.city}
                        disabled
                      />
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                      value={data?.departure?.address}
                      disabled
                    />
                    <div className={styles.datetime}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className={styles.date}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Fecha de salida"
                            defaultValue={data?.departure?.date}
                            disabled
                          />
                        </div>
                        <div className={styles.time}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Tiempo de salida"
                            defaultValue={data?.departure?.time}
                            disabled
                          />
                        </div>
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className={styles.arrival}>
                    <p>Llegada</p>
                    <div className={styles.form}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Estado"
                        defaultValue={data?.arrival?.state}
                        disabled
                      />
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Ciudad"
                        defaultValue={data?.arrival?.city}
                        disabled
                      />
                    </div>
                    <TextField
                      id="outlined-basic"
                      label="Direccion"
                      variant="outlined"
                      value={data?.arrival?.address}
                      disabled
                    />
                    <div className={styles.datetime}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className={styles.date}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Fecha de llegada"
                            defaultValue={data?.arrival?.date}
                            disabled
                          />
                        </div>
                        <div className={styles.time}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Tiempo de llegada"
                            defaultValue={data?.arrival?.time}
                            disabled
                          />
                        </div>
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <p>Tickets</p>
                <div className={styles.inputTravel}>
                  <TextField
                    id="outlined-basic"
                    label="Conductor"
                    variant="outlined"
                    value={data?.driver}
                    disabled
                    sx={{ width: 450 }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Tipo de transporte"
                    variant="outlined"
                    value={data?.transport}
                    disabled
                    sx={{ width: 450 }}
                  />
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Precio"
                        variant="outlined"
                        defaultValue={price ? price : data?.price}
                        disabled
                        sx={{ width: 200 }}
                      />
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Cantidad de puestos disponibles"
                        disabled
                        defaultValue={stock ? stock : data?.stock}
                        sx={{ width: 200 }}
                      />
                    </div>

                    <div
                      style={{
                        fontSize: 11,
                        marginTop: 5,
                      }}
                    >
                      Recuerda que tu precio se vera reflejo al final por el 10%
                      de comision de Bybus
                    </div>
                  </div>
                </div>
                <p>Opcionales</p>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Lugar del estacionamiento"
                    variant="outlined"
                    disabled={!edit}
                    defaultValue={data?.transportParking}
                    onChange={(e) => setParking(e.target.value)}
                    sx={{
                      width: 500,
                    }}
                  />

                  {edit ? (
                    <FormControl fullWidth style={{ marginLeft: "5px" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Caracteristicas del bus
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectCharts}
                        onChange={handleChangeCharts}
                        disabled={!edit}
                        defaultValue={data?.transportFeatures}
                        input={
                          <OutlinedInput label="Caracteristicas del bus" />
                        }
                        renderValue={(selected) =>
                          selected.map((charts) => features[charts]).join(", ")
                        }
                        MenuProps={MenuProps}
                      >
                        {Object.keys(features).map((charts) => (
                          <MenuItem key={charts} value={charts}>
                            <Checkbox
                              checked={selectCharts.indexOf(charts) > -1}
                            />
                            <ListItemText primary={features[charts]} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <TextField
                      // id="outlined-basic"
                      // label=""
                      // variant="outlined"
                      disabled
                      defaultValue={data?.transportFeatures}
                      sx={{
                        width: 500,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <div className={styles.control}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    if (edit) {
                      onEditTravel();
                      setEdit(!edit);
                    }
                    setEdit(!edit);
                  }}
                  disabled={isDisabled}
                >
                  {edit ? "Guardar" : "Editar"}
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  disabled={isDisabled}
                  onClick={() => {
                    close();
                    setPrice(data?.price);
                    setStock(data?.stock);
                  }}
                >
                  Salir
                </Button>
              </div>
              {stock > 0 && (
                <Button
                  variant="contained"
                  size="large"
                  // color="error"
                  onClick={() => {
                    onHandleOrder();
                  }}
                  disabled={isDisabled}
                >
                  Agregar venta por taquilla
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
