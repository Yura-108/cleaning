import './staff.css';
import {useQuery} from "@tanstack/react-query";
import {fetchCleaners} from "@utils/fetches.js";
import PropTypes from "prop-types";

function Card({cleaner}) {
  return (
    <div className={"card"}>
      <img src={cleaner.image_url} alt="avatar"/>
      <div className="info">
        <h4>{cleaner.name}</h4>
        <h5>{cleaner.phone}</h5>
        <h5>{cleaner.email}</h5>
        <h5>Rating: {cleaner.rating}</h5>
      </div>
    </div>
  )
}

Card.propTypes = {
  cleaner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    image_url: PropTypes.string,
  })
}

function Staff() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['staff'],
    queryFn: fetchCleaners,
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка: {error.message}</div>;
  }
  return (
    <section className="staff">
      <h2>Наши сотрудники</h2>
      <div className="container">
        {data.map(cleaner => (
          <Card key={cleaner.id} cleaner={cleaner} />
        ))}
      </div>
    </section>
  )
}

export default Staff;