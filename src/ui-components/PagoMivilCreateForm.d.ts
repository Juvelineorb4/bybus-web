/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PagoMivilCreateFormInputValues = {
    documento?: string;
    telefono?: string;
    codigoBanco?: string;
    nombreBanco?: string;
};
export declare type PagoMivilCreateFormValidationValues = {
    documento?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    codigoBanco?: ValidationFunction<string>;
    nombreBanco?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagoMivilCreateFormOverridesProps = {
    PagoMivilCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    documento?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    codigoBanco?: PrimitiveOverrideProps<TextFieldProps>;
    nombreBanco?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagoMivilCreateFormProps = React.PropsWithChildren<{
    overrides?: PagoMivilCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PagoMivilCreateFormInputValues) => PagoMivilCreateFormInputValues;
    onSuccess?: (fields: PagoMivilCreateFormInputValues) => void;
    onError?: (fields: PagoMivilCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PagoMivilCreateFormInputValues) => PagoMivilCreateFormInputValues;
    onValidate?: PagoMivilCreateFormValidationValues;
} & React.CSSProperties>;
export default function PagoMivilCreateForm(props: PagoMivilCreateFormProps): React.ReactElement;
