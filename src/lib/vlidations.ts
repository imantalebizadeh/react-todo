import { z } from "zod";

export const EditFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  status: z.enum(["InProgress", "Done", "Canceled"], {
    required_error: "Status is required",
  }),
  priority: z.enum(["Low", "Medium", "High"], {
    required_error: "Priority is required",
  }),
});
