import React from 'react'

function PVHeader({maximo, ECUsados, ECPorDia}) {
    return (
        <div>
            <table className={'PV-header-table'}>
                <thead>
                <tr>
                    <th>PV Max</th>
                    <th>Maltrecho</th>
                </tr>
                </thead>
                <tbody>
                <tr className={'PV-header-values'}>
                    <td>{maximo}</td>
                    <td>{Math.floor(maximo / 2)}</td>
                </tr>
                </tbody>

            </table>
            <table className={'PV-header-table'}>
                <thead>
                <tr>
                    <th>PV Esf Curativo</th>
                    <th>Esf Curativos</th>
                </tr>
                </thead>
                <tbody>
                <tr className={'PV-header-values'}>
                    <td>{Math.floor(maximo / 4)}</td>
                    <td>{ECUsados} / {ECPorDia}</td>
                </tr>
                </tbody>
            </table>
        </div>


    )
}

export default PVHeader