import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingSlide {
  image: string;
  title: string;
  description: string;
}

const slides: OnboardingSlide[] = [
  {
    image: '/assets/logos/p_logo_01.png',
    title: 'Welcome to Potaato',
    description: 'Your personal Indian meal planner'
  },
  {
    image: '/assets/onboarding/meal-planner.png',
    title: 'Discover Daily Meals',
    description: 'Get personalized Indian thali suggestions for your daily meals'
  },
  {
    image: '/assets/onboarding/location.png',
    title: 'Regional Specialties',
    description: 'Explore dishes from different regions of India'
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      // Navigate to main app and save onboarding completion
      localStorage.setItem('onboardingComplete', 'true');
      navigate('/app');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('onboardingComplete', 'true');
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-potaato-pink flex flex-col">
      {/* Skip button */}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 text-white opacity-80 hover:opacity-100"
        >
          Skip
        </button>
      )}

      {/* Slides */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-48 h-48 object-contain mb-8"
            />
            <h1 className="text-2xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/80 text-lg max-w-xs">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Next/Start button */}
      <div className="p-6">
        <Button
          onClick={handleNext}
          className="w-full bg-white text-potaato-pink hover:bg-white/90 py-6 text-lg font-semibold rounded-full"
        >
          {currentSlide === slides.length - 1 ? "Let's Get Started" : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding; 