import { Dialog, DialogTrigger } from "./ui/dialog";
import ModalContent from "./ModalContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function TaskActions() {
  const [open, setOpen] = useState(false);

  const handleRemove = () => {
    alert("remove");
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
      <ModalContent title="Edit your task" setOpen={setOpen} />
    </Dialog>
  );
}
