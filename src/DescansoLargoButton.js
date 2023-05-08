import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DescansoLargoButton({onDescansoLargoClick, editPV}) {

    const [longRestButtonClicked, setLongRestButtonClicked] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState(0);

    const handleLongRestConfirmation = () => {
        onDescansoLargoClick()
        setLongRestButtonClicked(false)
        clearTimeout(currentTimeout)
        setCurrentTimeout(null)
    }

    const handleLongRestFirstClick = () => {
        setLongRestButtonClicked(true)
        let timer = setTimeout(
            function() {
                setLongRestButtonClicked(false)
            }, 3000);
        setCurrentTimeout(timer)
    }

    const descansoButton = <div className={'PV-descanso-button-container'}>
        <button className={'PV-buttons descanso-button'} onClick={handleLongRestFirstClick}>
            <FontAwesomeIcon icon={['fas', 'moon']} size="lg"/>
        </button>
    </div>

    const confirmButton = <div className={'PV-descanso-button-container'}>
        <button className={'PV-buttons exito-button'} onClick={handleLongRestConfirmation}>
            <FontAwesomeIcon icon={['fas', 'check']} size="xl"/>
        </button>
    </div>

    return longRestButtonClicked ? confirmButton : !editPV && descansoButton
}

export default DescansoLargoButton