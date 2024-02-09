import { Task as TaskType } from "@/types/Tasks";
import { TableCell, TableRow } from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { ComponentProps, Ref } from "react";
import TaskActions from "./TaskActions";

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
      <TableCell>{task.status}</TableCell>
      <TableCell>{task.priority}</TableCell>
      <TableCell>
        <TaskActions />
      </TableCell>
    </TableRow>
  );
}
