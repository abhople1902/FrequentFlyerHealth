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
export declare type TravelDetailsCreateFormInputValues = {
    Departure?: string;
    Arrival?: string;
};
export declare type TravelDetailsCreateFormValidationValues = {
    Departure?: ValidationFunction<string>;
    Arrival?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TravelDetailsCreateFormOverridesProps = {
    TravelDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Departure?: PrimitiveOverrideProps<TextFieldProps>;
    Arrival?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TravelDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: TravelDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TravelDetailsCreateFormInputValues) => TravelDetailsCreateFormInputValues;
    onSuccess?: (fields: TravelDetailsCreateFormInputValues) => void;
    onError?: (fields: TravelDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TravelDetailsCreateFormInputValues) => TravelDetailsCreateFormInputValues;
    onValidate?: TravelDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TravelDetailsCreateForm(props: TravelDetailsCreateFormProps): React.ReactElement;
