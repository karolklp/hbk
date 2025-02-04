import React from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

type Category = "All" | "Residential" | "Commercial" | "Conceptual";

interface NavigationProps {
  selectedCategory?: Category;
  onCategoryChange?: (category: Category) => void;
}

const Navigation = ({
  selectedCategory = "All",
  onCategoryChange = () => {},
}: NavigationProps) => {
  const categories: Category[] = [
    "All",
    "Residential",
    "Commercial",
    "Conceptual",
  ];

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 px-6 flex items-center justify-between fixed top-0 z-50">
      <div className="text-xl font-semibold text-gray-900">
        Architect Portfolio
      </div>

      <div className="flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className={cn(
              "px-4 py-2 text-sm",
              selectedCategory === category
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900",
            )}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
