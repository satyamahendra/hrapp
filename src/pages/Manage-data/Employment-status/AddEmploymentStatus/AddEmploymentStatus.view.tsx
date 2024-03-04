import { PiX } from 'react-icons/pi';
import { AddEmploymentStatusViewProps } from './AddEmploymentStatus.type';

const AddEmploymentStatusView: React.FC<AddEmploymentStatusViewProps> = ({
  setToggleAddSlider,
}) => {
  return (
    <div className="fixed top-0 left-0 z-20 flex w-screen h-screen">
      {/* DARK SCREEN */}
      <div
        onClick={() => setToggleAddSlider(false)}
        className="w-3/5 bg-black bg-opacity-30"
      >
        a
      </div>

      {/* CONTENT */}
      <div className="w-2/5 bg-white">
        <div className="flex p-6 border-b">
          <h1 className="flex items-center justify-between w-full text-xl">
            Add New Employment Status
          </h1>

          <button onClick={() => setToggleAddSlider(false)} className="text-xl">
            <PiX />
          </button>
        </div>

        <form className="flex flex-col gap-6">
          {/* EMPLOYEE STAUTS */}
          <div className="flex w-full gap-6 px-6 pt-6">
            <div className="flex flex-col w-1/2 gap-2">
              <label>Status Employee</label>
              <input
                type="text"
                placeholder="Status Employee"
                className="px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="flex flex-col w-1/2 gap-2">
              {/* COLOR STATUS */}
              <label>Color Status</label>
              <input
                type="text"
                placeholder="#D9D9D9"
                className="px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2 px-6">
            <label>Short Description</label>
            <textarea
              placeholder="Short description"
              className="px-3 py-2 border rounded-lg"
            />
          </div>

          {/* STATUS */}
          <div className="flex flex-col gap-2 px-6">
            <h2>Status</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" value="option1" checked={true} />
                <p>Active</p>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="option1" checked={true} />
                <p>Non Active</p>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmploymentStatusView;
