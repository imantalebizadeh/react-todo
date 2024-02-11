import { Task as TaskType } from "@/types/Tasks";
import { TableCell, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { ComponentProps, Ref, useEffect, useState } from "react";
import TaskActions from "./TaskActions";
import { cn, splitCapitalizedWord } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { selectTaskById, toggleComplete } from "@/reducers/tasksSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

type Props = {
  task: TaskType;
  ref?: Ref<HTMLTableRowElement>;
} & ComponentProps<"tr">;

export default function Task({ task, ...props }: Props) {
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
