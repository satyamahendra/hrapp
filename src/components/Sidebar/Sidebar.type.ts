import { ReactNode } from 'react';

interface NavItem {
  name: string;
  url: string;
  icon: ReactNode;
}

interface NavGroup {
  group: string;
  navs: NavItem[];
}

type NavsArray = NavGroup[];

export interface SidebarViewProps {
  navsArray: NavsArray;
}
