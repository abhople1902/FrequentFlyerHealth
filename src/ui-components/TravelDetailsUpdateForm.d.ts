/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TravelDetails } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TravelDetailsUpdateFormInputValues = {
    Departure?: string;
    Arrival?: string;
};
export declare type TravelDetailsUpdateFormValidationValues = {
    Departure?: ValidationFunction<string>;
    Arrival?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TravelDetailsUpdateFormOverridesProps = {
    TravelDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Departure?: PrimitiveOverrideProps<TextFieldProps>;
    Arrival?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TravelDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TravelDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    travelDetails?: TravelDetails;
    onSubmit?: (fields: TravelDetailsUpdateFormInputValues) => TravelDetailsUpdateFormInputValues;
    onSuccess?: (fields: TravelDetailsUpdateFormInputValues) => void;
    onError?: (fields: TravelDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TravelDetailsUpdateFormInputValues) => TravelDetailsUpdateFormInputValues;
    onValidate?: TravelDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TravelDetailsUpdateForm(props: TravelDetailsUpdateFormProps): React.ReactElement;
