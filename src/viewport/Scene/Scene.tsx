import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Attendance/Home';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger>
        <Routes>
          <Route path="/" element={<Navigate to="/attendance" />} />

          <Route path="/" element={<MainLayout />}>
            <Route path="/attendance" element={<Home />} />
          </Route>
        </Routes>
      </RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
