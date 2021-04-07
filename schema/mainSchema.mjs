import { AuthorDefs, AuthorResolver } from "./AuthorSchema.mjs";
import { PersonDefs } from "./PersonSchema.mjs";

export const mainSchema = `
  ${PersonDefs}
  ${AuthorDefs}
`;

export const mainResolvers = { ...AuthorResolver };
