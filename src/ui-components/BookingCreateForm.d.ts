/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingCreateFormInputValues = {
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
export declare type BookingCreateFormValidationValues = {
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
export declare type BookingCreateFormOverridesProps = {
    BookingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type BookingCreateFormProps = React.PropsWithChildren<{
    overrides?: BookingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookingCreateFormInputValues) => BookingCreateFormInputValues;
    onSuccess?: (fields: BookingCreateFormInputValues) => void;
    onError?: (fields: BookingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingCreateFormInputValues) => BookingCreateFormInputValues;
    onValidate?: BookingCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookingCreateForm(props: BookingCreateFormProps): React.ReactElement;
