import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import '@styles/auth.css';
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "@utils/isAuthenticated.js";
import Premises from "@pages/premise/Premises.jsx";
import getClientId from "@utils/getClientId.js";

const PremisesForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    square_meters: '',
    cleaning_schedule: ''
  });

  const navigate = useNavigate();


  useEffect(() => {
    if (!isAuthenticated()) navigate('/login');
  }, []);

  const refClientId = useRef(getClientId());

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!refClientId) {
      alert('Ошибка: пользователь не авторизован.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/premises', {
        ...formData,
        client_id: refClientId.current,
      });
      if (response.status === 201) {
        alert('Помещение добавлено успешно!');
      }
    } catch (err) {
      console.error('Ошибка при добавлении помещения:', err);
      alert('Не удалось добавить помещение.');
    }
  };

  return (
    <section className={"premiseSection"}>
      <div className={"container-form"}>
        <h2>Добавить помещение</h2>
        <form className={"auth"} onSubmit={handleSubmit}>
          <select name="type" onChange={handleChange}>
            <option value="">Выберите тип помещения</option>
            <option value="Квартира">Квартира</option>
            <option value="Офис">Офис</option>
            <option value="Частный дом">Частный дом</option>
            <option value="Дача">Дача</option>
            <option value="Магазин">Магазин</option>
            <option value="Склад">Склад</option>
            <option value="Спортивный зал">Спортивный зал</option>
            <option value="Лаборатория">Лаборатория</option>
            <option value="Кухня">Кухня</option>
            <option value="Балкон">Балкон</option>
            <option value="Учебное заведение">Учебное заведение</option>
          </select>
          <input type="text" name="address" placeholder="адрес" onChange={handleChange} required/>
          <input type="text" name="square_meters" placeholder="площадь помещения" onChange={handleChange} required/>
          <input type="text" name="cleaning_schedule" placeholder="расписание уборки" onChange={handleChange} required/>
          <button type="submit">Добавить</button>
        </form>
      </div>
      <Premises clientId={refClientId.current}/>
    </section>
  );
};

export default PremisesForm;
