import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function EditForm({maximo, ECPorDia, onMaximoChange, onECPorDiaChange}) {

    const [edit, setEdit] = useState(false)

    const handleMaximoChange = (event) => {
        const newMaximo = parseInt(event.target.value)
        onMaximoChange(newMaximo)
    }

    const handleECPorDiaChange = (event) => {
        const nuevoECPorDia = parseInt(event.target.value)
        onECPorDiaChange(nuevoECPorDia)
    }

    return (
        <div>
            {edit && <form className={'PV-edit-container'}>
                <div>
                    <label>PV Max: </label>
                    <input className={'PV-max-input'} type="number" value={maximo} onChange={handleMaximoChange}/>
                </div>
                <div>
                    <label>EC/Dia:</label>
                    <select onChange={handleECPorDiaChange} value={ECPorDia} className={'PV-max-input'}>
                        {
                            [...Array(15)].map((_, i) => i + 1)
                                .map(i => <option key={i} value={i}>{i}</option>)
                        }
                    </select>
                </div>
            </form>}
            <div className={'PV-edit-button-container'}>
                <button className={edit ? 'PV-buttons exito-button' : 'PV-buttons edit-button'} onClick={() => setEdit(!edit)}>
                    {edit ? <FontAwesomeIcon icon={['fas', 'check']} size="xl"/> : <FontAwesomeIcon icon={['fas', 'edit']} size="lg" />}
                </button>
            </div>

        </div>
    )
}

export default EditForm