import { useState } from 'react';
import axios from 'axios';
import '@styles/auth.css';
import {useNavigate} from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', formData);
      alert(response.data.message);
      navigate('/login');
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.error || 'Ошибка регистрации');
    }
  };

  return (
    <div className={"container-form"}>
      <h2>Регистрация</h2>
      <form className={"auth"} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Имя" onChange={handleChange} required/>
        <input type="text" name="phone" placeholder="Телефон" onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required/>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
