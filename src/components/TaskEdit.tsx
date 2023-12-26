import { useReactiveVar } from "@apollo/client";
import { editTaskVar } from "../../cache";
import { useAppMutate } from "@/hooks/useAppMutate";

export const TaskEdit = () => {
  const task = useReactiveVar(editTaskVar);
  const { createTask, updateTask } = useAppMutate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task?.id) {
      updateTask(task.id, task.title);
    } else {
      createTask(task?.title || "");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="new task ?"
          type="text"
          value={task?.title || ""}
          onChange={(e) => editTaskVar({ ...task!, title: e.target.value })}
        />
        <button
          disabled={!task?.title}
          className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
        >
          {task?.id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};
