import React, { useState } from 'react';
import { Bean, Utensils, Soup } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface MealItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isAnimating: boolean;
}

const MealItem: React.FC<MealItemProps> = ({ title, description, icon, isAnimating }) => {
  return (
    <div className={`meal-item flex flex-col items-center justify-center py-2 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      <div className="mb-1 text-potaato-brown opacity-80 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 text-center">
        <h3 className="text-base font-semibold text-potaato-brown leading-tight">{title}</h3>
        <p className="text-potaato-brown/80 text-base leading-tight">{description}</p>
      </div>
    </div>
  );
};

interface MealCardProps {
  meal: {
    grain: string;
    dal: string;
    sabzi: string;
    extra: string;
  };
  onRefresh: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onRefresh }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      onRefresh();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Card className="overflow-visible bg-white/80 backdrop-blur-sm shadow-md border-potaato-cream/50 rounded-3xl px-4 pt-6 pb-4 relative">
      <h2 className="text-xl font-medium text-center mb-4 text-potaato-brown">Your meal for today:</h2>
      <div className="grid grid-cols-2 gap-4 mb-8 min-h-[220px]">
        <MealItem 
          title="Grain" 
          description={meal.grain} 
          icon={<Utensils size={44} strokeWidth={1.5} />} 
          isAnimating={isAnimating}
        />
        <MealItem 
          title="Dal" 
          description={meal.dal} 
          icon={<Bean size={44} strokeWidth={1.5} />} 
          isAnimating={isAnimating}
        />
        <MealItem 
          title="Sabzi" 
          description={meal.sabzi} 
          icon={<Soup size={44} strokeWidth={1.5} />} 
          isAnimating={isAnimating}
        />
        <MealItem 
          title="Extra" 
          description={meal.extra} 
          icon={<Bean size={44} strokeWidth={1.5} />} 
          isAnimating={isAnimating}
        />
      </div>
     
      <div className="mt-6">
        <button
          onClick={handleRefresh}
          className="w-full bg-potaato-lightBrown text-white font-semibold text-lg py-4 px-6 rounded-full shadow-md transition-all transform hover:shadow-lg hover:bg-potaato-brown focus:outline-none"
        >
          What's for lunch?
        </button>
      </div>
    </Card>
  );
};

export default MealCard;
