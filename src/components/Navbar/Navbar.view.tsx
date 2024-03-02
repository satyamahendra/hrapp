import { Link } from 'react-router-dom';
import { LuBellRing } from 'react-icons/lu';
import { NavbarViewProps } from './Navbar.type';

const NavbarView: React.FC<NavbarViewProps> = ({ navsArray }) => {
  return (
    <header className="flex items-center justify-between w-full p-6 border-b">
      <nav>
        <ul className="flex gap-6">
          {navsArray.map((nav) => (
            <Link
              key={nav.name}
              to={nav.url}
              className="px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex h-12 gap-2">
        <div className="flex items-center justify-center text-xl border rounded-lg aspect-square">
          <LuBellRing />
        </div>
        <div className="flex gap-2 p-3 border rounded-lg">
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
