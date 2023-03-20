import {
	createBrowserRouter,
	RouterProvider,
	// createRoutesFromElements,
	// Route,
} from 'react-router-dom';
import ErrorPage from './pages/Error';

import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import { RootLayout } from './pages/Root';

// const routDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path='/' element={<HomePage />}></Route>,
// 		<Route path='/products' element={<ProductsPage />}></Route>
// 	</Route>
// );
// const router = createBrowserRouter(routDefinitions);

// https://example.com/products   path is the part after domain

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products', element: <ProductsPage /> },
			// Dynamic navigation via ':productId' - this is placeholder, ":" is most importand in this.
			{ path: '/products/:productId', element: <ProductDetailPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
