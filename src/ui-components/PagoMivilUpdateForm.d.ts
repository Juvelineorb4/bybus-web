/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PagoMivilUpdateFormInputValues = {
    documento?: string;
    telefono?: string;
    codigoBanco?: string;
    nombreBanco?: string;
};
export declare type PagoMivilUpdateFormValidationValues = {
    documento?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    codigoBanco?: ValidationFunction<string>;
    nombreBanco?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PagoMivilUpdateFormOverridesProps = {
    PagoMivilUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    documento?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    codigoBanco?: PrimitiveOverrideProps<TextFieldProps>;
    nombreBanco?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PagoMivilUpdateFormProps = React.PropsWithChildren<{
    overrides?: PagoMivilUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pagoMivil?: any;
    onSubmit?: (fields: PagoMivilUpdateFormInputValues) => PagoMivilUpdateFormInputValues;
    onSuccess?: (fields: PagoMivilUpdateFormInputValues) => void;
    onError?: (fields: PagoMivilUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PagoMivilUpdateFormInputValues) => PagoMivilUpdateFormInputValues;
    onValidate?: PagoMivilUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PagoMivilUpdateForm(props: PagoMivilUpdateFormProps): React.ReactElement;
