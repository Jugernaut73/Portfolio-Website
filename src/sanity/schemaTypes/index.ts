import { type SchemaTypeDefinition } from 'sanity'
import { techType } from './techType'
import { projectType } from './projectType'
import { certType } from './certType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [techType, projectType, certType],
}
