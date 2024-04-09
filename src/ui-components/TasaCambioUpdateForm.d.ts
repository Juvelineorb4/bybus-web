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
export declare type TasaCambioUpdateFormInputValues = {
    price?: number;
    createdAt?: string;
};
export declare type TasaCambioUpdateFormValidationValues = {
    price?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasaCambioUpdateFormOverridesProps = {
    TasaCambioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TasaCambioUpdateFormProps = React.PropsWithChildren<{
    overrides?: TasaCambioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tasaCambio?: any;
    onSubmit?: (fields: TasaCambioUpdateFormInputValues) => TasaCambioUpdateFormInputValues;
    onSuccess?: (fields: TasaCambioUpdateFormInputValues) => void;
    onError?: (fields: TasaCambioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TasaCambioUpdateFormInputValues) => TasaCambioUpdateFormInputValues;
    onValidate?: TasaCambioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TasaCambioUpdateForm(props: TasaCambioUpdateFormProps): React.ReactElement;
