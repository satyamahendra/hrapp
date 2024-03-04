export interface EmploymentStatus {
  statusName: string;
  description: string;
  color: string;
  lastEdited: {
    by: string;
    date: string;
  };
  isActive: boolean;
}

export interface EmploymentStatusViewProps {
  employmentStatusArray: EmploymentStatus[];
}
