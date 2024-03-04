import SidebarView from './Sidebar.view';

import { LuAlarmClockOff, LuPartyPopper } from 'react-icons/lu';
import {
  PiHouse,
  PiGitBranch,
  PiIdentificationCardLight,
  PiUserList,
  PiMedal,
  PiUsersThree,
  PiChat,
  PiHandsPraying,
  PiGraduationCap,
  PiBookOpen,
  PiBuildings,
  PiChartBar,
  PiGitPullRequest,
  PiChartPie,
  PiThumbsUp,
  PiUser,
  PiLockKey,
  PiColumns,
  PiMapPin,
  PiChartPieSlice,
  PiCalendarBlank,
  PiUserSwitch,
} from 'react-icons/pi';
import {
  TbBeach,
  TbCalendarDown,
  TbCalendarTime,
  TbEye,
  TbTie,
} from 'react-icons/tb';

import { useLocation } from 'react-router-dom';
import { LiaUserClockSolid } from 'react-icons/lia';

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
              name: 'Review Team Attendance',
              url: '/attendance/review-team-attendance',
              icon: <PiUsersThree />,
            },
            {
              name: 'Employee Attendance',
              url: '/attendance/employee-attendance',
              icon: <TbEye />,
            },
            {
              name: 'Schedule Team',
              url: '/attendance/schedule-team',
              icon: <TbCalendarTime />,
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
              name: 'Review Team Time Off',
              url: '/attendance/review-team-time-off',
              icon: <LiaUserClockSolid />,
            },
            {
              name: 'Review Time Off',
              url: '/attendance/review-time-off',
              icon: <PiChat />,
            },
          ],
        },
      ];
    }
    if (currentMainPath === 'manage-data') {
      return [
        {
          group: '',
          navs: [{ name: 'Dashboard', url: '/manage-data', icon: <PiHouse /> }],
        },
        {
          group: 'Company',
          navs: [
            {
              name: 'Unit',
              url: '/manage-data/unit',
              icon: <PiGitBranch />,
            },
            {
              name: 'Employee',
              url: '/manage-data/employee',
              icon: <PiIdentificationCardLight />,
            },
            {
              name: 'Change Request Review',
              url: '/manage-data/change-request-review',
              icon: <PiGitPullRequest />,
            },
            {
              name: 'Company Event',
              url: '/manage-data/company-event',
              icon: <LuPartyPopper />,
            },
          ],
        },
        {
          group: 'Master',
          navs: [
            {
              name: 'Employment Status',
              url: '/manage-data/employment-status',
              icon: <PiUserList />,
            },
            {
              name: 'Level',
              url: '/manage-data/level',
              icon: <PiMedal />,
            },
            {
              name: 'Position',
              url: '/manage-data/position',
              icon: <TbTie />,
            },
            {
              name: 'Religion',
              url: '/manage-data/religion',
              icon: <PiHandsPraying />,
            },
            {
              name: 'Education Level',
              url: '/manage-data/education-level',
              icon: <PiGraduationCap />,
            },
            {
              name: 'Major Education',
              url: '/manage-data/major-education',
              icon: <PiBookOpen />,
            },
            {
              name: 'Institute',
              url: '/manage-data/institute',
              icon: <PiBuildings />,
            },
            {
              name: 'Skill',
              url: '/manage-data/skill',
              icon: <PiChartBar />,
            },
            {
              name: 'Time Off Category',
              url: '/manage-data/time-off-category',
              icon: <LuAlarmClockOff />,
            },
            {
              name: 'Holiday',
              url: '/manage-data/holiday',
              icon: <TbBeach />,
            },
          ],
        },
      ];
    }
    if (currentMainPath === 'report') {
      return [
        {
          group: 'Attendance Recap',
          navs: [
            { name: 'Chart', url: '/report', icon: <PiChartPie /> },
            {
              name: 'Best & Worst Attendance',
              url: '/report/best-worst-attendance',
              icon: <PiThumbsUp />,
            },
            {
              name: 'Time Off By Unit',
              url: '/report/time-off-by-unit',
              icon: <LuAlarmClockOff />,
            },
            {
              name: 'Time Off By User',
              url: '/report/time-off-by-user',
              icon: <LuAlarmClockOff />,
            },
            {
              name: 'Daily By User',
              url: '/report/daily-by-user',
              icon: <PiCalendarBlank />,
            },
          ],
        },
        {
          group: 'Overtime Recap',
          navs: [
            {
              name: 'Overtime By Team',
              url: '/report/overtime-by-team',
              icon: <PiUsersThree />,
            },
            {
              name: 'Overtime By User',
              url: '/report/overtime-by-user',
              icon: <PiUser />,
            },
          ],
        },
        {
          group: 'Schedule Recap',
          navs: [
            {
              name: 'Schedule',
              url: '/report/schedule',
              icon: <PiCalendarBlank />,
            },
          ],
        },
        {
          group: 'Employee Recap',
          navs: [
            {
              name: 'Chart',
              url: '/report/chart',
              icon: <PiChartPie />,
            },
            {
              name: 'Turnover',
              url: '/report/turnover',
              icon: <PiUserSwitch />,
            },
            {
              name: 'Position',
              url: '/report/position',
              icon: <TbTie />,
            },
          ],
        },
      ];
    }
    return [
      {
        group: 'User Access',
        navs: [
          { name: 'Users', url: '/setting', icon: <PiUser /> },
          { name: 'Access', url: '/setting/access', icon: <PiLockKey /> },
        ],
      },
      {
        group: 'Attendance',
        navs: [
          { name: 'General', url: '/setting/general', icon: <PiColumns /> },
          {
            name: 'Work Hours Schedule',
            url: '/setting/work-hours-schedule',
            icon: <LiaUserClockSolid />,
          },
          {
            name: 'Geofencing',
            url: '/setting/geofencing',
            icon: <PiMapPin />,
          },
        ],
      },
      {
        group: 'Employee Data Change Request',
        navs: [
          {
            name: 'General',
            url: '/setting/general',
            icon: <PiColumns />,
          },
        ],
      },
      {
        group: 'System',
        navs: [
          {
            name: 'SMPT',
            url: '/setting/smpt',
            icon: <PiChartPieSlice />,
          },
        ],
      },
    ];
  }

  const navsArray = decideNavsArray();

  return <SidebarView navsArray={navsArray} />;
};
export default Sidebar;
