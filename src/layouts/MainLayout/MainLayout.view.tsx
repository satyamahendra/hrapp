import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayoutView = () => (
  <main className="flex min-h-screen">
    {/* SIDEBAR */}
    <div className="w-96">
      <Sidebar />
    </div>

    {/* NAVBAR */}
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  </main>
);

export default MainLayoutView;
