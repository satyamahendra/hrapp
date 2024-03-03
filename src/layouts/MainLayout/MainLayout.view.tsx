import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';
import { MainLayoutViewProps } from './MainLayout.type';

import { PiList, PiX } from 'react-icons/pi';

const MainLayoutView: React.FC<MainLayoutViewProps> = ({
  toggleNavbar,
  setToggleNavbar,
}) => (
  <main className="flex w-screen min-h-screen">
    {/* TOGGLE SIDEBAR BUTTON */}
    <button
      onClick={() => setToggleNavbar((prev) => !prev)}
      className="fixed z-10 p-2 text-2xl text-white bg-yellow-400 rounded-xl top-6 left-6 sm:hidden "
    >
      {toggleNavbar ? <PiX /> : <PiList />}
    </button>

    {/* SIDEBAR */}
    {toggleNavbar && (
      <div className="fixed top-0 left-0 w-screen sm:static sm:w-96">
        <Sidebar />
      </div>
    )}

    {/* NAVBAR */}
    <div className="w-full">
      <Navbar />

      <section className="p-6">
        <Outlet />
      </section>
    </div>
  </main>
);

export default MainLayoutView;
