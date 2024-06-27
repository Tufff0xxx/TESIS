import React from 'react'

export const Nuevo = (nombre, contraseña) => {
  return (
    <div>
        <form action="">
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <label htmlFor="dni">DNI</label>
            <input type="number" name="dni" id="" />
            <label htmlFor="MP">Matricula Profesional</label>
            <input type="number" name="MP" id="" />
            <input type="submit" value="CREAR ABOGADO" />

        </form>


    </div>
  )
}
