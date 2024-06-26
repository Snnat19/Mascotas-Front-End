import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavComponent from './Nav';


const endpoint = 'http://localhost:8000/api/login'; // Ruta API para el inicio de sesión

const InicioSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(endpoint, {
                email: email,
                password: password,
            });
            const token = response.data.token; // Obtiene el token de la respuesta
            localStorage.setItem('token', token); // Guarda el token en el localStorage
            navigate('/ShowUsuarios'); // Redirige a la página principal después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Credenciales inválidas. Por favor, verifica tus datos.');
        }
    };

    return (
        <div>
            <NavComponent />
            <h3 className='nombre'>Iniciar Sesión</h3>
            {error && <p className="text-danger">{error}</p>}
            <form className='container2' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default InicioSesion;