/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Booking } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingUpdateFormInputValues = {
    status?: string;
    code?: string;
    departureCity?: string;
    arrivalCity?: string;
    stock?: number;
    price?: number;
    percentage?: number;
    createdBy?: string;
    driver?: string;
    transport?: string;
    transportParking?: string;
    transportFeatures?: string[];
    owner?: string;
};
export declare type BookingUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    departureCity?: ValidationFunction<string>;
    arrivalCity?: ValidationFunction<string>;
    stock?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    percentage?: ValidationFunction<number>;
    createdBy?: ValidationFunction<string>;
    driver?: ValidationFunction<string>;
    transport?: ValidationFunction<string>;
    transportParking?: ValidationFunction<string>;
    transportFeatures?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingUpdateFormOverridesProps = {
    BookingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    departureCity?: PrimitiveOverrideProps<TextFieldProps>;
    arrivalCity?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    percentage?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    driver?: PrimitiveOverrideProps<TextFieldProps>;
    transport?: PrimitiveOverrideProps<SelectFieldProps>;
    transportParking?: PrimitiveOverrideProps<TextFieldProps>;
    transportFeatures?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    booking?: Booking;
    onSubmit?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onSuccess?: (fields: BookingUpdateFormInputValues) => void;
    onError?: (fields: BookingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingUpdateFormInputValues) => BookingUpdateFormInputValues;
    onValidate?: BookingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookingUpdateForm(props: BookingUpdateFormProps): React.ReactElement;
