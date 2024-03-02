import { Link } from 'react-router-dom';
import { SidebarViewProps } from './Sidebar.type';
import React from 'react';

const SidebarView: React.FC<SidebarViewProps> = ({ navsArray }) => (
  <aside className="w-full h-screen border-r">
    <h1 className="py-6 text-3xl text-center text-yellow-400">HIVE</h1>
    <ul className="flex flex-col gap-4 px-6 text-nowrap">
      {navsArray.map((group, i: number) => (
        <React.Fragment key={i}>
          <h2 className="text-gray-400">{group.group}</h2>
          {group.navs.map((nav) => (
            <li key={nav.url}>
              <Link
                to={nav.url}
                className="flex items-center gap-4 p-2 duration-200 hover:bg-blue-100 rounded-xl hover:text-blue-500"
              >
                <div className="text-xl">{nav.icon}</div>
                {nav.name}
              </Link>
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </aside>
);

export default SidebarView;
