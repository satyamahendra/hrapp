import { NavLink } from 'react-router-dom';
import { SidebarViewProps } from './Sidebar.type';
import React from 'react';

const SidebarView: React.FC<SidebarViewProps> = ({ navsArray }) => (
  <aside className="w-full min-h-screen bg-white border-r">
    <h1 className="py-6 text-3xl text-center text-yellow-400">HIVE</h1>
    <ul className="flex flex-col h-full gap-4 px-6 overflow-auto text-nowrap">
      {navsArray.map((group, i: number) => (
        <React.Fragment key={i}>
          <h2 className="text-gray-400">{group.group}</h2>
          {group.navs.map((nav, i: number) => (
            <li key={nav.url}>
              <NavLink
                end={i === 0}
                to={nav.url}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-blue-100 text-blue-500' : ''
                  } flex items-center gap-4 px-3 py-2 duration-200 hover:bg-blue-200 rounded-lg hover:text-blue-600`
                }
              >
                <div className="text-xl">{nav.icon}</div>
                {nav.name}
              </NavLink>
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  </aside>
);

export default SidebarView;
