import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateP() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        brand: '',
        stock: '',
        description: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const navigate = useNavigate()


    const getLastItemId = async ()=>{
        const res = await axios.get('http://localhost:5000/products');
        const lastItem = res.data[res.data.length - 1];
        return lastItem.id;
    }
    
    const createProduct = async (e) => {
        e.preventDefault();
        const lastItemId = await getLastItemId();
        const product = {
            ...formData,
            id: `${+lastItemId + 1}`,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock)
        };
    
        axios.post('http://localhost:5000/products', product, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
        navigate('/products')
    };

    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={createProduct} className="form">
                {['name', 'price', 'brand', 'stock', 'description', 'category'].map((field) => (
                    <label key={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                        <input
                            type={field === 'price' || field === 'stock' ? 'number' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                        />
                    </label>
                ))}
                <button type="submit">Create</button>
            </form>
        </div>
    );
}