import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTravelDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TravelDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Departure?: string | null;
  readonly Arrival?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTravelDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TravelDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Departure?: string | null;
  readonly Arrival?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TravelDetails = LazyLoading extends LazyLoadingDisabled ? EagerTravelDetails : LazyTravelDetails

export declare const TravelDetails: (new (init: ModelInit<TravelDetails>) => TravelDetails) & {
  copyOf(source: TravelDetails, mutator: (draft: MutableModel<TravelDetails>) => MutableModel<TravelDetails> | void): TravelDetails;
}