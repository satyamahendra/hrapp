import { useEffect, useState } from 'react';
import MainLayoutView from './MainLayout.view';
import { useIsSmallScreen } from '@/helpers/hooks/useIsSmallScreen';
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const { pathname } = useLocation();

  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    // kalau screennya < 640px (mobile mode), toggle false.
    if (isSmallScreen) {
      setToggleNavbar(true);
    }
    // kalau screennya > 640px (edsktop mode), toggle true.
    if (!isSmallScreen) {
      setToggleNavbar(false);
    }
  }, [isSmallScreen]);

  // auto close sidebar when mobiel mode
  useEffect(() => {
    if (!isSmallScreen) {
      setToggleNavbar(false);
    }
  }, [pathname]);

  return (
    <MainLayoutView
      toggleNavbar={toggleNavbar}
      setToggleNavbar={setToggleNavbar}
    />
  );
};

export default MainLayout;
