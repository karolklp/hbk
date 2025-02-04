import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  image: string;
  title: string;
  category: "Residential" | "Commercial" | "Conceptual";
  description: string;
};

interface ProjectGridProps {
  projects?: Project[];
  selectedCategory?: string | null;
  onProjectClick?: (project: Project) => void;
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Modern Villa Design",
      category: "Residential",
      description:
        "Contemporary residential project featuring minimalist design elements.",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Urban Office Complex",
      category: "Commercial",
      description: "Modern office space with sustainable architecture.",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      title: "Future Living Spaces",
      category: "Conceptual",
      description: "Innovative concept for future urban living.",
    },
  ],
  selectedCategory = null,
  onProjectClick = () => {},
}: ProjectGridProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-white p-6 md:p-8 lg:p-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              onClick={() => onProjectClick(project)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
