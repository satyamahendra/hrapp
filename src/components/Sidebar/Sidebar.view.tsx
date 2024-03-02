import { Link } from 'react-router-dom';
import { SidebarViewProps } from './Sidebar.type';

const SidebarView: React.FC<SidebarViewProps> = ({ navsArray }) => (
  <aside className="w-full h-screen border-r">
    <h1 className="py-6 text-3xl text-center text-yellow-400">HIVE</h1>
    <ul className="flex flex-col gap-4 px-6 text-nowrap">
      {navsArray.map((group) => (
        <>
          <h2 className="text-gray-400">{group.group}</h2>
          {group.navs.map((nav) => (
            <li>
              <Link
                to={nav.url}
                className="flex gap-4 p-2 duration-200 hover:bg-blue-100 rounded-xl hover:text-blue-500"
              >
                <div className="w-6 h-6 bg-gray-100 rounded-lg"></div>
                {nav.name}
              </Link>
            </li>
          ))}
        </>
      ))}
    </ul>
  </aside>
);

export default SidebarView;
