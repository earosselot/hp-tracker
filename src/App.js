import './App.css'
import React, {useState, useEffect} from 'react'
import Contador from './Contador'
import PVHeader from './PVHeader'

function App() {
    const [maximo, setMaximo] = useState(() => parseInt(localStorage.getItem('maximo')) || 5)
    const [cantidad, setCantidad] = useState(() => parseInt(localStorage.getItem('cantidad')) || 0)
    const [ECPorDia, setECPorDia] = useState(() => parseInt(localStorage.getItem('ECPorDia')) || 5)
    const [ECUsados, setECUsados] = useState(() => parseInt(localStorage.getItem('ECUsados')) || 0)
    const handleMaximoChange = (event) => {
        const newMaximo = parseInt(event.target.value)
        setMaximo(newMaximo)
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
    }

    const handleDescansoLargo = () => {
        setECUsados(0)
    }

    useEffect(() => {
        const handleStorageChange = () => {
            const newMaximo = parseInt(localStorage.getItem('maximo')) || 5;
            const newCantidad = parseInt(localStorage.getItem('cantidad')) || 0;
            setMaximo(newMaximo);
            setCantidad(newCantidad);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <div className={'App'}>
            <div className={'PV-container'}>
                <PVHeader maximo={maximo} ECPorDia={ECPorDia} ECUsados={ECUsados} />
                <Contador maximo={maximo} cantidad={cantidad} ECPorDia={ECPorDia} ECUsados={ECUsados} onECUsage={handleECUsage} onCantidadChange={handleCantidadChange}/>

                <form className={'PV-max-containter'}>
                    <div>
                        <label>PV Max: </label>
                        <input className={'PV-max-input'} type="number" value={maximo} onChange={handleMaximoChange}/>
                    </div>
                    <div>
                        <label>EC/Dia:</label>
                        <input className={'PV-max-input'} type="number" value={ECPorDia} onChange={handleECPorDiaChange}/>
                    </div>
                    <div>
                        <button onClick={handleDescansoLargo}>Descanso Largo</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default App
