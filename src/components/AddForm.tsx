import { useState } from "react";

import { TaskPriority } from "@/types/Tasks";
import { capitalize, cn } from "@/lib/utils";
import { priorities } from "@/lib/constants";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addTask } from "@/reducers/tasksSlice";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem } from "./ui/command";

export default function AddForm() {
  const { toast } = useToast();
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (!input) {
      toast({
        variant: "destructive",
        title: "Please enter task title",
      });

      return;
    } else if (!priority) {
      toast({
        variant: "destructive",
        title: "Please select task priority",
      });

      return;
    }

    dispatch(addTask(input, priority as TaskPriority));

    setInput("");
    setPriority("");
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      {/* Input box */}
      <Input
        type="text"
        placeholder="Title..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Priority combobox */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between md:w-[200px]"
          >
            {priority ? priority : "Priority..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 md:w-[130px]">
          <Command>
            <CommandGroup>
              {priorities.map((_priority, index) => (
                <CommandItem
                  key={index}
                  value={_priority}
                  onSelect={(currentValue) => {
                    setPriority(capitalize(currentValue));
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      _priority === priority ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {_priority}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Submit button */}
      <Button type="button" onClick={handleClick}>
        Add task
      </Button>
    </div>
  );
}
