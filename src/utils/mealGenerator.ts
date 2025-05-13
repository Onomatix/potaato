import { grainOptions, dalOptions, sabziOptions, extraOptions } from '../data/mealOptions';

export interface Meal {
  grain: string;
  dal: string;
  sabzi: string;
  extra: string;
  region: string;
}

const regions = ['North Indian', 'South Indian', 'Bengali', 'Gujarati', 'Maharashtrian'];

export const generateRandomMeal = (): Meal => {
  const randomIndex = (array: string[]): number => Math.floor(Math.random() * array.length);
  
  return {
    grain: grainOptions[randomIndex(grainOptions)],
    dal: dalOptions[randomIndex(dalOptions)],
    sabzi: sabziOptions[randomIndex(sabziOptions)],
    extra: extraOptions[randomIndex(extraOptions)],
    region: regions[randomIndex(regions)]
  };
};
