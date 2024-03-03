import { useEffect, useState } from 'react';
import MainLayoutView from './MainLayout.view';
import { useIsMobile } from '@/helpers/hooks/useIsMobile';
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const { pathname } = useLocation();

  const isMobile = useIsMobile();

  useEffect(() => {
    // kalau screennya < 640px (mobile mode), toggle false.
    if (!isMobile) {
      setToggleNavbar(true);
    }
    // kalau screennya > 640px (edsktop mode), toggle true.
    if (isMobile) {
      setToggleNavbar(false);
    }
  }, [isMobile]);

  // auto close sidebar when mobiel mode
  useEffect(() => {
    if (isMobile) {
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
