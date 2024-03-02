import SidebarView from './Sidebar.view';

import { LuAlarmClockOff } from 'react-icons/lu';
import {
  PiHouse,
  PiGitBranch,
  PiIdentificationCardLight,
  PiUserList,
  PiMedal,
  PiCalendarBlank,
} from 'react-icons/pi';
import {
  TbBook2,
  TbCalendarDown,
  TbCalendarTime,
  TbEye,
  TbTie,
} from 'react-icons/tb';
import { BiCommentCheck } from 'react-icons/bi';

import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  function decideNavsArray() {
    const currentMainPath = pathname.split('/')[1];

    if (currentMainPath === 'attendance') {
      return [
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
    }
    if (currentMainPath === 'company-verse') {
      return [
        {
          group: '',
          navs: [{ name: 'Home', url: '/attendance', icon: <PiHouse /> }],
        },
        {
          group: 'Structure Organization',
          navs: [
            {
              name: 'Branch List',
              url: '/company-verse/branch-list',
              icon: <PiGitBranch />,
            },
            {
              name: 'Employee Data',
              url: '/company-verse/employee-data',
              icon: <PiIdentificationCardLight />,
            },
          ],
        },
        {
          group: 'Master',
          navs: [
            {
              name: 'Employment Status',
              url: '/company-verse/employment-status',
              icon: <PiUserList />,
            },
            {
              name: 'Level Position',
              url: '/company-verse/level-position',
              icon: <PiMedal />,
            },
            {
              name: 'Position',
              url: '/company-verse/position',
              icon: <TbTie />,
            },
            {
              name: 'Time Off Category',
              url: '/company-verse/time-off-category',
              icon: <LuAlarmClockOff />,
            },
          ],
        },
        {
          group: 'Manage',
          navs: [
            {
              name: 'Calendar',
              url: '/company-verse/calendar',
              icon: <PiCalendarBlank />,
            },
          ],
        },
      ];
    }
    if (currentMainPath === 'project-verse') {
      return [
        {
          group: '',
          navs: [{ name: 'Home', url: '/project-verse', icon: <PiHouse /> }],
        },
      ];
    }
    return [
      {
        group: '',
        navs: [{ name: 'Home', url: '/project-verse', icon: <PiHouse /> }],
      },
    ];
  }

  const navsArray = decideNavsArray();

  return <SidebarView navsArray={navsArray} />;
};
export default Sidebar;
