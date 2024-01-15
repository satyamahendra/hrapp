import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <RouteLogger></RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
