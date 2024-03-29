import { capitalize, cn } from "@/lib/utils";
import { priorities, statuses } from "@/lib/constants";
import { EditFormSchema } from "@/lib/vlidations";
import { Task, TaskPriority, TaskStatus } from "@/types/Tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { editTask, selectTaskById } from "@/reducers/tasksSlice";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Check, ChevronsUpDown } from "lucide-react";

type EditFormProps = {
  taskId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditForm({ taskId, setOpen }: EditFormProps) {
  const dispatch = useAppDispatch();

  const { title, status, priority } = useAppSelector((state) =>
    selectTaskById(state, taskId),
  ) as Task;

  const form = useForm<z.infer<typeof EditFormSchema>>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      title,
      status,
      priority,
    },
  });

  const onSubmit = (values: z.infer<typeof EditFormSchema>) => {
    dispatch(
      editTask({
        id: taskId,
        title: values.title,
        status: values.status,
        priority: values.priority,
      }),
    );

    setOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between md:w-[200px]"
                      >
                        {field.value ? field.value : "Select status..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 md:w-[200px]">
                    <Command>
                      <CommandGroup>
                        {statuses.map((_status, index) => (
                          <CommandItem
                            key={index}
                            value={_status}
                            onSelect={(currentValue) => {
                              const status = currentValue
                                .split(" ")
                                .map((words) => capitalize(words))
                                .join("") as TaskStatus;

                              form.setValue("status", status);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === _status
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {_status}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between md:w-[200px]"
                      >
                        {field.value ? field.value : "Select priority..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 md:w-[200px]">
                    <Command>
                      <CommandGroup>
                        {priorities.map((priority, index) => (
                          <CommandItem
                            key={index}
                            value={priority}
                            onSelect={(currentValue) => {
                              form.setValue(
                                "priority",
                                capitalize(currentValue) as TaskPriority,
                              );
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === priority
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {priority}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
