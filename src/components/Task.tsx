import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Task as TaskType } from "@/types/Tasks";
import { cn, splitCapitalizedWord } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectTaskById, toggleComplete } from "@/reducers/tasksSlice";

import { TableCell, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import TaskActions from "./TaskActions";

type TaskProps = {
  task: TaskType;
} & ComponentPropsWithoutRef<"tr">;

export default function Task({ task, ...props }: TaskProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const { completed } = useAppSelector((state) =>
    selectTaskById(state, task.id),
  ) as TaskType;

  useEffect(() => {
    if (completed) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [completed]);

  const dispatch = useAppDispatch();

  const handleToggle = () => {
    setChecked((prevState) => !prevState);
    dispatch(toggleComplete({ taskId: task.id }));
  };

  return (
    <TableRow {...props}>
      <TableCell>
        <Checkbox
          className="rounded-md"
          checked={checked}
          onCheckedChange={handleToggle}
        />
      </TableCell>
      <TableCell className={cn({ "line-through": checked })}>
        {task.title}
      </TableCell>
      <TableCell>{splitCapitalizedWord(task.status)}</TableCell>
      <TableCell>{task.priority}</TableCell>
      <TableCell>
        <TaskActions taskId={task.id} />
      </TableCell>
    </TableRow>
  );
}
