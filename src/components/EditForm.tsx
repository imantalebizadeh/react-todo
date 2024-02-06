import { capitalize, cn } from "@/lib/utils";
import { priorities, statuses } from "@/lib/constants";
import { EditFormSchema } from "@/lib/vlidations";
import { Task, TaskPriority, TaskStatus } from "@/types/Tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  task: Task;
};

export default function EditForm(props: EditFormProps) {
  const {
    task: { title, status, priority },
  } = props;

  const form = useForm<z.infer<typeof EditFormSchema>>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      title,
      status,
      priority,
    },
  });

  const onSubmit = (values: z.infer<typeof EditFormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Task</FormLabel> */}
              <FormControl>
                <Input placeholder="Title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
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
                        className="w-[200px] justify-between"
                      >
                        {field.value ? field.value : "Select status..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandGroup>
                        {statuses.map((status, index) => (
                          <CommandItem
                            key={index}
                            value={status}
                            onSelect={(currentValue) => {
                              form.setValue(
                                "status",
                                capitalize(currentValue) as TaskStatus,
                              );
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                field.value === status
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {status}
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
                <div className="flex flex-col gap-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className="w-[200px] justify-between"
                        >
                          {field.value ? field.value : "Select priority..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
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
                </div>

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