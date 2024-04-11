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
  FormHelperText,
} from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { features, time, transportes, venezuela, week } from "@/constants";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import * as employee from "@/graphql/custom/mutations/employee";
import { createScheduleBooking } from "@/graphql/custom/mutations/employee";
import { useUser } from "@/context/UserContext";
import { addDays } from "date-fns";

export default function ModalTravel({ open, close, offices }) {
  const { profileAuth, userAuth } = useUser();
  const [number, setNumber] = useState(1);
  const [stopQ, setStopQ] = useState([]);
  const [selectWeek, setSelectWeek] = useState([]);
  const [transport, setTransport] = useState("");
  const [driver, setDriver] = useState("");
  const [price, setPrice] = useState("");
  const [checked, setChecked] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [min, setMin] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [parking, setParking] = useState("");
  const [selectCharts, setSelectCharts] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  let fechaToday = new Date();

  const dateToday = () => {
    let fechaTodayHere = new Date();
  };
  const officePercentage = async () => {
    const result = await API.graphql({
      query: queries.listAgencies,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        filter: {
          id: { eq: offices?.agencyID },
        },
      },
    });

    setPercentage(result.data.listAgencies.items[0].percentage);
  };
  const [timeArrival, setTimeArrival] = useState({
    hour: "01",
    minutes: "00",
    mode: "AM",
  });
  const [timeDeparture, setTimeDeparture] = useState({
    hour: "01",
    minutes: "00",
    mode: "AM",
  });
  const [departure, setDeparture] = useState({
    city: "",
    state: "",
    address: "",
    date: "",
  });
  const [arrival, setArrival] = useState({
    state: "",
    city: "",
    date: "",
    address: "",
  });
  const [scheduleDate, setScheduleDate] = useState("");
  const resetModal = () => {
    setError(false);
    setStopQ([]);
    setDeparture({
      ...departure,
      city: offices.city,
      address: offices.address,
      state: offices.state,
    });
    setArrival({
      state: "",
      city: "",
      date: "",
      time: "",
      address: "",
    });
    setTimeDeparture({
      hour: "01",
      minutes: "00",
      mode: "AM",
    });
    setTimeArrival({
      hour: "01",
      minutes: "00",
      mode: "AM",
    });
    setTransport("");
    setDriver("");
    setPrice("");
    setQuantity("");
    setSelectWeek([]);
    setChecked(true);
    setParking("")
    setSelectCharts([])
    setBtnDisabled(false);
    close();
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectWeek(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeCharts = (event) => {
    const {
      target: { value },
    } = event;
    setSelectCharts(typeof value === "string" ? value.split(",") : value);
  };
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
  const onCreateTravel = async () => {
    setBtnDisabled(true);
    let timeD =
      timeDeparture.mode === "PM"
        ? Number(timeDeparture.hour) +
          12 +
          ":" +
          timeDeparture.minutes +
          ":00.000"
        : timeDeparture.hour + ":" + timeDeparture.minutes + ":00.000";
    let timeA =
      timeArrival.mode === "PM"
        ? Number(timeArrival.hour) + 12 + ":" + timeArrival.minutes + ":00.000"
        : timeArrival.hour + ":" + timeArrival.minutes + ":00.000";

    const params = {
      booking: {
        agencyID: offices.agencyID,
        officeID: offices.id,
        transport: transport,
        driver: driver,
        transportParking: parking,
        transportFeatures: selectCharts,
        departure: {
          time: timeD,
          date: departure.date,
          city: departure.city,
          state: departure.state,
          address: departure.address.trim(),
        },
        arrival: {
          time: timeA,
          date: arrival.date,
          city: arrival.city,
          state: arrival.state,
          address: arrival.address.trim(),
        },
        departureCity: departure.city,
        arrivalCity: arrival.city,
        stock: parseInt(quantity.trim()),
        price: parseFloat(price.trim()),
        createdBy: profileAuth.id,
      },
      owner: userAuth?.username,
      reprogram: {
        is: !checked,
        date: scheduleDate,
        week: selectWeek,
      },
    };
    console.log(params);
    try {
      const { data } = await API.graphql({
        query: mutations.reprogram,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: JSON.stringify(params) },
      });
      const result = JSON.parse(data?.reprogram);

      if (result?.status !== 200) {
        throw new Error(`toy aqui manito ${result?.error}`);
      }
      resetModal();
    } catch (error) {
      console.log("EL ERROR:  ", error.Error);
      alert(error);
    }
  };

  useEffect(() => {
    // dateToday();
    let fechaInitial = new Date().toISOString().slice(0, 10);
    let fechaToday = new Date();
    officePercentage();
    setDeparture({
      ...departure,
      city: offices.city,
      address: offices.address,
      state: offices.state,
      date: fechaInitial,
    });
    setStartDate(fechaToday);
    setEndDate(addDays(fechaToday, 7));
    setMin(fechaToday);
    setArrival({ ...arrival, date: fechaInitial });
    let horas = fechaToday.getHours();
    let minutos = fechaToday.getMinutes();
    let ampm = horas >= 12 ? "PM" : "AM";
    horas = horas % 12;
    horas = horas ? horas : 12;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    let strTiempo = horas + ":" + minutos + " " + ampm;
    let minutosRedondeados = Math.round(minutos / 15) * 15;
    if (minutosRedondeados >= 60) {
      minutosRedondeados = `00`;
    }
    let horaFormateada =
      horas < 10
        ? `0${minutosRedondeados >= `00` ? horas + 1 : horas}`
        : `${horas}`;

    setTimeDeparture({
      hour: horaFormateada,
      minutes: minutosRedondeados,
      mode: ampm,
    });
    console.log(horaFormateada);
    console.log(minutosRedondeados);
    console.log(ampm);
  }, []);

  if (offices)
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
                  <h2>Registrar nuevo viaje</h2>
                </div>
                <div className={styles.inputs}>
                  <div className={styles.travel}>
                    <div className={styles.departure}>
                      <p>Salida</p>
                      <div className={styles.form}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Estado
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            label="Estado"
                            value={departure.state}
                            disabled
                          >
                            {venezuela.map((item, index) => (
                              <MenuItem value={item.estado} key={index}>
                                {item.estado}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Ciudad
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            label="Ciudad"
                            value={departure.city}
                            disabled
                          >
                            {venezuela.map((item, index) =>
                              departure.state === item.estado
                                ? item.ciudades.map((city, index) => (
                                    <MenuItem value={city} key={index}>
                                      {city}
                                    </MenuItem>
                                  ))
                                : ""
                            )}
                          </Select>
                        </FormControl>
                      </div>
                      <TextField
                        id="outlined-basic"
                        label="Direccion"
                        variant="outlined"
                        value={departure.address}
                        disabled
                      />
                      <div className={styles.datetime}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <div className={styles.date}>
                            <DatePicker
                              onError={true}
                              onChange={(e) => {
                                let fecha = new Date(e)
                                  .toISOString()
                                  .slice(0, 10);
                                setDeparture({ ...departure, date: fecha });
                                setStartDate(e);
                                setEndDate(addDays(e, 7));
                                setMin(e);
                              }}
                              defaultValue={fechaToday}
                            />
                          </div>
                          <div className={styles.time}>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                Hora
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Hora"
                                defaultValue={timeDeparture.hour}
                                value={timeDeparture.hour}
                                onChange={(e) =>
                                  setTimeDeparture({
                                    ...timeDeparture,
                                    hour: e.target.value,
                                  })
                                }
                              >
                                {time.hour.map((item, index) => (
                                  <MenuItem value={item.value} key={index}>
                                    {item.text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                Minutos
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Minutos"
                                defaultValue={timeDeparture.minutes}
                                value={timeDeparture.minutes}
                                onChange={(e) =>
                                  setTimeDeparture({
                                    ...timeDeparture,
                                    minutes: e.target.value,
                                  })
                                }
                              >
                                {time.minutes.map((item, index) => (
                                  <MenuItem value={item.value} key={index}>
                                    {item.text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                MM
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Minutos"
                                defaultValue={timeDeparture.mode}
                                value={timeDeparture.mode}
                                onChange={(e) =>
                                  setTimeDeparture({
                                    ...timeDeparture,
                                    mode: e.target.value,
                                  })
                                }
                              >
                                {time.mode.map((item, index) => (
                                  <MenuItem value={item} key={index}>
                                    {item}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className={styles.arrival}>
                      <p>Llegada</p>
                      <div className={styles.form}>
                        <FormControl
                          fullWidth
                          error={arrival.state === "" && error ? true : false}
                        >
                          <InputLabel id="demo-simple-select-label">
                            Estado
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            value={arrival.state}
                            label="Estado"
                            onChange={(e) =>
                              setArrival({ ...arrival, state: e.target.value })
                            }
                          >
                            {venezuela.map((item, index) => (
                              <MenuItem value={item.estado} key={index}>
                                {item.estado}
                              </MenuItem>
                            ))}
                          </Select>
                          {arrival.state === "" && error && (
                            <FormHelperText
                              style={{
                                color: "red",
                                fontSize: "12px",
                                position: "relative",
                                top: -15,
                                left: -14,
                              }}
                            >
                              Selecciona el estado
                            </FormHelperText>
                          )}
                        </FormControl>
                        <FormControl
                          fullWidth
                          error={arrival.city === "" && error ? true : false}
                        >
                          <InputLabel id="demo-simple-select-label">
                            Ciudad
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            value={arrival.city}
                            label="Ciudad"
                            onChange={(e) =>
                              setArrival({ ...arrival, city: e.target.value })
                            }
                          >
                            {venezuela.map((item, index) =>
                              arrival.state === item.estado ? (
                                item?.ciudades ? (
                                  item.ciudades.map((city, index) => (
                                    <MenuItem value={city} key={index}>
                                      {city}
                                    </MenuItem>
                                  ))
                                ) : (
                                  <MenuItem value={item.capital} key={1}>
                                    {item.capital}
                                  </MenuItem>
                                )
                              ) : (
                                ""
                              )
                            )}
                          </Select>
                          {arrival.city === "" && error && (
                            <FormHelperText
                              style={{
                                color: "red",
                                fontSize: "12px",
                                position: "relative",
                                top: -15,
                                left: -14,
                              }}
                            >
                              {arrival.state === ""
                                ? "Selecciona el estado antes"
                                : "Selecciona la ciudad"}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </div>
                      <TextField
                        id="outlined-basic"
                        label="Direccion"
                        variant="outlined"
                        helperText={
                          arrival.address === "" && error
                            ? "Este campo no puede estar vacío"
                            : ""
                        }
                        error={arrival.address === "" && error ? true : false}
                        FormHelperTextProps={{
                          style: {
                            color: "red",
                            fontSize: "12px",
                            position: "relative",
                            top: -15,
                            left: -14,
                          },
                        }}
                        onChange={(e) =>
                          setArrival({ ...arrival, address: e.target.value })
                        }
                      />
                      <div className={styles.datetime}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <div className={styles.date}>
                            <DatePicker
                              onChange={(e) => {
                                let fecha = new Date(e)
                                  .toISOString()
                                  .slice(0, 10);
                                setArrival({ ...arrival, date: fecha });
                              }}
                              minDate={min}
                              defaultValue={fechaToday}
                            />
                          </div>
                          <div className={styles.time}>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                Hora
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Hora"
                                value={timeArrival.hour}
                                onChange={(e) =>
                                  setTimeArrival({
                                    ...timeArrival,
                                    hour: e.target.value,
                                  })
                                }
                              >
                                {time.hour.map((item, index) => (
                                  <MenuItem value={item.value} key={index}>
                                    {item.text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                Minutos
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Minutos"
                                value={timeArrival.minutes}
                                onChange={(e) =>
                                  setTimeArrival({
                                    ...timeArrival,
                                    minutes: e.target.value,
                                  })
                                }
                              >
                                {time.minutes.map((item, index) => (
                                  <MenuItem value={item.value} key={index}>
                                    {item.text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl className={styles.timeInput}>
                              <InputLabel id="demo-simple-select-label">
                                MM
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                label="Minutos"
                                value={timeArrival.mode}
                                onChange={(e) =>
                                  setTimeArrival({
                                    ...timeArrival,
                                    mode: e.target.value,
                                  })
                                }
                              >
                                {time.mode.map((item, index) => (
                                  <MenuItem value={item} key={index}>
                                    {item}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
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
                      onChange={(e) => setDriver(e.target.value)}
                      sx={{ width: 850 }}
                      helperText={
                        driver === "" && error ? "Coloca un conductor" : ""
                      }
                      FormHelperTextProps={{
                        style: {
                          color: "red",
                          fontSize: "12px",
                          position: "relative",
                          top: -15,
                          left: -14,
                        },
                      }}
                      error={driver === "" && error ? true : false}
                    />
                    <FormControl
                      sx={{ width: 1250 }}
                      error={transport === "" && error ? true : false}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Tipo de transporte
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        value={transport}
                        label="Tipo de transporte"
                        onChange={(e) => setTransport(e.target.value)}
                      >
                        {transportes.map((item, index) => (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                      {transport === "" && error && (
                        <FormHelperText
                          style={{
                            color: "red",
                            fontSize: "12px",
                            position: "relative",
                            top: -15,
                            left: -14,
                          }}
                        >
                          Selecciona un tipo de transporte
                        </FormHelperText>
                      )}
                    </FormControl>
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
                          type="number"
                          onChange={(e) => setPrice(e.target.value)}
                          sx={{ width: 150 }}
                          helperText={
                            price === "" && error ? "Coloca un precio" : ""
                          }
                          FormHelperTextProps={{
                            style: {
                              color: "red",
                              fontSize: "12px",
                              position: "relative",
                              top: -15,
                              left: -14,
                            },
                          }}
                          error={price === "" && error ? true : false}
                        />

                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          label="Cantidad de puestos"
                          type="number"
                          onChange={(e) => setQuantity(e.target.value)}
                          sx={{ width: 250 }}
                          helperText={
                            quantity === "" && error
                              ? "Coloca una cantidad de puestos"
                              : ""
                          }
                          FormHelperTextProps={{
                            style: {
                              color: "red",
                              fontSize: "12px",
                              position: "relative",
                              top: -15,
                              left: -14,
                            },
                          }}
                          error={quantity === "" && error ? true : false}
                        />
                      </div>

                      <div
                        style={{
                          fontSize: 11,
                          marginTop: 5,
                        }}
                      >
                        Recuerda que tu precio se vera reflejo al final por el{" "}
                        {percentage}% de comision de Bybus
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
                      // helperText={
                      //   arrival.address === "" && error
                      //     ? "Este campo no puede estar vacío"
                      //     : ""
                      // }
                      // error={arrival.address === "" && error ? true : false}
                      // FormHelperTextProps={{
                      //   style: {
                      //     color: "red",
                      //     fontSize: "12px",
                      //     position: "relative",
                      //     top: -15,
                      //     left: -14,
                      //   },
                      // }}
                      onChange={(e) =>
                        setParking(e.target.value)
                      }
                      sx={{
                        width: 500
                      }}
                    />

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
                            <Checkbox checked={selectCharts.indexOf(charts) > -1} />
                            <ListItemText primary={features[charts]} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  {/* <p>Paradas</p> */}
                  {/* <div className={styles.stop}>
                    <div className={styles.stopBooking}>
                      {stopQ && (
                        <div className={styles.stopForm}>
                          {stopQ.map((item, index) => (
                            <div className={styles.stopContent} key={index}>
                              <div className={styles.inputTravel}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Estado
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    value={item.state}
                                    label="Estado"
                                    onChange={(e) => {
                                      const updateStop = stopQ.map(
                                        (stop, stopIndex) => {
                                          if (index === stopIndex) {
                                            return {
                                              ...stop,
                                              state: e.target.value,
                                            };
                                          }
                                          return stop;
                                        }
                                      );
                                      setStopQ(updateStop);
                                    }}
                                  >
                                    {venezuela.map((item, index) => (
                                      <MenuItem value={item.estado} key={index}>
                                        {item.estado}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Ciudad
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    value={item.city}
                                    label="Ciudad"
                                    onChange={(e) => {
                                      const updateStop = stopQ.map(
                                        (stop, stopIndex) => {
                                          if (index === stopIndex) {
                                            return {
                                              ...stop,
                                              city: e.target.value,
                                            };
                                          }
                                          return stop;
                                        }
                                      );
                                      setStopQ(updateStop);
                                    }}
                                  >
                                    {venezuela.map((group, index) =>
                                      item.state === group.estado
                                        ? group.ciudades.map((city, index) => (
                                            <MenuItem value={city} key={index}>
                                              {city}
                                            </MenuItem>
                                          ))
                                        : ""
                                    )}
                                  </Select>
                                </FormControl>

                        
                              </div>
                              <div className={styles.inputTravelOther}>
                                <TextField
                                  id="outlined-basic"
                                  label="Direccion"
                                  variant="outlined"
                                  onChange={(e) => {
                                    const updateStop = stopQ.map(
                                      (stop, stopIndex) => {
                                        if (index === stopIndex) {
                                          return {
                                            ...stop,
                                            address: e.target.value,
                                          };
                                        }
                                        return stop;
                                      }
                                    );
                                    setStopQ(updateStop);
                                  }}
                                  sx={{
                                    width: 560,
                                  }}
                                />
                                <TextField
                                  id="outlined-basic"
                                  label="Precio del ticket de la parada"
                                  variant="outlined"
                                  onChange={(e) => {
                                    const updateStop = stopQ.map(
                                      (stop, stopIndex) => {
                                        if (index === stopIndex) {
                                          return {
                                            ...stop,
                                            price: e.target.value,
                                          };
                                        }
                                        return stop;
                                      }
                                    );
                                    setStopQ(updateStop);
                                  }}
                                  sx={{
                                    width: 315,
                                  }}
                                />
                              </div>
                              <Button
                                variant="contained"
                                size="small"
                                startIcon={<AddRoundedIcon />}
                                onClick={() =>
                                  setStopQ((e) => {
                                    let nuevoArreglo = [...e];
                                    nuevoArreglo.splice(index, 1);
                                    return nuevoArreglo;
                                  })
                                }
                                className={styles.deleteStop}
                              >
                                Eliminar
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<AddRoundedIcon />}
                      onClick={() =>
                        setStopQ([
                          ...stopQ,
                          {
                            state: "",
                            city: "",
                            time: "",
                            date: "",
                            address: "",
                            price: "",
                          },
                        ])
                      }
                    >
                      Agregar una parada
                    </Button>
                  </div> */}
                </div>
              </div>
              {/* <div className={styles.datetime}> */}
              {/* <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  > */}
              {/* <div className={styles.dateStop}>
                                      <DatePicker
                                        onChange={(e) => {
                                          const options = {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                          };
                                          let fecha = new Date(e)
                                            .toISOString()
                                            .slice(0, 10);
                                          const updateStop = stopQ.map(
                                            (stop, stopIndex) => {
                                              if (index === stopIndex) {
                                                return {
                                                  ...stop,
                                                  date: fecha,
                                                };
                                              }
                                              return stop;
                                            }
                                          );
                                          setStopQ(updateStop);
                                        }}
                                      />
                                    </div> */}
              {/* <div className={styles.timeStop}> */}
              {/* <div className={styles.time}>
                                        <FormControl
                                          className={styles.timeInput}
                                        >
                                          <InputLabel id="demo-simple-select-label">
                                            00:00
                                          </InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            label="Hora"
                                            value={departure.time.hour}
                                            onChange={(e) => {
                                              let hour = e.target.value;
                                              const updateStop = stopQ.map(
                                                (stop, stopIndex) => {
                                                  if (index === stopIndex) {
                                                    return {
                                                      ...stop,
                                                      time: {
                                                        hour: hour,
                                                      },
                                                    };
                                                  }
                                                  return stop;
                                                }
                                              );
                                              setStopQ(updateStop);
                                            }}
                                          >
                                            {time.hour.map((item, index) => (
                                              <MenuItem
                                                value={item}
                                                key={index}
                                              >
                                                {item}
                                              </MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                        <FormControl
                                          className={styles.timeInput}
                                        >
                                          <InputLabel id="demo-simple-select-label">
                                            00:00
                                          </InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            label="Minutos"
                                            value={departure.time.minutes}
                                            onChange={(e) => {
                                              let minutes = e.target.value;
                                              const updateStop = stopQ.map(
                                                (stop, stopIndex) => {
                                                  if (index === stopIndex) {
                                                    return {
                                                      ...stop,
                                                      time: {
                                                        minutes: minutes,
                                                      },
                                                    };
                                                  }
                                                  return stop;
                                                }
                                              );
                                              setStopQ(updateStop);
                                            }}
                                          >
                                            {time.minutes.map((item, index) => (
                                              <MenuItem
                                                value={item}
                                                key={index}
                                              >
                                                {item}
                                              </MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                        <FormControl
                                          className={styles.timeInput}
                                        >
                                          <InputLabel id="demo-simple-select-label">
                                            AM
                                          </InputLabel>
                                          <Select
                                            labelId="demo-simple-select-label"
                                            label="Mode"
                                            value={departure.time.mode}
                                            onChange={(e) => {
                                              let mode = e.target.value;
                                              const updateStop = stopQ.map(
                                                (stop, stopIndex) => {
                                                  if (index === stopIndex) {
                                                    return {
                                                      ...stop,
                                                      time: {
                                                        mode: mode,
                                                      },
                                                    };
                                                  }
                                                  return stop;
                                                }
                                              );
                                              setStopQ(updateStop);
                                            }}
                                          >
                                            {time.mode.map((item, index) => (
                                              <MenuItem
                                                value={item}
                                                key={index}
                                              >
                                                {item}
                                              </MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                      </div> */}
              {/* <MobileTimePicker
                                        defaultValue={dayjs("2022-04-17T15:30")}
                                        onChange={(e) => {
                                          const options = {
                                            hour12: false,
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            fractionalSecondDigits: 3,
                                          };
                                          let time = new Date(
                                            e
                                          ).toLocaleTimeString("en", options);
                                          const updateStop = stopQ.map(
                                            (stop, stopIndex) => {
                                              if (index === stopIndex) {
                                                return {
                                                  ...stop,
                                                  time: time,
                                                };
                                              }
                                              return stop;
                                            }
                                          );
                                          setStopQ(updateStop);
                                        }}
                                      /> */}
              {/* </div> */}
              {/* </LocalizationProvider> */}
              {/* </div> */}

              <div className={styles.buttons}>
                <div className={styles.control}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                      if (
                        arrival.address === "" ||
                        quantity === "" ||
                        driver === "" ||
                        transport === "" ||
                        price === "" ||
                        arrival.city === "" ||
                        arrival.state === ""
                      ) {
                        setError(true);
                        return;
                      }
                      onCreateTravel();
                      // resetModal();
                    }}
                  >
                    Registrar
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    color="error"
                    onClick={resetModal}
                  >
                    Cancelar
                  </Button>
                </div>

                <div className={styles.check}>
                  <div className={styles.pan}>
                    Quieres programar este viaje de manera automatica?
                    <Checkbox
                      onChange={(e) => setChecked(!checked)}
                      sx={{
                        color: "#8F877F",
                        "&.Mui-checked": {
                          color: "#0077B6",
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <div className={styles.date}>
                        <DatePicker
                          onChange={(e) => {
                            let fecha = new Date(e).toISOString().slice(0, 10);
                            setScheduleDate(fecha);
                          }}
                          disabled={checked}
                          minDate={addDays(startDate, 7)}
                          maxDate={addDays(startDate, 30)}
                        />
                      </div>
                    </LocalizationProvider>

                    <FormControl fullWidth style={{ marginLeft: "5px" }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Días a programar
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={selectWeek}
                        onChange={handleChange}
                        input={<OutlinedInput label="Días a programar" />}
                        renderValue={(selected) =>
                          selected.map((day) => week[day]).join(", ")
                        }
                        MenuProps={MenuProps}
                        disabled={checked}
                      >
                        {Object.keys(week).map((day) => (
                          <MenuItem key={day} value={day}>
                            <Checkbox checked={selectWeek.indexOf(day) > -1} />
                            <ListItemText primary={week[day]} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <p
                    style={{
                      fontSize: 12,
                      textAlign: "justify",
                      marginTop: 10,
                    }}
                  >
                    La fecha a elegir es 7 dias despues de la fecha de inicio
                    del viaje original y un maximo de 30 dias despues de la
                    fecha de inicio. El viaje se reprogramara para cada dia
                    comprendido entre la fecha de inicio del viaje original y la
                    fecha seleccionada en la reprogramacion y los viajes solo se
                    crearan los dias seleccionados se la semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
}
