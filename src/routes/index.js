import routes from '~/configs/routes';
import Home from '~/pages/Home/Home';
import Product from '~/pages/Product/Product';

const allRoutes = [
    { path: routes.home, element: Home },
    { path: routes.product, element: Product },
];

export default allRoutes;
