import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

// .env.local ファイルから環境変数をロード
dotenv.config({ path: ".env.local" });

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

  schemaObj[endpoint || ""] = {
    headers: {
      "x-hasura-admin-secret": secret || "",
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
