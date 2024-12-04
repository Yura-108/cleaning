import {jwtDecode} from "jwt-decode";

const getClientId = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decode = jwtDecode(token);
        return decode.id;
    }
    return null;
};

export default getClientId;