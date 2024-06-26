import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavComponent from './Nav';
import '../../src/index.css';

const endpoint = 'http://localhost:8000/api/registro';

const CreateRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nomMascota, setNomMascota] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [color, setColor] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [fecha, setFecha] = useState('');
    const [error, setError] = useState('');
    const [showSuccessAlert] = useState(false); // Estado para mostrar/ocultar el alert

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(endpoint, {
                nombre: nombre,
                documento: documento,
                email: email,
                telefono: telefono,
                nom_mascota: nomMascota,
                especie: especie,
                raza: raza,
                color: color,
                ubicacion: ubicacion,
                fecha: fecha
            });
            if (response.status === 201) {
                // Mostrar ventana de confirmación
                const confirmed = window.confirm('Registro creado exitosamente.');

                if (confirmed) {
                    window.location.reload(); // Actualiza la página actual
                }
            } else {
                setError('Hubo un problema al crear el registro');
            }
        } catch (error) {
            console.error('Error al crear registro:', error);
            setError('Hubo un problema al crear el registro');
        }
    };

    return (
        <div className='tb'>
            <NavComponent />
            <h2>¿Has perdido a tu mascota?</h2>
            {error && <p className="text-danger">{error}</p>}
            <form className='container2' onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Documento</label>
                    <input
                        value={documento}
                        onChange={(e) => setDocumento(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Teléfono</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nombre Mascota</label>
                    <input
                        value={nomMascota}
                        onChange={(e) => setNomMascota(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Especie</label>
                    <input
                        value={especie}
                        onChange={(e) => setEspecie(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Raza</label>
                    <input
                        value={raza}
                        onChange={(e) => setRaza(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Color</label>
                    <input
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Ubicación</label>
                    <input
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha</label>
                    <input
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        type='date'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Crear Registro</button>
            </form>

            {/* Alerta de registro exitoso */}
            {showSuccessAlert && (
                <div className="alert alert-success mt-3" role="alert">
                    Registro creado exitosamente. Serás redirigido en unos segundos.
                </div>
            )}
        </div>
    );
};

export default CreateRegistro;