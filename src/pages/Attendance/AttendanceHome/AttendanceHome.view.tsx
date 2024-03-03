import ClockIn from './ClockIn';

const AttendanceHomeView = () => (
  <main>
    <h1 className="text-xl">Home</h1>
    <p className="my-4 text-gray-400">Home</p>

    <div className="flex flex-col gap-4 sm:flex-row">
      {/* CLOCK IN */}
      <section className="sm:w-2/5 ">
        <ClockIn />
      </section>

      {/* CALENDAR */}
      <section className="border sm:w-3/5 rounded-xl"></section>
    </div>
  </main>
);

export default AttendanceHomeView;
