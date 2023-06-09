import './App.css'
import React, {useState, useEffect} from 'react'
import Contador from './Contador'
import PVHeader from './PVHeader'
import EditForm from "./EditForm"
import './fontawesome'
import DescansoLargoButton from "./DescansoLargoButton";

function App() {
    const [maximo, setMaximo] = useState(() => parseInt(localStorage.getItem('maximo')) || 5)
    const [cantidad, setCantidad] = useState(() => parseInt(localStorage.getItem('cantidad')) || 0)
    const [ECPorDia, setECPorDia] = useState(() => parseInt(localStorage.getItem('ECPorDia')) || 5)
    const [ECUsados, setECUsados] = useState(() => parseInt(localStorage.getItem('ECUsados')) || 0)
    const [editPV, setEditPV] = useState(false)

    const toggleEditPV = () => {
        setEditPV(!editPV)
    }

    const handleMaximoChange = (newMaximo) => {
        setMaximo(newMaximo)
        handleCantidadChange(newMaximo)
        localStorage.setItem('maximo', newMaximo)
    }

    const handleCantidadChange = (nuevaCantidad) => {
        setCantidad(nuevaCantidad);
        localStorage.setItem('cantidad', nuevaCantidad);
    }

    const handleECPorDiaChange = (nuevoECPorDia) => {
        setECPorDia(nuevoECPorDia)
        localStorage.setItem('ECPorDia', nuevoECPorDia)
    }

    const handleECUsage = (newECUsados) => {
        setECUsados(newECUsados)
        localStorage.setItem('ECUsados', newECUsados)
    }

    const handleDescansoLargo = () => {
        setECUsados(0)
        handleCantidadChange(maximo)
    }

    useEffect(() => {
        const handleStorageChange = () => {
            const newMaximo = parseInt(localStorage.getItem('maximo')) || 5
            const newCantidad = parseInt(localStorage.getItem('cantidad')) || 0
            const newECPorDia = parseInt(localStorage.getItem('ECPorDia')) || 5
            const newECUsados = parseInt(localStorage.getItem('ECUsados')) || 0
            setMaximo(newMaximo)
            setCantidad(newCantidad)
            setECPorDia(newECPorDia)
            setECUsados(newECUsados)
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <div className={'App'}>
            <div className={'PV-container'}>
                <PVHeader maximo={maximo} ECPorDia={ECPorDia} ECUsados={ECUsados}/>
                <Contador maximo={maximo} cantidad={cantidad} ECPorDia={ECPorDia} ECUsados={ECUsados}
                          onECUsage={handleECUsage} onCantidadChange={handleCantidadChange}/>
                <DescansoLargoButton onDescansoLargoClick={handleDescansoLargo} editPV={editPV} />
                <EditForm maximo={maximo} ECPorDia={ECPorDia} editPV={editPV} onMaximoChange={handleMaximoChange} onECPorDiaChange={handleECPorDiaChange} onEditPV={toggleEditPV}/>

            </div>

        </div>
    )
}

export default App
