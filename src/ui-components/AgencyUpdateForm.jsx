/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Agency } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AgencyUpdateForm(props) {
  const {
    id: idProp,
    agency: agencyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cognitoID: "",
    identityID: "",
    image: "",
    pin: "",
    name: "",
    rif: "",
    email: "",
    phone: "",
    percentage: "",
    status: "",
    owner: "",
  };
  const [cognitoID, setCognitoID] = React.useState(initialValues.cognitoID);
  const [identityID, setIdentityID] = React.useState(initialValues.identityID);
  const [image, setImage] = React.useState(initialValues.image);
  const [pin, setPin] = React.useState(initialValues.pin);
  const [name, setName] = React.useState(initialValues.name);
  const [rif, setRif] = React.useState(initialValues.rif);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [percentage, setPercentage] = React.useState(initialValues.percentage);
  const [status, setStatus] = React.useState(initialValues.status);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = agencyRecord
      ? { ...initialValues, ...agencyRecord }
      : initialValues;
    setCognitoID(cleanValues.cognitoID);
    setIdentityID(cleanValues.identityID);
    setImage(cleanValues.image);
    setPin(cleanValues.pin);
    setName(cleanValues.name);
    setRif(cleanValues.rif);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setPercentage(cleanValues.percentage);
    setStatus(cleanValues.status);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [agencyRecord, setAgencyRecord] = React.useState(agencyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Agency, idProp)
        : agencyModelProp;
      setAgencyRecord(record);
    };
    queryData();
  }, [idProp, agencyModelProp]);
  React.useEffect(resetStateValues, [agencyRecord]);
  const validations = {
    cognitoID: [],
    identityID: [],
    image: [],
    pin: [],
    name: [],
    rif: [],
    email: [],
    phone: [],
    percentage: [],
    status: [],
    owner: [],
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
          cognitoID,
          identityID,
          image,
          pin,
          name,
          rif,
          email,
          phone,
          percentage,
          status,
          owner,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Agency.copyOf(agencyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AgencyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cognito id"
        isRequired={false}
        isReadOnly={false}
        value={cognitoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID: value,
              identityID,
              image,
              pin,
              name,
              rif,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.cognitoID ?? value;
          }
          if (errors.cognitoID?.hasError) {
            runValidationTasks("cognitoID", value);
          }
          setCognitoID(value);
        }}
        onBlur={() => runValidationTasks("cognitoID", cognitoID)}
        errorMessage={errors.cognitoID?.errorMessage}
        hasError={errors.cognitoID?.hasError}
        {...getOverrideProps(overrides, "cognitoID")}
      ></TextField>
      <TextField
        label="Identity id"
        isRequired={false}
        isReadOnly={false}
        value={identityID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID: value,
              image,
              pin,
              name,
              rif,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.identityID ?? value;
          }
          if (errors.identityID?.hasError) {
            runValidationTasks("identityID", value);
          }
          setIdentityID(value);
        }}
        onBlur={() => runValidationTasks("identityID", identityID)}
        errorMessage={errors.identityID?.errorMessage}
        hasError={errors.identityID?.hasError}
        {...getOverrideProps(overrides, "identityID")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image: value,
              pin,
              name,
              rif,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Pin"
        isRequired={false}
        isReadOnly={false}
        value={pin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin: value,
              name,
              rif,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.pin ?? value;
          }
          if (errors.pin?.hasError) {
            runValidationTasks("pin", value);
          }
          setPin(value);
        }}
        onBlur={() => runValidationTasks("pin", pin)}
        errorMessage={errors.pin?.errorMessage}
        hasError={errors.pin?.hasError}
        {...getOverrideProps(overrides, "pin")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name: value,
              rif,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Rif"
        isRequired={false}
        isReadOnly={false}
        value={rif}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif: value,
              email,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.rif ?? value;
          }
          if (errors.rif?.hasError) {
            runValidationTasks("rif", value);
          }
          setRif(value);
        }}
        onBlur={() => runValidationTasks("rif", rif)}
        errorMessage={errors.rif?.errorMessage}
        hasError={errors.rif?.hasError}
        {...getOverrideProps(overrides, "rif")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif,
              email: value,
              phone,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif,
              email,
              phone: value,
              percentage,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Percentage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={percentage}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif,
              email,
              phone,
              percentage: value,
              status,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.percentage ?? value;
          }
          if (errors.percentage?.hasError) {
            runValidationTasks("percentage", value);
          }
          setPercentage(value);
        }}
        onBlur={() => runValidationTasks("percentage", percentage)}
        errorMessage={errors.percentage?.errorMessage}
        hasError={errors.percentage?.hasError}
        {...getOverrideProps(overrides, "percentage")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif,
              email,
              phone,
              percentage,
              status: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Activo"
          value="ACTIVO"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Bloqueado"
          value="BLOQUEADO"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              identityID,
              image,
              pin,
              name,
              rif,
              email,
              phone,
              percentage,
              status,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || agencyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || agencyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
