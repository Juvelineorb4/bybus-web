import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, TextField, CircularProgress } from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { API, Auth } from "aws-amplify";
import { createAgency, registerAgencyAdmin } from "@/graphql/mutations";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function ModalAgency({ open, close }) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rif, setRif] = useState("");
  const [phone, setPhone] = useState("");
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState("");
  const [base64, setBase64] = useState("");
  const [percentage, setPercentage] = useState(10);

  const reset = () => {
    setName("");
    setEmail("");
    setRif("");
    setPhone("");
    setBase64("")
    setPercentage(10);
    setIsLoading(false);
    setImage("");
    setImageName("");
    close();
  };

  const onHandleRegister = async () => {
    const { identityId } = await Auth.currentUserCredentials();
    const params = {
      username: email,
      name: name,
      rif: rif,
      phone: phone,
      percentage: percentage,
      agencySubsTableID: "",
      identityID: identityId,
      base64Image: base64,
    };
    console.log("tamos", params);
    setIsLoading(true);
    try {
      // registrar agencia
      const response = await API.graphql({
        query: registerAgencyAdmin,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: params,
        },
      });
      console.log("RESPONSE: ", response);
      // cambiamos
    } catch (error) {
      console.error("ERROR AL REGISTAR AGENCIA: ", error);
      setIsLoading(false);
    }
    reset();
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
                <h2>Registrar agencia</h2>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                    value={name}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Correo electronico"
                    variant="outlined"
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    label="RIF"
                    variant="outlined"
                    value={rif}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setRif(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Telefono"
                    variant="outlined"
                    value={phone}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Porcentaje %"
                    variant="outlined"
                    value={percentage}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </div>
                <div className={styles.inputImage}>
                  {image ? (
                    <div className={styles.imageSelect}>
                      <img src={image} alt="preview" width={150} height={150} />
                    </div>
                  ) : (
                    <div className={styles.imageNothing}>
                      <AddPhotoAlternateIcon color="#2f2f2f" />
                    </div>
                  )}
                  <Button variant="contained" component="label">
                    Subir logo
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        let str = e.target.value;
                        let parts = str.split("\\");
                        let result = parts.slice(2).join("\\");
                        setImageName(result);

                        if (e.target.files && e.target.files[0]) {
                          let img = URL.createObjectURL(e.target.files[0]);
                          let reader = new FileReader();
                          reader.onload = function (event) {
                            let result = event.target.result;
                            setBase64(result);
                          };
                          reader.readAsDataURL(e.target.files[0]);
                          setImage(img);
                        }
                      }}
                    />
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={onHandleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? <CircularProgress /> : "Registrar"}
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={reset}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
