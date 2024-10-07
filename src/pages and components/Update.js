import {  useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid4 } from "uuid";

export default function Update() {
const param = useParams();
const Pid = param.Pid;
useEffect(()=>{
    axios.get(`http://localhost:5000/products/${Pid}`)
    .then((res) => setForm(res.data))
    .catch((err) => console.error(err));
},[])

const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    brand: "",
    stock: "",
    description: "",
    category: ""
});


const handleInputChange = (e) => {
const { name, value } = e.target;
setForm({
    ...form,
    [name]: value
});
};
const navigate = useNavigate();

const updateProduct = (e) => {
e.preventDefault(); // prevent default form submission

const product = {
    ...form,
    id: uuid4(),
    price: parseFloat(form.price), // ensure price is parsed as a float
    stock: parseInt(form.stock, 10) // ensure stock is parsed as an integer
};




axios.put(`http://localhost:5000/products/${Pid}`, product, {
    headers: {
    'Content-Type': 'application/json'
    }
})
.then(navigate('/products'))

.catch((err) => console.error(err));
};

return (
<div className="update">
    <h2>Update Product By Id: {Pid}</h2>
    <form className="form" onSubmit={updateProduct}>
    {['name', 'price', 'brand', 'stock', 'description', 'category'].map((field) => {
        return (
        <label key={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
            <input
            type={field === 'price' || field === 'stock' ? 'number' : 'text'}
            name={field}
            onChange={handleInputChange}
            value={form[field]} // ensure form fields are controlled components
            />
        </label>
        );
    })}
    <button type="submit">Update</button>
    </form>
</div>
);
}
