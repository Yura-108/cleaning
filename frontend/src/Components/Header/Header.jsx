import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>Услуги</li>
                        <li>Цены</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                <div className="phone_number">
                    <span>+375 (33) 696-90-07</span>
                </div>
            </div>
        </header>
    )
}