import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { User } from "lucide-react";
import { Button } from "./ui/button";

export function ContactInfo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/20"
        >
          <User className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 backdrop-blur-2xl bg-white/30 border-white/20 mr-4 mt-2"
        align="end"
      >
        <div className="space-y-4">
          <div className="text-xl font-semibold text-white">Hanna Klepacka</div>
          <div className="space-y-2 text-white/80">
            <div>Copenhagen</div>
            <div>contact@email.com</div>
            <div>+45 12 34 56 78</div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
