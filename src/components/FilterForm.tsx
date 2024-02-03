import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function FilterForm() {
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
    <div className="flex items-center justify-between">
      {/* filter Input box */}
      <Input
        type="text"
        placeholder="Filter tasks..."
        id="input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-72"
      />

      <div className="flex gap-5">
        {/* Status box */}
        <Select value={status} onValueChange={(value) => setStatus(value)}>
          <SelectTrigger className="border-2 border-dashed">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="justify-start">
              <SelectItem value="inProgress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
              <SelectItem value="canceled">canceled</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Priority box */}
        <Select value={priority} onValueChange={(value) => setPriority(value)}>
          <SelectTrigger className="border-2 border-dashed">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
