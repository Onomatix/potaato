import React, { useState } from 'react';
import Logo from '../components/Logo';
import MealCard from '../components/MealCard';
import { generateRandomMeal } from '../utils/mealGenerator';
import { useToast } from '@/components/ui/use-toast';
import { RefreshCcw } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [meal, setMeal] = useState(generateRandomMeal());
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleGenerateMeal = () => {
    setIsAnimating(true);
    
    // Add a small delay to make the animation feel natural
    setTimeout(() => {
      const newMeal = generateRandomMeal();
      setMeal(newMeal);
      setIsAnimating(false);
      
      toast({
        title: "New meal generated!",
        description: "Enjoy your delicious Indian thali",
        duration: 2000,
      });
    }, 500);
  };
  
  return (
    <div className="min-h-screen bg-potaato-cream/80 px-4 py-6 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-repeat opacity-5 pattern-spice z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto">
        <Logo />
        
        <div className="my-6 relative">
          <MealCard meal={meal} onRefresh={handleGenerateMeal} />
          
          {/* Floating refresh button */}
          <button 
            onClick={handleGenerateMeal}
            className="absolute -right-4 bottom-24 bg-white/80 text-potaato-brown p-3 rounded-full shadow-md hover:shadow-lg transition-all"
            aria-label="Refresh meal suggestions"
          >
            <RefreshCcw size={20} />
          </button>
        </div>
        
        <footer className="mt-10 text-center text-potaato-brown/70 flex items-center justify-center">
          <p className="text-sm">Simple meals. Fresh ideas.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
