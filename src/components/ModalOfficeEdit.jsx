import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";
import styles from "@/styles/Modal.module.css";
// amplify
import { Auth, API } from "aws-amplify";
import * as mutations from "@/graphql/custom/mutations/office";
import { venezuela } from "@/constants";

export default function ModalOfficeEdit({ open, close, data }) {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEditOffice = async () => {
    console.log('data', data)
    setIsLoading(true);
    const params = {
      id: data?.id,
      name: name ? name.trim() : data?.name,
      state: state ? state : data?.state,
      city: city ? city : data?.city,
      address: address ? address.trim() : data?.address,
      phone: phone ? phone.trim() : data?.phone,
      email: email ? email.trim() : data?.email,
    }

    console.log('params', params)
    try {
      let editOffice = await API.graphql({
        query: mutations.updateOffice,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: params
        },
      });
      console.log(editOffice)
    } catch (error) {
      const { message } = new Error(error);
      console.error0("Error al editar oficina: ", message);
      setIsLoading(false);
    }
    setIsLoading(false);
    resetModal();
    location.reload()
  };

  const resetModal = () => {
    setName("");
    setState("");
    setCity("");
    setAddress("");
    setPhone("");
    setEmail("");
    setEdit(true);
    close();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h2>Tu oficina registrada</h2>
              </div>
              <div className={styles.inputs}>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  disabled={edit}
                  defaultValue={data.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Correo Electronico"
                  variant="outlined"
                  disabled={edit}
                  defaultValue={data.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.input}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      {edit ? (state ? state : data.state) : "Estado"}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={state}
                      disabled={edit}
                      defaultValue={data.state}
                      label="Estado"
                      onChange={(e) => setState(e.target.value)}
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
                      {edit ? (city ? city : data.city) : "Ciudad"}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={city}
                      defaultValue={data.city}
                      disabled={edit}
                      label="Ciudad"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      {venezuela.map((item, index) =>
                        state === item.estado
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
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    label="Direccion"
                    disabled={edit}
                    variant="outlined"
                    defaultValue={data.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Telefono"
                    disabled={edit}
                    variant="outlined"
                    defaultValue={data.phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <Button
                variant="contained"
                size="large"
                // color="main"
                onClick={() => {
                  setEdit(!edit);
                  if (edit === false) onEditOffice()
                }}
              >
                {edit ? "Editar" : "Guardar"}
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={resetModal}
              >
                Salir
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
