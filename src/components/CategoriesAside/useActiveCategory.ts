// hooks/useActiveCategory.ts
import { useState } from 'react';

export const useActiveCategory = (initialLink?: string) => {
  const [activeLink, setActiveLink] = useState<string | null>(initialLink || null);

  const handleCategoryClick = (link: string) => {
    setActiveLink(link);
  };

  const isActive = (link: string) => {
    return activeLink === link;
  };

  return {
    activeLink,
    handleCategoryClick,
    isActive,
  };
};