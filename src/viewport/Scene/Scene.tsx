import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import MainLayout from '@/layouts/MainLayout';
import AttendanceHome from '@/pages/Attendance/AttendanceHome';
import MyAttendance from '@/pages/Attendance/MyAttendance';
import CompanyVerseHome from '@/pages/Company-verse/CompanyVerseHome';
import ProjectVerseHome from '@/pages/Project-verse/ProjectVerseHome';
import SettingHome from '@/pages/Setting/SettingHome';

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
            <Route path="/manage-data" element={<CompanyVerseHome />} />

            {/* PROJECT VERSE TAB */}
            <Route path="/report" element={<ProjectVerseHome />} />

            {/* SETTIG TAB */}
            <Route path="/setting" element={<SettingHome />} />
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
