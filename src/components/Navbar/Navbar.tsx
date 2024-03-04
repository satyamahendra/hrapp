import NavbarView from './Navbar.view';

const Navbar = () => {
  const navsArray = [
    { name: 'Attendance', url: '/attendance' },
    { name: 'Manage Data', url: '/manage-data' },
    { name: 'Report', url: '/report' },
    { name: 'Setting', url: '/setting' },
  ];

  return <NavbarView navsArray={navsArray} />;
};

export default Navbar;
