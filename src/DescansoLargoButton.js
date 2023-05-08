import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DescansoLargoButton({onDescansoLargoClick}) {

    const [clicked, setClicked] = useState(false);

    const handleDescansoLargo = () => {
        onDescansoLargoClick()
        setClicked(false)
    }

    const handleDescansoLargoPrimerClick = () => {
        setClicked(true)
        setTimeout(
            function() {
                setClicked(false)
            }, 5000);
    }

    const descansoButton = <div className={'PV-descanso-button-container'}>
        <button className={'PV-buttons'} onClick={handleDescansoLargoPrimerClick}>
            <FontAwesomeIcon icon={['fas', 'moon']}/>
        </button>
    </div>

    const confirmButton = <div className={'PV-descanso-button-container'}>
        <button className={'PV-buttons exito-button'} onClick={handleDescansoLargo}>
            <FontAwesomeIcon icon={['fas', 'check']}/>
        </button>
    </div>

    return clicked ? confirmButton : descansoButton
}

export default DescansoLargoButton