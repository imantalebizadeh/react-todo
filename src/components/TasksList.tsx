import Task from "./Task";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

import { useAppSelector } from "@/hooks/useAppSelector";
import { selectAllTasks } from "@/reducers/tasksSlice";

export default function TasksList() {
  const tasks = useAppSelector(selectAllTasks);

  return (
    <>
      {tasks.length !== 0 ? (
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
              <Task key={task.id} task={task} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <h4 className="text-center text-base text-gray-500 opacity-90">
          There is nothing to do.
        </h4>
      )}
    </>
  );
}
