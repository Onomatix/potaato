import React from 'react';
import { Menu, Palette } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from './LanguageSwitcher';
import { ColorScheme } from '@/utils/colorSchemes';

interface HamburgerMenuProps {
  colorScheme: ColorScheme;
  onColorSchemeChange: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ colorScheme, onColorSchemeChange }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={`p-2 rounded-lg hover:bg-white/10 transition-colors`}
          aria-label="Open menu"
        >
          <Menu size={24} className="text-white" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className={`${colorScheme.background} border-none`}>
        <SheetHeader>
          <SheetTitle className={`${colorScheme.text} text-xl font-bold`}>Settings</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <h3 className={`${colorScheme.text} font-medium`}>Language</h3>
            <div className="pl-2">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className={`${colorScheme.text} font-medium`}>Theme</h3>
            <div className="pl-2">
              <button
                onClick={onColorSchemeChange}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${colorScheme.secondary} text-white hover:opacity-90`}
              >
                <Palette size={18} />
                <span>Change Color Theme</span>
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu; 