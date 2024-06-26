import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavComponent from './Nav';


const RegistroAdmin = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const endpoint = 'http://localhost:8000/api/register/'; // Endpoint de registro en Laravel

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar contraseñas
        if (password !== passwordConfirm) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            // Realizar solicitud POST al endpoint de registro
            const response = await axios.post(endpoint, {
                name: nombre,
                email: email,
                password: password,
                password_confirmation: passwordConfirm,
            });

            // Redirigir a la página de inicio de sesión después del registro exitoso
            if (response.status === 201) {
                alert('Administrador registrado exitosamente');
                navigate('/login'); // Redirige a la página de inicio de sesión
            } else {
                setError('Hubo un problema al registrar. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al registrar administrador:', error);
            setError('Hubo un problema al registrar. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div>
            <NavComponent />
            <h3 className='nombre'>Registro de Administrador</h3>
            {error && <p className="text-danger">{error}</p>}
            <form className='container2' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
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
                <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        type="password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
};

export default RegistroAdmin;