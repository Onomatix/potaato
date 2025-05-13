import React, { useState } from 'react';
import { Wheat, Bean, Salad, UtensilsCrossed } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { getFoodImage } from '@/utils/imageSearch';
import { ColorScheme, combineClasses } from '@/utils/colorSchemes';

interface MealItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isAnimating: boolean;
  colorScheme: ColorScheme;
}

const MealItem: React.FC<MealItemProps> = ({ title, description, icon, isAnimating, colorScheme }) => {
  const [error, setError] = useState(false);
  const imageUrl = getFoodImage(description);

  return (
    <Card className={combineClasses(
      `relative overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`,
      colorScheme.background
    )}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!error ? (
          <img
            src={imageUrl}
            alt={description}
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <div className={combineClasses(
            "w-full h-full flex items-center justify-center",
            `${colorScheme.accent} ${colorScheme.text}/70`
          )}>
            {React.cloneElement(icon as React.ReactElement, { size: 48 })}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className={combineClasses(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            `${colorScheme.primary} text-white`
          )}>
            {React.cloneElement(icon as React.ReactElement, { size: 20 })}
          </div>
          <div>
            <h3 className={combineClasses(
              "text-lg font-semibold leading-tight mb-1",
              colorScheme.text
            )}>
              {title}
            </h3>
            <p className={combineClasses(
              "text-base leading-tight",
              `${colorScheme.text}/80`
            )}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Card>
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
  colorScheme: ColorScheme;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onRefresh, colorScheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useTranslation();

  const handleRefresh = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      onRefresh();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <MealItem 
          title={t('base')}
          description={meal.grain} 
          icon={<Wheat size={20} />} 
          isAnimating={isAnimating}
          colorScheme={colorScheme}
        />
        <MealItem 
          title={t('dal')}
          description={meal.dal} 
          icon={<Bean size={20} />} 
          isAnimating={isAnimating}
          colorScheme={colorScheme}
        />
        <MealItem 
          title={t('sabzi')}
          description={meal.sabzi} 
          icon={<Salad size={20} />} 
          isAnimating={isAnimating}
          colorScheme={colorScheme}
        />
        <MealItem 
          title={t('extras')}
          description={meal.extra} 
          icon={<UtensilsCrossed size={20} />} 
          isAnimating={isAnimating}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
};

export default MealCard;
