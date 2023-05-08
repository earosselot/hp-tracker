import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DescansoLargoButton({onDescansoLargoClick, editPV}) {

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
        <button className={'PV-buttons descanso-button'} onClick={handleDescansoLargoPrimerClick}>
            <FontAwesomeIcon icon={['fas', 'moon']} size="lg"/>
        </button>
    </div>

    const confirmButton = <div className={'PV-descanso-button-container'}>
        <button className={'PV-buttons exito-button'} onClick={handleDescansoLargo}>
            <FontAwesomeIcon icon={['fas', 'check']} size="xl"/>
        </button>
    </div>

    return clicked ? confirmButton : !editPV && descansoButton
}

export default DescansoLargoButton