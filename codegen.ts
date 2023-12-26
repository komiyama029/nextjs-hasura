import type { CodegenConfig } from "@graphql-codegen/cli";
import * as Types from "@/gql/graphql";

type HasuraSchemaType = {
  [key: string]: {
    headers: {
      "x-hasura-admin-secret": string;
    };
  };
};

const hasuraSchema = (
  endpoint = process.env.HASURA_ENDPOINT,
  secret = process.env.HASURA_ADMIN_SECRET
) => {
  const schemaObj: HasuraSchemaType = {};

  schemaObj["https://nextjs-hasura-kmym.hasura.app/v1/graphql"] = {
    headers: {
      "x-hasura-admin-secret": "zrF9yw3xdKaPs2fn",
    },
  };

  return schemaObj;
};

const config: CodegenConfig = {
  overwrite: true,
  schema: [hasuraSchema()],
  documents: "src/apollo/*.gql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
