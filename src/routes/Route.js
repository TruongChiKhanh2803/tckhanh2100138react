
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../demo/Login';
import Car from '../demo/Car';
import Hello from '../demo/Hello';

import GroupList from '../containers/Product/GroupList';
import ProductList from '../containers/Product/ProductList';
import ProductDetail from '../containers/Product/ProductDetail';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/car",
        element: <Car />
    },
    {
        path: "/hello",
        element: <Hello />
    },
    {
        path: "/groups",
        element: <GroupList /> // Route hiển thị danh sách nhóm
    },
    {
        path: "/products",
        element: <ProductList /> // Route hiển thị danh sách sản phẩm
    },
    {
        path: "/products/:id",
        element: <ProductDetail /> // Route hiển thị chi tiết sản phẩm theo `id`
    },
    {
        path: "*",
        element: (
            <div>
                <img src="/img/404.jpg" alt="Không tìm thấy trang" style={{ maxWidth: '65%', height: 'auto' }} />
            </div>
        )
    }
]);
