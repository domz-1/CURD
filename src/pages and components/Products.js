import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
fetchProducts();
}, [products]);

const fetchProducts = () => {
setLoading(true);
fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
    setProducts(data);
    setLoading(false);
    })
    .catch(err => {
    console.error(err);
    setLoading(false);
    });
};

const deleteProduct = (id) => {
axios.delete(`http://localhost:5000/products/${id}`)
    .then(res => {
    console.log(res.data);
    fetchProducts(); // Call fetchProducts after deletion
    })
    .catch(err => console.error(err));
};

return (
<div className="styled-table">
    <table>
    <thead>
        <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Stock</th>
        <th>Product Description</th>
        <th>Product Brand</th>
        <th>Product Category</th>
        <th>Actions</th>

        </tr>
    </thead>
    <tbody>
        {products.length > 0 ? (
        products.map((product) => (
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td className="btns">
                <button id={product.id} className="del" onClick={() => deleteProduct(product.id)}>
                Delete
                </button>
                <Link to={`/products/${product.id}/edit`}>Edit</Link>

                {/* <Link to={`products/:Pid/view`}>View</Link> */}
            </td>
            </tr>
        ))
        ) : (
        <tr>
            <td colSpan={3}>{loading ? 'Loading...' : 'No products found'}</td>
        </tr>
        )}
    </tbody>
    </table>
</div>
);
}