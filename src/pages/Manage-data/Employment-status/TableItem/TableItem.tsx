import { TableItemProps } from './TableItem.type';
import TableItemView from './TableItem.view';

const TableItem: React.FC<TableItemProps> = ({ empStatus }) => {
  return <TableItemView empStatus={empStatus} />;
};

export default TableItem;
