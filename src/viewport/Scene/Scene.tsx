import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import MainLayout from '@/layouts/MainLayout';
import AttendanceHome from '@/pages/Attendance/AttendanceHome';
import MyAttendance from '@/pages/Attendance/MyAttendance';
import Dashboard from '@/pages/Manage-data/Dashboard';
import Chart from '@/pages/Report/Chart';
import Users from '@/pages/Setting/Users';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          <Route path="/" element={<Navigate to="/attendance" />} />

          <Route path="/" element={<MainLayout />}>
            {/* ATTEDACE TAB */}
            <Route path="/attendance" element={<AttendanceHome />} />
            <Route
              path="/attendance/my-attendance"
              element={<MyAttendance />}
            />

            {/* COMPANY VERSE TAB */}
            <Route path="/manage-data" element={<Dashboard />} />

            {/* PROJECT VERSE TAB */}
            <Route path="/report" element={<Chart />} />

            {/* SETTIG TAB */}
            <Route path="/setting" element={<Users />} />
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
