import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowUsuarios from './components/ShowUsuarios';
import CreateRegistro from './components/CreateRegistro';
import EditRegistro from './components/EditRegistro';
import InicioSesion from './components/InicioSesion';
import RegistroAdmin from './components/RegistroAdmin';
import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/ShowUsuarios' element={<ShowUsuarios />} />
                    <Route path='/Nav' element={<Nav/>} />
                    <Route path='/' element={<CreateRegistro />} />
                    <Route path='/edit/:id' element={<EditRegistro />} />
                    <Route path='/login' element={<InicioSesion />} />
                    <Route path='/register' element={<RegistroAdmin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;