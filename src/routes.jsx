import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './components/MovieDetail';

// Definisci le rotte
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

// Crea il componente Routes
export function Routes() {
  return <RouterProvider router={router} />;
}