import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { capitalize, cn } from "@/lib/utils";
import { priorities, statuses } from "@/lib/constants";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandGroup, CommandItem } from "./ui/command";

export default function Filter() {
  const [filter, setFilter] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 1000);

  useEffect(() => {
    console.log(filter);
    console.log(priority);
    console.log(status);
  }, [priority, status, debouncedFilter]);

  return (
    <div className="grid-rows-auto grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-1 md:gap-0">
      {/* filter Input box */}
      <Input
        type="text"
        placeholder="Filter tasks..."
        id="input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full md:w-72"
      />

      <div className="flex flex-col justify-end gap-3 md:flex-row">
        {/* Status combobox */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full md:w-[120px] justify-between"
            >
              {status ? status : "Status..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full md:w-[120px] p-0">
            <Command>
              <CommandGroup>
                {statuses.map((_status, index) => (
                  <CommandItem
                    key={index}
                    value={_status}
                    onSelect={(currentValue) => {
                      setStatus(capitalize(currentValue));
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        _status === status ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {_status}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Priority combobox */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full md:w-[120px] justify-between"
            >
              {priority ? priority : "Priority..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full md:w-[120px] p-0">
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
      </div>
    </div>
  );
}
