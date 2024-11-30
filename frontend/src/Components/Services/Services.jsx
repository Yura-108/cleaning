import service from '@images/service1.png';
import './Services.css';

function Card () {
    return (
      <div className="card">
          <h4>Экспресс уборка</h4>
          <img src={service} alt="img" />
          <h2>120 BYN</h2>
      </div>
    )
}

export default function Services() {
    return (
      <section className={"service"}>
        <h2>Наши услуги</h2>
          <div className="container">
              {Array.from({length: 8}).map((item, i) => (
                <Card key={i} />
              ))}
          </div>
        </section>
    )
}