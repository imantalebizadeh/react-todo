import { useState } from "react";

import { capitalize, cn } from "@/lib/utils";
import { priorities } from "@/lib/constants";

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

  const handleClick = () => {
    if (!input) {
      toast({
        variant: "destructive",
        title: "Please enter task title",
      });

      return;
    }

    console.log(input);
    console.log(priority);

    setInput("");
    setPriority("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-5">
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
            className="w-full md:w-[200px] justify-between"
          >
            {priority ? priority : "Priority..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[130px] p-0">
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
