import { useAppMutate } from "@/hooks/useAppMutate";
import { useReactiveVar } from "@apollo/client";
import { editNewsVar } from "../../cache";

export const NewsEdit = () => {
  const { createNews, updateNews } = useAppMutate();
  const news = useReactiveVar(editNewsVar);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (news?.id) {
      updateNews(news.id, news.content);
    } else {
      createNews(news?.content || "");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="new news ?"
          type="text"
          value={news?.content || ""}
          onChange={(e) => editNewsVar({ ...news!, content: e.target.value })}
        />
        <button
          disabled={!news?.content}
          className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        >
          {news?.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
