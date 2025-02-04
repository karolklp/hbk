import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    title: string;
    category: string;
    description: string;
    images: string[];
    details: {
      location: string;
      year: string;
      size: string;
    };
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    title: "Modern Minimalist Villa",
    category: "Residential",
    description:
      "A contemporary residential project that embraces minimalist design principles while maximizing natural light and space efficiency. The project features sustainable materials and innovative architectural solutions.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-aac13aab3e96",
    ],
    details: {
      location: "Beverly Hills, CA",
      year: "2023",
      size: "5,200 sq ft",
    },
  },
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[90vw] h-[90vh] bg-white p-0 overflow-hidden">
        <DialogHeader className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-semibold text-white">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-full bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 overflow-y-auto bg-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Project Details
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-sm font-medium">
                      {project.details.location}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="text-sm font-medium">
                      {project.details.year}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="text-sm font-medium">
                      {project.details.size}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Description
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
