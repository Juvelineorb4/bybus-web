/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPagoMivil } from "../graphql/mutations";
const client = generateClient();
export default function PagoMivilCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    documento: "",
    telefono: "",
    codigoBanco: "",
    nombreBanco: "",
  };
  const [documento, setDocumento] = React.useState(initialValues.documento);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [codigoBanco, setCodigoBanco] = React.useState(
    initialValues.codigoBanco
  );
  const [nombreBanco, setNombreBanco] = React.useState(
    initialValues.nombreBanco
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDocumento(initialValues.documento);
    setTelefono(initialValues.telefono);
    setCodigoBanco(initialValues.codigoBanco);
    setNombreBanco(initialValues.nombreBanco);
    setErrors({});
  };
  const validations = {
    documento: [{ type: "Required" }],
    telefono: [{ type: "Required" }],
    codigoBanco: [{ type: "Required" }],
    nombreBanco: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          documento,
          telefono,
          codigoBanco,
          nombreBanco,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createPagoMivil.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PagoMivilCreateForm")}
      {...rest}
    >
      <TextField
        label="Documento"
        isRequired={true}
        isReadOnly={false}
        value={documento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              documento: value,
              telefono,
              codigoBanco,
              nombreBanco,
            };
            const result = onChange(modelFields);
            value = result?.documento ?? value;
          }
          if (errors.documento?.hasError) {
            runValidationTasks("documento", value);
          }
          setDocumento(value);
        }}
        onBlur={() => runValidationTasks("documento", documento)}
        errorMessage={errors.documento?.errorMessage}
        hasError={errors.documento?.hasError}
        {...getOverrideProps(overrides, "documento")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={true}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              documento,
              telefono: value,
              codigoBanco,
              nombreBanco,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
      ></TextField>
      <TextField
        label="Codigo banco"
        isRequired={true}
        isReadOnly={false}
        value={codigoBanco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              documento,
              telefono,
              codigoBanco: value,
              nombreBanco,
            };
            const result = onChange(modelFields);
            value = result?.codigoBanco ?? value;
          }
          if (errors.codigoBanco?.hasError) {
            runValidationTasks("codigoBanco", value);
          }
          setCodigoBanco(value);
        }}
        onBlur={() => runValidationTasks("codigoBanco", codigoBanco)}
        errorMessage={errors.codigoBanco?.errorMessage}
        hasError={errors.codigoBanco?.hasError}
        {...getOverrideProps(overrides, "codigoBanco")}
      ></TextField>
      <TextField
        label="Nombre banco"
        isRequired={true}
        isReadOnly={false}
        value={nombreBanco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              documento,
              telefono,
              codigoBanco,
              nombreBanco: value,
            };
            const result = onChange(modelFields);
            value = result?.nombreBanco ?? value;
          }
          if (errors.nombreBanco?.hasError) {
            runValidationTasks("nombreBanco", value);
          }
          setNombreBanco(value);
        }}
        onBlur={() => runValidationTasks("nombreBanco", nombreBanco)}
        errorMessage={errors.nombreBanco?.errorMessage}
        hasError={errors.nombreBanco?.hasError}
        {...getOverrideProps(overrides, "nombreBanco")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
