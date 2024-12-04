import {useQuery} from "@tanstack/react-query";
import {fetchPremises} from "@utils/fetches.js";
import PropTypes from "prop-types";
import './premises.css'

function Card({premise}) {
  return (
    <div className={"card"}>
      <h4>ID помещения: {premise.id}</h4>
      <h4>Тип помещения: {premise.type}</h4>
      <h4>Адрес: {premise.address}</h4>
      <h4>Площадь: {premise.square_meters}</h4>
      <h4>Расписание: {premise.cleaning_schedule}</h4>
    </div>
  )
}

Card.propTypes = {
  premise: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    square_meters: PropTypes.string.isRequired,
    cleaning_schedule: PropTypes.string.isRequired,
  })
}


const Premises = ({clientId}) => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['premises'],
    queryFn: fetchPremises,
    select: (data) => data.filter(premise => premise.client_id === clientId),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка: {error.message}</div>;
  }
  return (
    <div className="containerPremises">
      {!data?.length ? (<h2>У вас ещё нет помещений</h2>) : (
        <>
          <h2>Ваши помещения</h2>
          <div className="container">
            {data.map(premise => (
              <Card key={premise.id} premise={premise}/>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

Premises.propTypes = {
  clientId: PropTypes.number,
}

export default Premises;