import { NavLink } from 'react-router-dom';
import { LuBellRing } from 'react-icons/lu';
import { NavbarViewProps } from './Navbar.type';

const NavbarView: React.FC<NavbarViewProps> = ({ navsArray }) => {
  return (
    <header className="flex flex-col-reverse items-center justify-between w-full px-6 py-6 pb-3 border-b sm:pb-6 sm:flex-row">
      {/* TABS */}
      <nav className="w-full mt-4 sm:mt-0">
        <ul className="flex gap-6 pb-3 overflow-auto sm:pb-0 text-nowrap">
          {navsArray.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.url}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-gray-100' : ''
                } hover:bg-gray-200 px-3 py-2 rounded-lg duration-200`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </ul>
      </nav>

      {/* PROFILE  */}
      <div className="flex self-end h-12 gap-2">
        <div className="flex items-center justify-center w-12 h-12 text-xl border rounded-lg aspect-square">
          <LuBellRing />
        </div>
        <div className="flex gap-2 p-3 border rounded-lg text-nowrap">
          <p>
            <span className="text-gray-400">Good Day,</span> Satya!
          </p>
          <figure className="w-6 h-6 bg-blue-300 rounded-full"></figure>
        </div>
      </div>
    </header>
  );
};
export default NavbarView;
