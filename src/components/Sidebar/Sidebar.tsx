import { LuAlarmClockOff } from 'react-icons/lu';
import SidebarView from './Sidebar.view';

import { PiHouse } from 'react-icons/pi';

import { TbBook2, TbCalendarDown, TbCalendarTime, TbEye } from 'react-icons/tb';
import { BiCommentCheck } from 'react-icons/bi';

const Sidebar = () => {
  const navsArray = [
    {
      group: '',
      navs: [{ name: 'Home', url: '/attendance', icon: <PiHouse /> }],
    },
    {
      group: 'Attendance',
      navs: [
        {
          name: 'My Attendance',
          url: '/attendance/my-attendance',
          icon: <TbCalendarDown />,
        },
        {
          name: 'Review Attendance',
          url: '/attendance/review-attendance',
          icon: <TbEye />,
        },
        {
          name: 'Schedule Team',
          url: '/attendance/schedule-team',
          icon: <TbCalendarTime />,
        },
        {
          name: 'Attendance Report',
          url: '/attendance/attendance-report',
          icon: <TbBook2 />,
        },
      ],
    },
    {
      group: 'Time Off',
      navs: [
        {
          name: 'My Time Off',
          url: '/attendance/my-time-off',
          icon: <LuAlarmClockOff />,
        },
        {
          name: 'Review Time Off',
          url: '/attendance/review-time-off',
          icon: <BiCommentCheck />,
        },
      ],
    },
  ];

  return <SidebarView navsArray={navsArray} />;
};
export default Sidebar;
