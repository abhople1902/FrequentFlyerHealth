/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { TravelDetails } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TravelDetailsUpdateForm(props) {
  const {
    id: idProp,
    travelDetails: travelDetailsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Departure: "",
    Arrival: "",
  };
  const [Departure, setDeparture] = React.useState(initialValues.Departure);
  const [Arrival, setArrival] = React.useState(initialValues.Arrival);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = travelDetailsRecord
      ? { ...initialValues, ...travelDetailsRecord }
      : initialValues;
    setDeparture(cleanValues.Departure);
    setArrival(cleanValues.Arrival);
    setErrors({});
  };
  const [travelDetailsRecord, setTravelDetailsRecord] = React.useState(
    travelDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TravelDetails, idProp)
        : travelDetailsModelProp;
      setTravelDetailsRecord(record);
    };
    queryData();
  }, [idProp, travelDetailsModelProp]);
  React.useEffect(resetStateValues, [travelDetailsRecord]);
  const validations = {
    Departure: [],
    Arrival: [],
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
          Departure,
          Arrival,
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
            TravelDetails.copyOf(travelDetailsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TravelDetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Departure"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Departure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Departure: value,
              Arrival,
            };
            const result = onChange(modelFields);
            value = result?.Departure ?? value;
          }
          if (errors.Departure?.hasError) {
            runValidationTasks("Departure", value);
          }
          setDeparture(value);
        }}
        onBlur={() => runValidationTasks("Departure", Departure)}
        errorMessage={errors.Departure?.errorMessage}
        hasError={errors.Departure?.hasError}
        {...getOverrideProps(overrides, "Departure")}
      ></TextField>
      <TextField
        label="Arrival"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Arrival}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Departure,
              Arrival: value,
            };
            const result = onChange(modelFields);
            value = result?.Arrival ?? value;
          }
          if (errors.Arrival?.hasError) {
            runValidationTasks("Arrival", value);
          }
          setArrival(value);
        }}
        onBlur={() => runValidationTasks("Arrival", Arrival)}
        errorMessage={errors.Arrival?.errorMessage}
        hasError={errors.Arrival?.hasError}
        {...getOverrideProps(overrides, "Arrival")}
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
          isDisabled={!(idProp || travelDetailsModelProp)}
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
              !(idProp || travelDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
