import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/registro/';

const EditRegistro = () => {
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

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getRegistroById = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                const data = response.data;

                setNombre(data.nombre || '');
                setDocumento(data.documento || '');
                setEmail(data.email || '');
                setTelefono(data.telefono || '');
                setNomMascota(data.nom_mascota || '');
                setEspecie(data.especie || '');
                setRaza(data.raza || '');
                setColor(data.color || '');
                setUbicacion(data.ubicacion || '');
                setFecha(data.fecha || '');
            } catch (error) {
                console.error('Error fetching registro:', error);
            }
        };

        getRegistroById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${endpoint}${id}`, {
                nombre,
                documento,
                email,
                telefono,
                nom_mascota: nomMascota,
                especie,
                raza,
                color,
                ubicacion,
                fecha
            });

            // Mostrar alerta de registro exitoso
            alert('Registro actualizado exitosamente');

            // Redirigir a la página ShowUsuarios
            navigate(`/ShowUsuarios`);
        } catch (error) {
            console.error('Error al actualizar registro:', error);
        }
    };

    return (
        <div className='tb'>
            <h2>Editar Registro</h2>
            <form className='container2' onSubmit={update}>
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
                <button type='submit' className='btn btn-primary'>Actualizar Registro</button>
            </form>
        </div>
    );
};

export default EditRegistro;