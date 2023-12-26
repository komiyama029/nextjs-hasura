import { GetNewsDocument, GetNewsQuery } from "@/gql/graphql";
import { useQuery } from "@apollo/client";

export const useQueryNews = () => {
  const { data } = useQuery<GetNewsQuery>(GetNewsDocument);

  return {
    news: data?.news,
  };
};
