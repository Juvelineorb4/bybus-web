/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBooking } from "../graphql/queries";
import { updateBooking } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BookingUpdateForm(props) {
  const {
    id: idProp,
    booking: bookingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    status: "",
    code: "",
    departureCity: "",
    arrivalCity: "",
    stock: "",
    price: "",
    percentage: "",
    createdBy: "",
    driver: "",
    transport: "",
    transportParking: "",
    transportFeatures: [],
    owner: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [code, setCode] = React.useState(initialValues.code);
  const [departureCity, setDepartureCity] = React.useState(
    initialValues.departureCity
  );
  const [arrivalCity, setArrivalCity] = React.useState(
    initialValues.arrivalCity
  );
  const [stock, setStock] = React.useState(initialValues.stock);
  const [price, setPrice] = React.useState(initialValues.price);
  const [percentage, setPercentage] = React.useState(initialValues.percentage);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [driver, setDriver] = React.useState(initialValues.driver);
  const [transport, setTransport] = React.useState(initialValues.transport);
  const [transportParking, setTransportParking] = React.useState(
    initialValues.transportParking
  );
  const [transportFeatures, setTransportFeatures] = React.useState(
    initialValues.transportFeatures
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookingRecord
      ? { ...initialValues, ...bookingRecord }
      : initialValues;
    setStatus(cleanValues.status);
    setCode(cleanValues.code);
    setDepartureCity(cleanValues.departureCity);
    setArrivalCity(cleanValues.arrivalCity);
    setStock(cleanValues.stock);
    setPrice(cleanValues.price);
    setPercentage(cleanValues.percentage);
    setCreatedBy(cleanValues.createdBy);
    setDriver(cleanValues.driver);
    setTransport(cleanValues.transport);
    setTransportParking(cleanValues.transportParking);
    setTransportFeatures(cleanValues.transportFeatures ?? []);
    setCurrentTransportFeaturesValue("");
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [bookingRecord, setBookingRecord] = React.useState(bookingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBooking.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBooking
        : bookingModelProp;
      setBookingRecord(record);
    };
    queryData();
  }, [idProp, bookingModelProp]);
  React.useEffect(resetStateValues, [bookingRecord]);
  const [currentTransportFeaturesValue, setCurrentTransportFeaturesValue] =
    React.useState("");
  const transportFeaturesRef = React.createRef();
  const validations = {
    status: [],
    code: [],
    departureCity: [],
    arrivalCity: [],
    stock: [],
    price: [],
    percentage: [],
    createdBy: [],
    driver: [],
    transport: [],
    transportParking: [],
    transportFeatures: [],
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
          status: status ?? null,
          code: code ?? null,
          departureCity: departureCity ?? null,
          arrivalCity: arrivalCity ?? null,
          stock: stock ?? null,
          price: price ?? null,
          percentage: percentage ?? null,
          createdBy: createdBy ?? null,
          driver: driver ?? null,
          transport: transport ?? null,
          transportParking: transportParking ?? null,
          transportFeatures: transportFeatures ?? null,
          owner: owner ?? null,
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
            query: updateBooking.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookingRecord.id,
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
      {...getOverrideProps(overrides, "BookingUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
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
          children="Available"
          value="AVAILABLE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Soldout"
          value="SOLDOUT"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Boarding"
          value="BOARDING"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Departed"
          value="DEPARTED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Arrived"
          value="ARRIVED"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="Cancelled"
          value="CANCELLED"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code: value,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <TextField
        label="Departure city"
        isRequired={false}
        isReadOnly={false}
        value={departureCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity: value,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.departureCity ?? value;
          }
          if (errors.departureCity?.hasError) {
            runValidationTasks("departureCity", value);
          }
          setDepartureCity(value);
        }}
        onBlur={() => runValidationTasks("departureCity", departureCity)}
        errorMessage={errors.departureCity?.errorMessage}
        hasError={errors.departureCity?.hasError}
        {...getOverrideProps(overrides, "departureCity")}
      ></TextField>
      <TextField
        label="Arrival city"
        isRequired={false}
        isReadOnly={false}
        value={arrivalCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity: value,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.arrivalCity ?? value;
          }
          if (errors.arrivalCity?.hasError) {
            runValidationTasks("arrivalCity", value);
          }
          setArrivalCity(value);
        }}
        onBlur={() => runValidationTasks("arrivalCity", arrivalCity)}
        errorMessage={errors.arrivalCity?.errorMessage}
        hasError={errors.arrivalCity?.hasError}
        {...getOverrideProps(overrides, "arrivalCity")}
      ></TextField>
      <TextField
        label="Stock"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock: value,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.stock ?? value;
          }
          if (errors.stock?.hasError) {
            runValidationTasks("stock", value);
          }
          setStock(value);
        }}
        onBlur={() => runValidationTasks("stock", stock)}
        errorMessage={errors.stock?.errorMessage}
        hasError={errors.stock?.hasError}
        {...getOverrideProps(overrides, "stock")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price: value,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
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
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage: value,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
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
      <TextField
        label="Created by"
        isRequired={false}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy: value,
              driver,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <TextField
        label="Driver"
        isRequired={false}
        isReadOnly={false}
        value={driver}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver: value,
              transport,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.driver ?? value;
          }
          if (errors.driver?.hasError) {
            runValidationTasks("driver", value);
          }
          setDriver(value);
        }}
        onBlur={() => runValidationTasks("driver", driver)}
        errorMessage={errors.driver?.errorMessage}
        hasError={errors.driver?.hasError}
        {...getOverrideProps(overrides, "driver")}
      ></TextField>
      <SelectField
        label="Transport"
        placeholder="Please select an option"
        isDisabled={false}
        value={transport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport: value,
              transportParking,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.transport ?? value;
          }
          if (errors.transport?.hasError) {
            runValidationTasks("transport", value);
          }
          setTransport(value);
        }}
        onBlur={() => runValidationTasks("transport", transport)}
        errorMessage={errors.transport?.errorMessage}
        hasError={errors.transport?.hasError}
        {...getOverrideProps(overrides, "transport")}
      >
        <option
          children="Expreso"
          value="EXPRESO"
          {...getOverrideProps(overrides, "transportoption0")}
        ></option>
        <option
          children="Encava"
          value="ENCAVA"
          {...getOverrideProps(overrides, "transportoption1")}
        ></option>
        <option
          children="Buscama"
          value="BUSCAMA"
          {...getOverrideProps(overrides, "transportoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Transport parking"
        isRequired={false}
        isReadOnly={false}
        value={transportParking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking: value,
              transportFeatures,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.transportParking ?? value;
          }
          if (errors.transportParking?.hasError) {
            runValidationTasks("transportParking", value);
          }
          setTransportParking(value);
        }}
        onBlur={() => runValidationTasks("transportParking", transportParking)}
        errorMessage={errors.transportParking?.errorMessage}
        hasError={errors.transportParking?.hasError}
        {...getOverrideProps(overrides, "transportParking")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures: values,
              owner,
            };
            const result = onChange(modelFields);
            values = result?.transportFeatures ?? values;
          }
          setTransportFeatures(values);
          setCurrentTransportFeaturesValue("");
        }}
        currentFieldValue={currentTransportFeaturesValue}
        label={"Transport features"}
        items={transportFeatures}
        hasError={errors?.transportFeatures?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "transportFeatures",
            currentTransportFeaturesValue
          )
        }
        errorMessage={errors?.transportFeatures?.errorMessage}
        setFieldValue={setCurrentTransportFeaturesValue}
        inputFieldRef={transportFeaturesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Transport features"
          isRequired={false}
          isReadOnly={false}
          value={currentTransportFeaturesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.transportFeatures?.hasError) {
              runValidationTasks("transportFeatures", value);
            }
            setCurrentTransportFeaturesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "transportFeatures",
              currentTransportFeaturesValue
            )
          }
          errorMessage={errors.transportFeatures?.errorMessage}
          hasError={errors.transportFeatures?.hasError}
          ref={transportFeaturesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "transportFeatures")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              code,
              departureCity,
              arrivalCity,
              stock,
              price,
              percentage,
              createdBy,
              driver,
              transport,
              transportParking,
              transportFeatures,
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
          isDisabled={!(idProp || bookingModelProp)}
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
              !(idProp || bookingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
