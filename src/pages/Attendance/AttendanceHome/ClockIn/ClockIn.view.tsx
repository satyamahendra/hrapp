import { format } from 'date-fns';
import { IoFastFoodOutline, IoTimeOutline } from 'react-icons/io5';
import {
  TbArrowDownRight,
  TbArrowUpRight,
  TbChevronsRight,
} from 'react-icons/tb';

const ClockInView = () => (
  <div className="flex flex-col gap-4 border rounded-xl">
    <h2 className="px-4 pt-4">
      Today: {format(new Date(), 'EEEE, MMMM do yyyy')}
    </h2>

    {/* IN OUT TIME */}
    <div className="px-4">
      <div className="flex border rounded-lg ">
        {/* FIRST IN */}
        <div className="relative flex flex-col items-center justify-center w-1/2 p-4 border-r ">
          <p>First in:</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 text-xl bg-blue-600 rounded-full">
              <TbArrowUpRight className="p-1 text-white" />
            </div>
            <p>--,--</p>
          </div>

          {/* arrow right */}
          <div className="absolute flex items-center justify-center w-8 h-8 text-2xl bg-gray-200 rounded-full -right-4">
            <TbChevronsRight />
          </div>
        </div>

        {/* LAST OUT */}
        <div className="flex flex-col items-center w-1/2 p-4">
          <p>Last out:</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-5 h-5 text-xl bg-red-400 rounded-full">
              <TbArrowDownRight className="p-1 text-white" />
            </div>
            <p>--,--</p>
          </div>
        </div>
      </div>
    </div>

    {/* PROGRESS BAR */}
    <div className="px-4">
      <h2 className="font-semibold text-center">0 Hr(s)</h2>
      <div className="h-6 bg-gray-100 rounded-xl"></div>
    </div>

    {/* CLOCKIN BUTTON */}
    <div className="w-full px-4">
      <button className="w-full py-2 text-sm text-white bg-purple-700 rounded-xl">
        Clock in
      </button>
    </div>

    <div className="flex text-sm text-gray-400 border-t">
      {/* BREAK TIME */}
      <div className="flex flex-col items-center w-1/2 gap-2 p-4 border-r">
        <h3 className="flex items-center gap-2">
          <IoFastFoodOutline className="text-xl" /> Break
        </h3>
        <p>11.30 AM - 14:00</p>
      </div>

      {/* OVERTIME */}
      <div className="flex flex-col items-center w-1/2 gap-2 p-4 ">
        <h3 className="flex items-center gap-2">
          <IoTimeOutline className="text-xl" /> Overtime
        </h3>
        <p>--,--</p>
      </div>
    </div>
  </div>
);

export default ClockInView;
