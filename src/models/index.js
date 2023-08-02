// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TravelDetails } = initSchema(schema);

export {
  TravelDetails
};