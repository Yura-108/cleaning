import './Header.css';
import logo from '@images/logo.png';
import {Link, useNavigate} from 'react-router-dom';
import {isAuthenticated} from "@utils/isAuthenticated.js";

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Удаление токена из localStorage
        alert('Вы успешно вышли из системы!');
        navigate('/login'); // Перенаправление на страницу логина
    };
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
                        {! isAuthenticated() ? (
                          <>
                              <li><Link to={"/login"}>Войти</Link></li>
                              <li><Link to={"/registration"}>Зарегистрироваться</Link></li>
                          </>
                        ) : (
                          <>
                              <li><Link to={"/premises"}>Мои помещения</Link></li>
                              <button onClick={handleLogout}>Выйти</button>
                          </>
                        )
                        }

                    </ul>
                </nav>
                <div className="phone_number">
                    <span>+375 (33) 696-90-07</span>
                </div>
            </div>
        </header>
    )
}
