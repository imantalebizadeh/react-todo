import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";

import { Dialog, DialogTrigger } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import ModalContent from "./ModalContent";
import { removeTask } from "@/reducers/tasksSlice";

export default function TaskActions({ taskId }: { taskId: string }) {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeTask({ taskId }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
          <DialogTrigger className="w-full">
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal content */}
      <ModalContent title="Edit your task" taskId={taskId} setOpen={setOpen} />
    </Dialog>
  );
}
