import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contador({maximo, cantidad, ECUsados, ECPorDia, onECUsage, onCantidadChange}) {

    const [clicked, setClicked] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState(0);

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

    const handleECConfirmation = () => {
        handleIncrement(Math.floor(maximo / 4))
        onECUsage(ECUsados + 1)
        setClicked(false)
        clearTimeout(currentTimeout)
        setCurrentTimeout(null)
    }

    const handleECFirstClick = () => {
        setClicked(true)
        let timer = setTimeout(
            function() {
                setClicked(false)
            }, 3000);
        setCurrentTimeout(timer)
    }

    const ECButton =
        <button className={'PV-buttons ec-button'} onClick={handleECFirstClick} disabled={cantidad >= maximo || ECUsados >= ECPorDia}>
            <FontAwesomeIcon icon={['fas', 'heartbeat']} size="xl"/>
        </button>

    const ECConfirmButton =
        <button className={'PV-buttons exito-button'} onClick={handleECConfirmation} disabled={cantidad >= maximo || ECUsados >= ECPorDia}>
            <FontAwesomeIcon icon={['fas', 'check']} size="xl"/>
        </button>

    return (
        <div className={'PV-box'}>
            <div className={'PV-box-element PV-box-element-space-around'}>
                <button className={'PV-buttons'} onClick={() => handleDecrement(5)} disabled={cantidad <= -maximo}>-5</button>
                <button className={'PV-buttons'} onClick={() => handleDecrement(1)} disabled={cantidad <= -maximo}>
                    <FontAwesomeIcon icon={['fas', 'minus']} size="lg"/>
                </button>
            </div>
            <div className={'PV-box-element PV-box-element-center'}>
                <span className={'PV heart-counter'}><FontAwesomeIcon icon={['fas', 'heart']}/></span>
                <span className={cantidad <= maltrecho ? 'color-cantidad color-cantidad--mitad PV' : 'color-cantidad PV'}>
                    {cantidad}
                </span>
            </div>
            <div className={'PV-box-element PV-box-element-space-around'}>
                <button className={'PV-buttons'} onClick={() => handleIncrement(1)} disabled={cantidad >= maximo}>
                    <FontAwesomeIcon icon={['fas', 'plus']} size="xl"/>
                </button>
                {clicked ? ECConfirmButton : ECButton}
            </div>
        </div>
    );
}

export default Contador;