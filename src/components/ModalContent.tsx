import { Task } from "@/types/Tasks";
import EditForm from "./EditForm";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type Props = {
  title?: string;
  description?: string;
};

export default function ModalContent({ title, description }: Props) {
  return (
    <DialogContent>
      {title ||
        (description && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        ))}

      {/* Edit Form */}
      <EditForm task={{} as Task} />
    </DialogContent>
  );
}
