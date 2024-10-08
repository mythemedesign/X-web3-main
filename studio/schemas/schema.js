import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userSchema } from './userSchema'
import { tweetSchema } from './tweetSchema'
import { markdownDocumentSchema } from "./markdownDocumentSchema"

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, tweetSchema, markdownDocumentSchema]),
})