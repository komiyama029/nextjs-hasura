import { Tasks } from "@/gql/graphql";
import { useReactiveVar } from "@apollo/client";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { editTaskVar } from "../../cache";
import { useAppMutate } from "@/hooks/useAppMutate";

interface Props {
  task: Tasks;
}

export const TaskItem = ({ task }: Props) => {
  const { deleteTask } = useAppMutate();

  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <div className="flex float-right ml-20">
        <PencilSquareIcon
          onClick={() => editTaskVar({ ...task })}
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
        />
        <TrashIcon
          onClick={() => deleteTask(task.id)}
          className="h-5 w-5 text-blue-500 cursor-pointer"
        />
      </div>
    </li>
  );
};
