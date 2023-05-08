import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contador({maximo, cantidad, ECUsados, ECPorDia, onECUsage, onCantidadChange}) {

    const [clicked, setClicked] = useState(false);

    const maltrecho = Math.floor(maximo / 2);

    const handleIncrement = (incremento) => {
        const nuevaCantidad = cantidad + incremento
        if (nuevaCantidad <= maximo) {
            onCantidadChange(nuevaCantidad)
        } else {
            onCantidadChange(maximo)
        }
    }

    const handleDecrement = (decremento) => {
        const nuevaCantidad = cantidad - decremento
        if (nuevaCantidad >= -maximo) {
            onCantidadChange(nuevaCantidad);
        } else {
            onCantidadChange(-maximo)
        }
    }

    const handleEC = () => {
        handleIncrement(Math.floor(maximo / 4))
        onECUsage(ECUsados + 1)
        setClicked(false)
    }

    const handleECFirstClick = () => {
        setClicked(true)
        setTimeout(
            function() {
                setClicked(false)
            }, 5000);
    }


    const ECButton =
        <button className={'PV-buttons ec-button'} onClick={handleECFirstClick} disabled={cantidad >= maximo || ECUsados >= ECPorDia}>
            <FontAwesomeIcon icon={['fas', 'heartbeat']}/>
        </button>

    const ECConfirmButton =
        <button className={'PV-buttons exito-button'} onClick={handleEC} disabled={cantidad >= maximo || ECUsados >= ECPorDia}>
            <FontAwesomeIcon icon={['fas', 'check']}/>
        </button>

    return (
        <div className={'PV-box'}>
            <div className={'PV-box-element PV-box-element-space-around'}>
                <button className={'PV-buttons'} onClick={() => handleDecrement(5)} disabled={cantidad <= -maximo}>-5</button>
                <button className={'PV-buttons'} onClick={() => handleDecrement(1)} disabled={cantidad <= -maximo}>-</button>
            </div>
            <div className={'PV-box-element PV-box-element-center'}>
                <span className={'PV'}>&hearts;</span><span
                className={cantidad <= maltrecho ? 'color-cantidad color-cantidad--mitad PV' : 'color-cantidad PV'}>{cantidad}</span>
            </div>
            <div className={'PV-box-element PV-box-element-space-around'}>
                <button className={'PV-buttons'} onClick={() => handleIncrement(1)} disabled={cantidad >= maximo}>+
                </button>
                {clicked ? ECConfirmButton : ECButton}
            </div>
        </div>
    );
}

export default Contador;