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
  taskId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalContent({
  title,
  description,
  taskId,
  setOpen,
}: Props) {
  return (
    <DialogContent className="w-[350px] md:w-full rounded-lg">
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
      <EditForm taskId={taskId} setOpen={setOpen} />
    </DialogContent>
  );
}
