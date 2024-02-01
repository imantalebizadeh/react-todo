import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";

type PriorityState = "low" | "medium" | "high";

export default function AddForm() {
  const { toast } = useToast();
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<PriorityState>("low");

  const handleClick = () => {
    if (!input) {
      toast({
        variant: "destructive",
        title: "Please enter task name",
      });

      return;
    }

    console.log(input);
    console.log(priority);
  };

  return (
    <div className="flex gap-5">
      {/* Input box */}
      <Input
        type="text"
        placeholder="task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Priority box */}
      <Select onValueChange={(value) => setPriority(value as PriorityState)}>
        <SelectTrigger className="w-[180px]">
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

      {/* Submit button */}
      <Button type="button" onClick={handleClick}>
        Add task
      </Button>
    </div>
  );
}
