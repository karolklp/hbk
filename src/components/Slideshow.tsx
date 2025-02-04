import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { ContactInfo } from "./ContactInfo";
import { Button } from "./ui/button";

interface SlideshowProps {
  images?: string[];
}

const Slideshow = ({
  images = [
    "1a_DSC04548.jpg",
    "1b_Tpairs_TKS07427_32+3_2048.jpg",
    "1d_DSC04792.jpg",
    "2a_Tpairs_TKS07427_32+3_2048.jpg",
    "2b_Tpairs_TKS07601_32+3_2048.jpg",
    "3a_DSC09355_32+1.jpg",
    "3b_DSC09297_32+3_1600_logo.jpg",
    "3c_DSC09342_32+3_1600_logo.jpg",
    "3d_DSC09254_32+1.jpg",
    "3e_Tpairs_TKS07427_32+3_2048.jpg",
    "3f_Tpairs_TKS07427_32+3_2048.jpg",
    "3g_DSC09731_32+1.jpg",
    "3t_DSC09700_32+1.jpg",
    "4a_17.jpg",
    "4b_3.jpg",
    "5a_TKS09718_32+3_2048_logo.jpg",
    "5b_TKS09860_32+3_2048.jpg",
    "5c_TKS09875_32+3_2048.jpg",
    "6a_KOSS_17.jpg",
    "6c_272295993_651222106332480_1948810693727900414_n.jpg"
  ],
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full bg-black">
      <ContactInfo />

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={`photos/${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 backdrop-blur-md"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20 backdrop-blur-md"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
