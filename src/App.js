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

    const handleECPorDiaChange = (event) => {
        console.debug('event: ' + event.target.value)
        try {
            const nuevoECPorDia = parseInt(event.target.value)
            setECPorDia(nuevoECPorDia)
            localStorage.setItem('ECPorDia', nuevoECPorDia)
        } catch (e) {
            console.log(e)
        }

    }

    const handleECUsage = (newECUsados) => {
        setECUsados(newECUsados)
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
                <PVHeader maximo={maximo} ECPorDia={ECPorDia} ECUsados={ECUsados} />
                <Contador maximo={maximo} cantidad={cantidad} ECPorDia={ECPorDia} ECUsados={ECUsados} onECUsage={handleECUsage} onCantidadChange={handleCantidadChange}/>

                <form className={'PV-max-containter'}>
                    <div>
                        <label>PV Max: </label>
                        <input className={'PV-max-input'} type="number" value={maximo} onChange={handleMaximoChange}/>
                    </div>
                    <div>
                        <label>EC/Dia:</label>
                        <select onChange={handleECPorDiaChange} value={ECPorDia} className={'PV-max-input'}>
                            {
                                [...Array(10)].map((_, i) => i + 1)
                                    .map(i => <option key={i} value={i}>{i}</option>)
                            }
                        </select>
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
