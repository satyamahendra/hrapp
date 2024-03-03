import { useState, useEffect } from 'react';

export const useIsSmallScreen = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsSmallScreen(windowWidth > 640);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmallScreen;
};
