'use client';

import { setTheme } from '@/app/api/set-theme';
import { useState } from 'react';

export function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        setTheme(newTheme ? 'dark' : 'light');
    };

  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme to {isDarkTheme ? 'Light' : 'Dark'}
    </button>
  );
}
