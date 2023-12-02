import React from 'react'
import '../../Styles/Intruc.css'
const Intruccion = () => {


    
    return (
        <div>
            <div><h3>Intrucciones</h3></div>
            <div>
            
            </div>
            <span className='textAreaIntruccion' >

                <p>1.- Introducir ""Hora de Inicio"" y ""Hora Final"" en formato militar; de las 00:00 a las 23:59.</p>
                <p>2.- En caso de que la diferencia entre hora de inicio y final sea mayor a 12 horas o igual a 0, marcará error.</p>
                <p>3.- La cantidad de ""Empleados"" debe de incluir todos personal indirecto de la línea; Operadores e Inspectores.</p>


            </span>
        </div>
    )
}

export default Intruccion