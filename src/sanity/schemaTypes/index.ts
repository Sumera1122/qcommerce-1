import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import sweet from './sweet';
import nimco from './nimco';
import packagedfoods from './packagedfoods';
import cakes from './cakes';
import deserts from './deserts';
import featureditems from './featureditems';
import fastfood from './fastfood';
import bakery from './bakery';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [fastfood, chef, sweet ,nimco , packagedfoods, cakes, deserts, bakery, featureditems],
};