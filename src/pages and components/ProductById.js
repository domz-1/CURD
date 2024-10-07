import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductById() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://api.example.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Price: {product.price}</p>
    </>
  );
}