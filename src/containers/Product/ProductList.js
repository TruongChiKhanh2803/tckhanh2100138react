import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:6868/api/products')
            .then(response => {
                console.log('API Response:', response); // Log the full response
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    setError('Unexpected data format');
                    console.error('Expected an array but got:', response.data);
                }
            })
            .catch(err => {
                setError('Failed to load products');
                console.error(err);
            });
    }, []);

    const goToHome = () => {
        navigate('/');  // Navigate to the home page ("/")
    };

    return (
        <div>
            <h1>Product List</h1>
            {error && <p>{error}</p>}
            <ul>
                {Array.isArray(products) && products.map(product => (
                    <li key={product.masp}>
                        <p>{product.hinhanh}</p>
                        <h2>{product.ten}</h2>
                        {/* <p>{product.mota}</p> */}
                        <p><strong>Giá: </strong>{product.gia}</p>
                        <Link to={`/products/${product.masp}`}>View Details</Link>
                    </li>
                ))}
            </ul>

            <button onClick={goToHome}>Trở lại trang chủ</button>
        </div>
    );
};

export default ProductList;
