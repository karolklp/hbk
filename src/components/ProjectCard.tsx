import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

interface ProjectCardProps {
  image: string;
  title: string;
  category: "Residential" | "Commercial" | "Conceptual";
  description: string;
  onClick?: () => void;
}

const ProjectCard = ({
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  title = "Modern Villa Design",
  category = "Residential",
  description = "Contemporary residential project featuring minimalist design elements and sustainable materials.",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white"
      onClick={onClick}
    >
      <Card className="overflow-hidden cursor-pointer h-[380px] group">
        <div className="relative h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-6 text-white h-full flex flex-col justify-end">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-300">{category}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
