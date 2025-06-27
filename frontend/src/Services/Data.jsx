
import {jwtDecode} from 'jwt-decode';

export function getUserData() {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.tokondata;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}

export function isAuthenticated() {
    const token= localStorage.getItem('token');
    if (!token) {
        return false;
    }else{
        return true;
    }

}

export function logout() {
    localStorage.removeItem('token');
    window.location.href = '/Login'; // Redirect to login page
}
