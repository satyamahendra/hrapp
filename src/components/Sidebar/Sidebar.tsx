import SidebarView from './Sidebar.view';

const Sidebar = () => {
  const navsArray = [
    { group: '', navs: [{ name: 'Home', url: '/attendance' }] },
    {
      group: 'Attendance',
      navs: [
        { name: 'My Attendance', url: '/attendance/my-attendance' },
        { name: 'Review Attendance', url: '/attendance/review-attendance' },
        { name: 'Schedule Team', url: '/attendance/schedule-team' },
        { name: 'Attendance Report', url: '/attendance/attendance-report' },
      ],
    },
    {
      group: 'Time Off',
      navs: [
        { name: 'My Time Off', url: '/attendance/my-time-off' },
        { name: 'Review Time Off', url: '/attendance/review-time-off' },
      ],
    },
  ];

  return <SidebarView navsArray={navsArray} />;
};
export default Sidebar;
