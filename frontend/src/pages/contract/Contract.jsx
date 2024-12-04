import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "@utils/isAuthenticated.js";
import getClientId from "@utils/getClientId.js";
import {useQuery} from "@tanstack/react-query";
import {fetchCleaners, fetchPremises, fetchServices} from "@utils/fetches.js";
import axios from "axios";

function Contract() {
  const [formData, setFormData] = useState({
    client_id: '',
    premise_id: '',
    cleaner_id: '',
    service_id: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) navigate('/login');
  }, []);

  const refClientId = useRef(getClientId());
  const {
      data: cleaners,
      isLoading: isCleaningLoading,
      error: cleanersError,
      isError: isCleaningError,

  } = useQuery({
    queryKey: ['staff'],
    queryFn: fetchCleaners,
  });

  const {
    data: services,
    isLoading: isServicesLoading,
    error: servicesError,
    isError: isServicesError,

  } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  const {
    data: premises,
      isLoading: isPremisesLoading,
      error: premisesError,
      isError: isPremisesError,
  } = useQuery({
    queryKey: ['premises'],
    queryFn: fetchPremises,
    select: (data) => data.filter(premise => premise.client_id === refClientId.current),
  });
  console.log(formData)
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: Number(e.target.value)});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!refClientId) {
      alert('Ошибка: пользователь не авторизован.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/contract', {
        ...formData,
        client_id: refClientId.current,
      });
      console.log({
        ...formData,
        client_id: refClientId.current,
      })
      if (response.status === 201) {
        alert('Контракт заключен успешно!');
      }    } catch (err) {
      console.error('Ошибка при заключении контракта:', err);
      alert('Не удалось заключить контракт.');
    }
  }

  if (isCleaningLoading || isPremisesLoading || isServicesLoading) return <div>Loading...</div>

  if (isCleaningError || isPremisesError || isServicesError) return <div>Error: {cleanersError?.message || premisesError?.message || servicesError.message}</div>

  return (
      <section className={"contract"}>
        <div className={"container-form"}>
          <h2>Заключить контракт</h2>
          <form className={"auth"} onSubmit={handleSubmit}>
            <select name="premise_id" onChange={handleChange}>
              <option value="">Выберите своё помещение</option>
              {premises.map((premise) => (
                  <option key={premise.id} value={premise.id}>{premise.address}</option>
              ))}
            </select>
            <select name="cleaner_id" onChange={handleChange}>
              <option value="">Выберите сотрудника</option>
              {cleaners.map((cleaner) => (
                  <option key={cleaner.id} value={cleaner.id}>{cleaner.name}</option>
              ))}
            </select>
            <select name="service_id" onChange={handleChange}>
              <option value="">Выберите услугу</option>
              {services.map(service => (
                  <option key={service.id} value={service.id}>{service.name}</option>
              ))}
            </select>
            <button type="submit">Добавить</button>
          </form>
        </div>
      </section>
  )
}

export default Contract;