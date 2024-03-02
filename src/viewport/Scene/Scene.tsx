import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import MainLayout from '@/layouts/MainLayout';
import AttendanceHome from '@/pages/Attendance/AttendanceHome';
import MyAttendance from '@/pages/Attendance/MyAttendance';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          <Route path="/" element={<Navigate to="/attendance" />} />

          <Route path="/" element={<MainLayout />}>
            <Route path="/attendance" element={<AttendanceHome />} />
            <Route
              path="/attendance/my-attendance"
              element={<MyAttendance />}
            />
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
