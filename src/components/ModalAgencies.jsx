import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Button, TextField, CircularProgress } from "@mui/material";
import styles from "@/styles/Modal.module.css";
import { API, Auth } from "aws-amplify";
import { registerAgencyAdmin, uploadAgencyImage } from "@/graphql/mutations";
import { updateAgency } from "@/graphql/custom/mutations";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function ModalAgencies({ open, close, data, type }) {
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rif, setRif] = useState("");
  const [tableID, setTableID] = useState("");
  const [phone, setPhone] = useState("");
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState("");
  const [base64, setBase64] = useState("");
  const [percentage, setPercentage] = useState(
    data?.percentage ? data?.percentage : 10
  );

  const reset = () => {
    setEdit(true);
    setName("");
    setEmail("");
    setRif("");
    setBase64("")
    setPhone("");
    setTableID("");
    setPercentage(10);
    setIsLoading(false);
    close();
  };
  useEffect(() => {
    if (open) {
      setName(data.name);
      setEmail(data.email);
      setRif(data.rif);
      setPhone(data.phone);
      setTableID(data.id);
      setPercentage(data?.percentage ? data?.percentage : 10);
    }
  }, [data]);

  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let randomString = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  const onHandleRegister = async () => {
    const { identityId } = await Auth.currentUserCredentials();
    const params = {
      username: email,
      name: name,
      rif: rif,
      phone: phone,
      percentage: percentage,
      agencySubsTableID: tableID,
      identityID: identityId,
      base64Image: base64,
    };
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

  const addUserToGroup = async (username = "") => {
    if (username === "") return;
    let apiName = "AdminQueries";
    let path = "/addUserToGroup";
    let myInit = {
      body: {
        username: username,
        groupname: "agency",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const response = await API.post(apiName, path, myInit);
    console.log(response);
  };

  useEffect(() => {}, []);

  const onHandleEdit = async () => {
    const { identityId } = await Auth.currentUserCredentials();
    console.log("listo ara editar");
    const params = {
      id: data?.id,
      percentage,
      name,
      email,
      rif,
      phone,
    };
    setIsLoading(true);
    try {
      await API.graphql({
        query: updateAgency,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: params,
        },
      });
      const image = API.graphql({
        query: uploadAgencyImage,
        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: {
          input: {
            base64Image: base64,
            identityID: identityId
          },
        },
      });
    } catch (error) {
      console.error(" ERROR EN ACTUALIZAR AGENCIA: ", error);
      setIsLoading(false);
    }
    reset();
  };

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
                <h2>
                  {type === "edit" ? `Editar agencia` : `Registrar agencia`}
                </h2>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    defaultValue={data.name}
                    variant="outlined"
                    disabled={edit}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    defaultValue={data.email}
                    variant="outlined"
                    disabled={edit}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    defaultValue={data.rif}
                    variant="outlined"
                    disabled={edit}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    onChange={(e) => setRif(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    defaultValue={data.phone}
                    variant="outlined"
                    disabled={edit}
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
                    disabled={edit}
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
                  <Button variant="contained" component="label" disabled={edit}>
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
                            let resultReplace = result.replace(/^data:image\/\w+;base64,/, "")
                            console.log('tamos',resultReplace)
                            setBase64(resultReplace);
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
                  onClick={type === "edit" ? onHandleEdit : onHandleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress />
                  ) : type === "edit" ? (
                    `GUARDAR`
                  ) : (
                    `Registrar`
                  )}
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

              <div>
                <Button
                  variant="contained"
                  size="large"
                  color="warning"
                  onClick={() => setEdit(!edit)}
                  disabled={isLoading}
                >
                  Editar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
