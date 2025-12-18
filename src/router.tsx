import { createHashRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { SeparationOfConcernsSlide } from './week1/關注點分離';
import { AsyncSlide } from './week2/非同步';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/week1/separation-of-concerns',
    element: <SeparationOfConcernsSlide />,
  },
  {
    path: '/week2/async-javascript',
    element: <AsyncSlide />,
  },
]);
