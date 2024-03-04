import { AddEmploymentStatusProps } from './AddEmploymentStatus.type';
import AddEmploymentStatusView from './AddEmploymentStatus.view';

const AddEmploymentStatus: React.FC<AddEmploymentStatusProps> = ({
  setToggleAddSlider,
}) => {
  return <AddEmploymentStatusView setToggleAddSlider={setToggleAddSlider} />;
};

export default AddEmploymentStatus;
