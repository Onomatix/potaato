import React, { useState } from 'react';
import Logo from '../components/Logo';
import MealCard from '../components/MealCard';
import HamburgerMenu from '../components/HamburgerMenu';
import { generateRandomMeal } from '../utils/mealGenerator';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getNextColorScheme, getCurrentColorScheme, combineClasses } from '../utils/colorSchemes';

const Index = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [meal, setMeal] = useState(generateRandomMeal());
  const [isAnimating, setIsAnimating] = useState(false);
  const [colorScheme, setColorScheme] = useState(getCurrentColorScheme());
  
  const handleGenerateMeal = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const newMeal = generateRandomMeal();
      setMeal(newMeal);
      setIsAnimating(false);
      
      toast({
        title: t('wildcard'),
        description: t('with_twist', { region: newMeal.region }),
        duration: 2000,
      });
    }, 500);
  };

  const handleColorSchemeChange = () => {
    const newScheme = getNextColorScheme();
    setColorScheme(newScheme);
    
    toast({
      title: "Theme Changed! 🎨",
      description: "Enjoy the new color palette!",
      duration: 1500,
    });
  };
  
  return (
    <div className={combineClasses("min-h-screen text-white transition-colors duration-500", colorScheme.primary)}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <HamburgerMenu colorScheme={colorScheme} onColorSchemeChange={handleColorSchemeChange} />
          <img 
            src="/assets/logos/p_logo_01.png"
            alt="Potaato Logo"
            className="w-10 h-10"
          />
          <div className="w-10" /> {/* Spacer for balance */}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pt-20 pb-32">
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={meal.grain + meal.dal}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <MealCard meal={meal} onRefresh={handleGenerateMeal} colorScheme={colorScheme} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className={combineClasses(
        "fixed bottom-0 left-0 right-0 backdrop-blur-sm border-t border-white/10 py-4 px-4",
        `${colorScheme.primary}/90`
      )}>
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-white/70">Simple meals. Fresh ideas.</p>
        </div>
      </footer>

      {/* Large Circular Generate Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <button 
          onClick={handleGenerateMeal}
          className={combineClasses(
            "w-[88px] h-[88px] rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 hover:rotate-180",
            `${colorScheme.secondary} text-white hover:shadow-xl`
          )}
          aria-label={t('button_generate')}
        >
          <img 
            src="/assets/logos/p_logo_01.png"
            alt="Generate Meal"
            className="w-12 h-12"
          />
        </button>
      </div>
    </div>
  );
};

export default Index;
