import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayoutView = () => (
  <main className="flex">
    {/* SIDEBAR */}
    <div className="w-1/6">
      <Sidebar />
    </div>

    {/* NAVBAR */}
    <div className="w-4/6">
      <nav>navbar</nav>
      <Outlet />
    </div>
  </main>
);

export default MainLayoutView;
