import { News, Tasks } from "@/gql/graphql";
import { makeVar } from "@apollo/client";

export const editNewsVar = makeVar<News | undefined>(undefined);
export const editTaskVar = makeVar<Tasks | undefined>(undefined);

export const newsVar = makeVar<News | undefined>(undefined);
export const taskVar = makeVar<Tasks[]>([]);
