import { GetTasksDocument, GetTasksQuery } from "@/gql/graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export const useQueryTasks = () => {
  const { data } = useQuery<GetTasksQuery>(GetTasksDocument, {
    fetchPolicy: "network-only",
    context: {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    },
  });

  return {
    tasks: data?.tasks,
  };
};
