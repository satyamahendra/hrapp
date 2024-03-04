import { TableItemViewProps } from './TableItem.type';

const TableItemView: React.FC<TableItemViewProps> = ({ empStatus }) => (
  <tr className={`border-b ${!empStatus.isActive && 'opacity-40'} `}>
    <td className="items-center gap-2 p-4 " style={{ color: empStatus.color }}>
      <div className="flex items-center gap-2">
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: empStatus.color }}
        ></div>
        {empStatus.statusName}
      </div>
    </td>
    <td>{empStatus.description}</td>
    <td>
      <div className="flex items-center gap-2">
        <div
          className="w-5 h-5"
          style={{ backgroundColor: empStatus.color }}
        ></div>
        {empStatus.color}
      </div>
    </td>
    <td className="flex flex-col p-4">
      {empStatus.lastEdited.by}
      <span className="text-sm text-gray-400">{empStatus.lastEdited.date}</span>
    </td>
    <td className="text-sm">
      {empStatus.isActive ? (
        <div className="bg-[#E7F8F0] rounded-xl px-3 py-2 w-fit font-semibold text-[#12B76A]">
          Active
        </div>
      ) : (
        <div className="bg-[#FEECEB] rounded-xl px-3 py-2 w-fit font-semibold text-[#F04438]">
          Non Active
        </div>
      )}
    </td>
  </tr>
);

export default TableItemView;
