import './Main.css';
import img from '../../assets/main.png'

export default function Main()  {
    return (
        <main>
            <div className="container_img">
                <img src={img} alt=""/>
            </div>
            <div className="container">
                <h1>Клининговые услуги в Бресте</h1>
                <h3>- Уборка квартир и офисов</h3>
                <h3>- Мойка окон и плитки</h3>
                <h3>- Химчистка мягкой мебели</h3>
                <button>Заказать сейчас</button>
            </div>
            <div className="price">
                <a href="#">Узнать цены на уборку</a>
            </div>
        </main>
    )
}