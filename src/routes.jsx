import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movie/:id',
    element: <MovieDetailPage />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;