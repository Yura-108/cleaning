import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3000/auth/login', formData);
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); // Сохраняем токен
      navigate('/');
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.error || 'Ошибка входа');
    }
  };

  return (
    <div className={"container-form"}>
      <h2>Логин</h2>
      <form className={"auth"} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Пароль" onChange={handleChange} required/>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
