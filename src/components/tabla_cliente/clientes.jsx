import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../navbar/navbar';
import { Table, TableCell, TableContainer, TableHeader, TableRow, Button } from './styles';
import { TableCell2 } from './styles';

export const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleGenerateTurno = (id) => {
    const selectedData = clientes.find(cliente => cliente.id === id);
    console.log('Generando turno para:', selectedData);
    // Aquí puedes agregar la lógica para generar el turno con los datos de `selectedData`
  };

  const handleRechazar = (id, email, nombreCliente) => {
    axios.post('http://localhost:5000/api/rechazar', { email, nombreCliente })
      .then(response => {
        console.log('Correo enviado al cliente:', response.data);
        // Aquí podrías actualizar el estado o realizar otras acciones si es necesario
      })
      .catch(error => {
        console.error('Error al enviar correo al cliente:', error);
        // Manejar el error aquí, mostrar mensaje al usuario, etc.
      });
  };

  return (
    <>
      <Navbar />
      <TableContainer>
        <h1>CONSULTAS DE CLIENTES</h1>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Apellido</TableHeader>
              <TableHeader>Teléfono</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Causa</TableHeader>
              <TableHeader>Fecha</TableHeader>
              <TableHeader>Descripción</TableHeader>
              <TableHeader>Acciones</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.id}</TableCell>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.apellido}</TableCell>
                <TableCell>{cliente.telefono}</TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>{cliente.causa}</TableCell>
                <TableCell>{new Date(cliente.fecha).toISOString().split('T')[0]}</TableCell>
                <TableCell>{cliente.descripcion}</TableCell>
                <TableCell2>
                  <Button
                    onClick={() => handleGenerateTurno(cliente.id)}
                    style={{ marginBottom: '10px' }}
                  >
                    Generar Turno
                  </Button>
                  <Button
                    onClick={() => handleRechazar(cliente.id, cliente.email, cliente.nombre)}
                  >
                    Rechazar
                  </Button>
                </TableCell2>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};
