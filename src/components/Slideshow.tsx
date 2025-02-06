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
    "mobile/1_DSC04595.jpg",
    "mobile/2_DSC03896-2.jpg",
    "mobile/3_DSC04587.jpg",
    "mobile/DSC09227_32+1.jpg",
    "mobile/DSC09297_32+1.jpg",
    "mobile/DSC09333_32+1.jpg",
    "mobile/DSC09336_32+1.jpg",
    "mobile/DSC09342_32+1.jpg",
    "mobile/DSC09392_32+1.jpg",
    "mobile/DSC09413_32+1.jpg",
    "mobile/DSC09461_32+1.jpg",
    "mobile/DSC09474_32+1.jpg",
    "mobile/DSC09494_32+1.jpg",
    "mobile/DSC09503_32+1.jpg",
    "mobile/DSC09537_32+1.jpg",
    "mobile/DSC09556_32+1.jpg",
    "mobile/DSC09560_32+1.jpg",
    "mobile/DSC09586_32+1.jpg",
    "mobile/DSC09666_32+1.jpg",
    "mobile/DSC09672_32+1.jpg",
    "mobile/DSC09696_32+1.jpg",
    "mobile/DSC09700_32+1.jpg",
    "mobile/DSC09747_32+1.jpg",
    "mobile/DSC09775_32+1.jpg",
    "mobile/HAMAK_NoweOrłowo_27.JPG",
    "mobile/HAMAK_NoweOrłowo_28.JPG",
    "mobile/HAMAK_NoweOrłowo_60.JPG",
    "mobile/HAMAK_NoweOrłowo_61.JPG",
    "mobile/TKS07438_32+1.jpg",
    "mobile/TKS07450_32+1.jpg",
    "mobile/TKS07471_32+1.jpg",
    "mobile/TKS07501_32+1.jpg",
    "mobile/TKS07601_32+1.jpg",
    "mobile/TKS07605_32+1.jpg",
    "mobile/TKS07620_32+1.jpg",
    "mobile/TKS07629_32+1.jpg",
    "mobile/TKS09716_32+1.jpg",
    "mobile/TKS09718_32+1.jpg",
    "mobile/TKS09843_32+1.jpg",
    "mobile/TKS09860_32+1.jpg"
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
          src={`photos/${currentImages[currentIndex]}`}
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
