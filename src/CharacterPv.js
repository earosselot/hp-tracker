import React, {useState} from 'react'
import PVHeader from "./PVHeader";
import Contador from "./Contador";
import DescansoLargoButton from "./DescansoLargoButton";
import EditForm from "./EditForm";

function CharacterPV({character, handlers}) {

    const [editPV, setEditPV] = useState(false)
    const toggleEditPV = () => {
        setEditPV(!editPV)
    }
    return (
        <div>
            <PVHeader maximo={character.maximo} ECPorDia={character.ECPorDia} ECUsados={character.ECUsados}/>
            <Contador
                maximo={character.maximo}
                cantidad={character.cantidad}
                ECPorDia={character.ECPorDia}
                ECUsados={character.ECUsados}
                onECUsage={handlers.handleECUsage}
                onCantidadChange={handlers.handleCantidadChange}/>
            <DescansoLargoButton onDescansoLargoClick={handlers.handleDescansoLargo} editPV={editPV} />
            <EditForm
                maximo={character.maximo}
                ECPorDia={character.ECPorDia}
                editPV={editPV}
                onMaximoChange={handlers.handleMaximoChange}
                onECPorDiaChange={handlers.handleECPorDiaChange}
                onEditPV={toggleEditPV}/>
        </div>
    )
}

export default CharacterPV