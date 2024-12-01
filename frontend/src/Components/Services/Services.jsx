import './Services.css';
import {useQuery} from "@tanstack/react-query";
import {fetchServices} from "@utils/fetches.js";
import PropTypes from 'prop-types';

function Card ({service}) {
    return (
      <div className="card">
          <h4>{service.name}</h4>
          <img src={service.image_url} alt="img" />
          <h2>{service.price} BYN</h2>
      </div>
    )
}

Card.propTypes = {
    service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Services() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
});

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка: {error.message}</div>;
  }
    return (
      <section className={"service"}>
        <h2>Наши услуги</h2>
          <div className="container">
            {data.map(service => (
              <Card key={service.id} service={service} />
            ))}
          </div>
        </section>
    )
}