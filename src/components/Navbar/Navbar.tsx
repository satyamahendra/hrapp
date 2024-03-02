import NavbarView from './Navbar.view';

const Navbar = () => {
  const navsArray = [
    { name: 'Attendance', url: '/attendance' },
    { name: 'Company-verse', url: '/company-verse' },
    { name: 'Project-verse', url: '/project-verse' },
    { name: 'Setting', url: '/setting' },
  ];

  return <NavbarView navsArray={navsArray} />;
};

export default Navbar;
