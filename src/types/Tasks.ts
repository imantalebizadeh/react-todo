import { EditFormSchema } from "@/lib/vlidations";
import { z } from "zod";

export type Task = { id: string } & z.infer<typeof EditFormSchema>;
export type TaskStatus = z.infer<typeof EditFormSchema.shape.status>;
export type TaskPriority = z.infer<typeof EditFormSchema.shape.priority>;
