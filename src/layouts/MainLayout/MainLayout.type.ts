import { Dispatch, SetStateAction } from 'react';

export interface MainLayoutViewProps {
  toggleNavbar: boolean;
  setToggleNavbar: Dispatch<SetStateAction<boolean>>;
}
