import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavComponent2 from './Nav2';


const endpoint = 'http://localhost:8000/api';

const ShowUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getAllUsuarios();
    }, []);

    const getAllUsuarios = async () => {
        try {
            const response = await axios.get(`${endpoint}/registro`);
            setUsuarios(response.data.usuarios); // Asegúrate de acceder a los usuarios correctamente
        } catch (error) {
            console.error('Error fetching usuarios:', error);
        }
    };

    const deleteUsuarios = async (id) => {
        try {
            await axios.delete(`${endpoint}/registro/${id}`);
            getAllUsuarios(); // Actualizar la lista después de eliminar
        } catch (error) {
            console.error('Error deleting usuario:', error);
        }
    };

    return (
        <div className='tb'>
            <NavComponent2 /> {/* Aquí se inserta el componente de navegación */}
            <h2>Registros de mascotas perdidas</h2>
            <div className='d-grid gap-2'>
                
            </div>
            <div className='container3'>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Nombre Mascota</th>
                        <th>Especie</th>
                        <th>Raza</th>
                        <th>Color</th>
                        <th>Ubicación</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.documento}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.nom_mascota}</td>
                            <td>{usuario.especie}</td>
                            <td>{usuario.raza}</td>
                            <td>{usuario.color}</td>
                            <td>{usuario.ubicacion}</td>
                            <td>{usuario.fecha}</td>
                            <td>
                                <Link to={`/edit/${usuario.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteUsuarios(usuario.id)} className='btn btn-danger ms-2'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ShowUsuarios;