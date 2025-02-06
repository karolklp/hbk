import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { ContactInfo } from "./ContactInfo";
import { Button } from "./ui/button";

interface SlideshowProps {
  landscapeImages?: string[];
  portraitImages?: string[];
}

const Slideshow = ({
  landscapeImages = [
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
  ],
  portraitImages = [
    "portrait/modern-building-1.jpg",
    "portrait/interior-design-1.jpg",
    "portrait/facade-detail-1.jpg",
    "portrait/staircase-1.jpg",
    "portrait/minimal-space-1.jpg",
  ],
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPortrait, setIsPortrait] = React.useState(
    window.innerHeight > window.innerWidth,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImages = isPortrait ? portraitImages : landscapeImages;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length,
    );
  };

  return (
    <div className="relative w-full h-full bg-black">
      <ContactInfo />

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={
            isPortrait
              ? `https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=800&h=1200&fit=crop`
              : `photos/${currentImages[currentIndex]}`
          }
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
        {currentImages.map((_, index) => (
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
