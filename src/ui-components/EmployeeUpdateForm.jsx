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
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getEmployee } from "../graphql/queries";
import { updateEmployee } from "../graphql/mutations";
export default function EmployeeUpdateForm(props) {
  const {
    id: idProp,
    employee: employeeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    pin: "",
    type: "",
    status: "",
    owner: "",
    lastConnection: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [pin, setPin] = React.useState(initialValues.pin);
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [lastConnection, setLastConnection] = React.useState(
    initialValues.lastConnection
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = employeeRecord
      ? { ...initialValues, ...employeeRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setPin(cleanValues.pin);
    setType(cleanValues.type);
    setStatus(cleanValues.status);
    setOwner(cleanValues.owner);
    setLastConnection(cleanValues.lastConnection);
    setErrors({});
  };
  const [employeeRecord, setEmployeeRecord] = React.useState(employeeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getEmployee.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEmployee
        : employeeModelProp;
      setEmployeeRecord(record);
    };
    queryData();
  }, [idProp, employeeModelProp]);
  React.useEffect(resetStateValues, [employeeRecord]);
  const validations = {
    name: [],
    email: [],
    phone: [],
    pin: [],
    type: [{ type: "Required" }],
    status: [],
    owner: [],
    lastConnection: [],
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
          name: name ?? null,
          email: email ?? null,
          phone: phone ?? null,
          pin: pin ?? null,
          type,
          status: status ?? null,
          owner: owner ?? null,
          lastConnection: lastConnection ?? null,
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
          await API.graphql({
            query: updateEmployee.replaceAll("__typename", ""),
            variables: {
              input: {
                id: employeeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EmployeeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              phone,
              pin,
              type,
              status,
              owner,
              lastConnection,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              phone,
              pin,
              type,
              status,
              owner,
              lastConnection,
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
              name,
              email,
              phone: value,
              pin,
              type,
              status,
              owner,
              lastConnection,
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
        label="Pin"
        isRequired={false}
        isReadOnly={false}
        value={pin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              pin: value,
              type,
              status,
              owner,
              lastConnection,
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
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              pin,
              type: value,
              status,
              owner,
              lastConnection,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Office"
          value="OFFICE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Collector"
          value="COLLECTOR"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              pin,
              type,
              status: value,
              owner,
              lastConnection,
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
          children="Enabled"
          value="ENABLED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Disabled"
          value="DISABLED"
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
              name,
              email,
              phone,
              pin,
              type,
              status,
              owner: value,
              lastConnection,
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
      <TextField
        label="Last connection"
        isRequired={false}
        isReadOnly={false}
        value={lastConnection}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              pin,
              type,
              status,
              owner,
              lastConnection: value,
            };
            const result = onChange(modelFields);
            value = result?.lastConnection ?? value;
          }
          if (errors.lastConnection?.hasError) {
            runValidationTasks("lastConnection", value);
          }
          setLastConnection(value);
        }}
        onBlur={() => runValidationTasks("lastConnection", lastConnection)}
        errorMessage={errors.lastConnection?.errorMessage}
        hasError={errors.lastConnection?.hasError}
        {...getOverrideProps(overrides, "lastConnection")}
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
          isDisabled={!(idProp || employeeModelProp)}
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
              !(idProp || employeeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
