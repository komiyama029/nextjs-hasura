import { useReactiveVar } from "@apollo/client";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { editNewsVar, newsVar } from "../../cache";
import { News } from "@/gql/graphql";
import { useAppMutate } from "@/hooks/useAppMutate";

interface Props {
  news: News;
}

export const NewsItem = ({ news }: Props) => {
  const { deleteNews } = useAppMutate();
  return (
    <li className="my-3">
      <span className="font-bold">{news.content}</span>
      <div className="flex float-right ml-20">
        <PencilSquareIcon
          onClick={() => editNewsVar({ ...news })}
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
        />
        <TrashIcon
          onClick={() => deleteNews(news.id)}
          className="h-5 w-5 text-blue-500 cursor-pointer"
        />
      </div>
    </li>
  );
};
