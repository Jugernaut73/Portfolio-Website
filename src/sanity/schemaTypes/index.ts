import { type SchemaTypeDefinition } from 'sanity'
import { techType } from './techType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [techType, projectType],
}
