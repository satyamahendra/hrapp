import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';
import { MainLayoutViewProps } from './MainLayout.type';

import { PiList, PiX } from 'react-icons/pi';

const MainLayoutView: React.FC<MainLayoutViewProps> = ({
  toggleNavbar,
  setToggleNavbar,
}) => (
  <div className="flex min-h-screen">
    {/* TOGGLE SIDEBAR BUTTON */}
    <button
      onClick={() => setToggleNavbar((prev) => !prev)}
      className="fixed z-20 p-2 text-2xl text-white bg-yellow-400 rounded-xl top-6 left-6 sm:hidden "
    >
      {toggleNavbar ? <PiX /> : <PiList />}
    </button>

    {/* SIDEBAR */}
    {toggleNavbar && (
      <div className="fixed top-0 left-0 z-10 w-screen sm:static sm:w-96">
        <Sidebar />
      </div>
    )}

    {/* NAVBAR */}
    <div className="w-full">
      <Navbar />

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainLayoutView;
