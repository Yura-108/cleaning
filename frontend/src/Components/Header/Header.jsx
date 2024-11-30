import './Header.css';
import logo from '@images/logo.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Главная</Link></li>
                        <li><Link to={"/services"}>Услуги</Link></li>
                        <li><Link to={"/staff"}>Наши сотрудники</Link></li>
                        <li><Link to={"/registration-service"}>Заказать услугу</Link></li>
                    </ul>
                </nav>
                <div className="phone_number">
                    <span>+375 (33) 696-90-07</span>
                </div>
            </div>
        </header>
    )
}