export type TaskStatus = "inProgress" | "done" | "canceled";
export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  completed: boolean;
};
