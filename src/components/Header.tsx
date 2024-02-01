import { ListTodo } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between pt-10">
      <h3 className="flex items-center gap-2 text-2xl font-medium">
        <ListTodo />
        Todo App
      </h3>

      {/* mode toggle component */}
      <ModeToggle />
    </div>
  );
}
