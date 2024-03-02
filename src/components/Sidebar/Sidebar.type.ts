import { ReactNode } from 'react';

export interface SidebarViewProps {
  navsArray: {
    group: string;
    navs: {
      name: string;
      url: string;
      icon: ReactNode;
    }[];
  }[];
}
