import {jwtDecode} from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Время в секундах
    return decoded.exp > currentTime; // Проверка истечения токена
  } catch (err) {
    return false;
  }
};
