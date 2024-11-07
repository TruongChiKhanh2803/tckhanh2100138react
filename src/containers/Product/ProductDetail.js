import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();  // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    // Fetch the product details when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:6868/api/products/${id}`)
            .then(response => {
                if (response.data) {
                    setProduct(response.data);  // Store the product details in state
                    setError(null); // Reset any previous errors
                } else {
                    setError('Product not found'); // Handle case when no product is returned
                }
            })
            .catch(error => {
                setError('There was an error fetching the product.');
                console.error('Error:', error);
            });
    }, [id]);  // Dependency array ensures this runs when the ID changes

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }
    const goToHome = () => {
        navigate('/products');  // Navigate to the home page ("/")
    };

    return (
        <div>
            <p>{product.hinhanh}</p>
            <h1>{product.ten}</h1>
            <p>{product.mota}</p>
            <p><strong>Giá: </strong>{product.gia}</p>
            <button onClick={goToHome}>Trở lại</button>
        </div>

    );
};

export default ProductDetail;
