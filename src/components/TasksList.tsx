import { Task as TaskType } from "@/types/Tasks";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import Task from "./Task";

const tasks = [
  {
    name: "test1",
    status: "In Progress",
    priority: "High",
    completed: false,
  },
  {
    name: "test2",
    status: "In Progress",
    priority: "Low",
    completed: false,
  },
  {
    name: "test3",
    status: "Done",
    priority: "High",
    completed: false,
  },
  {
    name: "test4",
    status: "In Progress",
    priority: "Medium",
    completed: false,
  },
  {
    name: "test5",
    status: "Done",
    priority: "Low",
    completed: false,
  },
  {
    name: "test6",
    status: "In Progress",
    priority: "Medium",
    completed: false,
  },
  {
    name: "test7",
    status: "Done",
    priority: "Medium",
    completed: false,
  },
];

export default function TasksList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="w-[300px]">Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <Task key={task.name} task={task as TaskType} />
        ))}
      </TableBody>
    </Table>
  );
}
