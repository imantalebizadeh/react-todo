import { Task as TaskType } from "@/types/Tasks";
import { TableCell, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { ComponentProps, Ref } from "react";
import TaskActions from "./TaskActions";
import { splitCapitalizedWord } from "@/lib/utils";

type Props = {
  task: TaskType;
  ref?: Ref<HTMLTableRowElement>;
} & ComponentProps<"tr">;

export default function Task({ task, ...props }: Props) {
  return (
    <TableRow {...props}>
      <TableCell>
        <Checkbox className="rounded-md" />
      </TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{splitCapitalizedWord(task.status)}</TableCell>
      <TableCell>{task.priority}</TableCell>
      <TableCell>
        <TaskActions taskId={task.id} />
      </TableCell>
    </TableRow>
  );
}
