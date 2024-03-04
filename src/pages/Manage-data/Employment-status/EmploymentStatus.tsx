import EmploymentStatusView from './EmploymentStatus.view';

const EmploymentStatus = () => {
  const employmentStatusArray = [
    {
      statusName: 'intern',
      description: 'Lorem ipsum dolor sit amet con...',
      color: '#EAAA08',
      lastEdited: {
        by: 'Bumantara(Staff HRD)',
        date: '11 Oct 2023, 13:10',
      },
      isActive: true,
    },
    {
      statusName: 'employee',
      description: 'Lorem ipsum dolor sit amet con...',
      color: '#2E90FA',
      lastEdited: {
        by: 'Bumantara(Staff HRD)',
        date: '11 Oct 2023, 13:10',
      },
      isActive: true,
    },
    {
      statusName: 'part-time',
      description: 'Lorem ipsum dolor sit amet con...',
      color: '#7A5Af8',
      lastEdited: {
        by: 'Bumantara(Staff HRD)',
        date: '11 Oct 2023, 13:10',
      },
      isActive: true,
    },
    {
      statusName: 'freelance',
      description: 'Lorem ipsum dolor sit amet con...',
      color: '#F79009',
      lastEdited: {
        by: 'Bumantara(Staff HRD)',
        date: '11 Oct 2023, 13:10',
      },
      isActive: false,
    },
  ];

  return <EmploymentStatusView employmentStatusArray={employmentStatusArray} />;
};

export default EmploymentStatus;
