import { useQueryTasks } from "@/hooks/useQueryTasks";
import { editTaskVar } from "../../cache";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks } = useQueryTasks();

  return (
    <ul>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
