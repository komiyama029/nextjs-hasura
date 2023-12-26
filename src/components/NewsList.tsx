import { useQueryNews } from "@/hooks/useQueryNews";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const { news } = useQueryNews();
  return (
    <ul>
      {news?.map((n) => (
        <NewsItem key={n.id} news={n} />
      ))}
    </ul>
  );
};
