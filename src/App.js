import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';

// https://example.com/products   path is the part after domain

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
