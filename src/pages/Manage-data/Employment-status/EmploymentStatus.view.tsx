import { PiArrowLeft, PiArrowRight } from 'react-icons/pi';
import TableItem from './TableItem';
import {
  EmploymentStatus,
  EmploymentStatusViewProps,
} from './EmploymentStatus.type';

const EmploymentStatusView: React.FC<EmploymentStatusViewProps> = ({
  employmentStatusArray,
}) => (
  <main>
    <section className="flex justify-between ">
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-xl">Employment Status</h1>
        <p className="mt-2 text-sm text-gray-400 ">
          Master / Employment Status
        </p>
      </div>

      {/* UTILS */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search ..."
          className="px-4 border rounded-lg"
        />
        <select className="px-4 border rounded-lg ">
          <option className="">Status</option>
        </select>
        <button className="px-4 text-white bg-[#2166B2] rounded-lg">
          + Add new
        </button>
      </div>
    </section>

    <section className="w-full mt-6 border rounded-xl">
      <table className="w-full table-auto">
        {/* TABLE HEADER */}
        <thead>
          <tr className="text-left border-b">
            <th className="p-4">Status Name</th>
            <th>Description</th>
            <th>Color Name</th>
            <th>Last Edited</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {employmentStatusArray.map(
            (empStatus: EmploymentStatus, i: number) => (
              <TableItem key={i} empStatus={empStatus} />
            ),
          )}
        </tbody>
      </table>

      <div className="flex justify-between p-4">
        {/* AMOUNT OF DATA BEING SHOWN */}
        <div className="flex items-center gap-2">
          <p>Showing</p>
          <select className="p-2 border rounded-lg">
            <option>5</option>
          </select>
          <p>data out of 4</p>
        </div>
        {/* PAGINATION*/}
        <div className="flex items-center gap-2 text-[#2166B2]">
          <p>Data per page</p>
          <button className="px-3 py-2 text-2xl bg-[#EAF4FF] rounded-lg">
            <PiArrowLeft />
          </button>
          <button className="px-3 py-2 text-2xl bg-[#EAF4FF] rounded-lg">
            <PiArrowRight />
          </button>
        </div>
      </div>
    </section>
  </main>
);

export default EmploymentStatusView;
