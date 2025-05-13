import { twMerge } from 'tailwind-merge';

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

const predefinedSchemes: ColorScheme[] = [
  {
    primary: 'bg-[#e21b70]', // Original Potaato Pink
    secondary: 'bg-[#ff4d94]',
    accent: 'bg-[#ff80b3]',
    background: 'bg-[#fff5f8]',
    text: 'text-[#4a0018]'
  },
  {
    primary: 'bg-[#FF6B6B]', // Coral Theme
    secondary: 'bg-[#4ECDC4]',
    accent: 'bg-[#45B7AF]',
    background: 'bg-[#FFF9F9]',
    text: 'text-[#2D3436]'
  },
  {
    primary: 'bg-[#6B48FF]', // Purple Dream
    secondary: 'bg-[#9379FF]',
    accent: 'bg-[#B9A6FF]',
    background: 'bg-[#F5F2FF]',
    text: 'text-[#1A1A1A]'
  },
  {
    primary: 'bg-[#00B894]', // Mint Chocolate
    secondary: 'bg-[#00CEC9]',
    accent: 'bg-[#81ECEC]',
    background: 'bg-[#F0FFF4]',
    text: 'text-[#2D3436]'
  },
  {
    primary: 'bg-[#FF9F43]', // Mango Tango
    secondary: 'bg-[#FFC048]',
    accent: 'bg-[#FFEAA7]',
    background: 'bg-[#FFF9F0]',
    text: 'text-[#2D3436]'
  }
];

let currentSchemeIndex = 0;

export const getNextColorScheme = (): ColorScheme => {
  currentSchemeIndex = (currentSchemeIndex + 1) % predefinedSchemes.length;
  return predefinedSchemes[currentSchemeIndex];
};

export const getCurrentColorScheme = (): ColorScheme => {
  return predefinedSchemes[currentSchemeIndex];
};

export const getColorClasses = (element: keyof ColorScheme): string => {
  return predefinedSchemes[currentSchemeIndex][element];
};

export const combineClasses = (baseClasses: string, colorClass: string): string => {
  return twMerge(baseClasses, colorClass);
}; 