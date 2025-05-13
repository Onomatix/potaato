import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2 justify-center">
      <Button 
        variant={i18n.language === 'en' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('en')}
        className="text-sm"
      >
        English
      </Button>
      <Button 
        variant={i18n.language === 'hi' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('hi')}
        className="text-sm"
      >
        हिन्दी
      </Button>
      <Button 
        variant={i18n.language === 'ta' ? 'default' : 'outline'}
        onClick={() => i18n.changeLanguage('ta')}
        className="text-sm"
      >
        தமிழ்
      </Button>
    </div>
  );
};

export default LanguageSwitcher; 