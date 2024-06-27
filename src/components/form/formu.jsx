import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../navbar/navbar';
import { TitleContainer, FormularioContainer, ContainerForm } from './styles';
import { FooterContainer } from '../footer/styles';

export const Formu = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    causa: '',
    fecha: '',
    descripcion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newErrors = { ...errors };

    // Validar que no empiece con espacios
    if (value.startsWith(' ')) {
      newErrors[id] = 'No puede empezar con espacios';
    } else {
      delete newErrors[id];
    }

    // Validación específica para nombre y apellido (letras y espacios)
    if (id === 'nombre' || id === 'apellido') {
      if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(value)) {
        newErrors[id] = 'Debe contener solo letras y espacios';
      } else {
        delete newErrors[id];
      }
    } else if (id === 'email') {
      // Validación básica de formato de email
      if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors[id] = 'Debe ser un email válido';
      } else {
        delete newErrors[id];
      }
    } else {
      delete newErrors[id];
    }

    setErrors(newErrors);

    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos que no deben estar vacíos
    const requiredFields = ['nombre', 'apellido', 'telefono', 'email', 'causa', 'fecha', 'descripcion'];
    let formValid = true;
    let newErrors = { ...errors };

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es obligatorio';
        formValid = false;
      } else {
        delete newErrors[field];
      }
    });

    // Validar errores en campos de texto
    if (formData.nombre && (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(formData.nombre) || formData.nombre.startsWith(' '))) {
      newErrors.nombre = 'Debe contener solo letras y no empezar con espacios';
      formValid = false;
    }
    if (formData.apellido && (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(formData.apellido) || formData.apellido.startsWith(' '))) {
      newErrors.apellido = 'Debe contener solo letras y no empezar con espacios';
      formValid = false;
    }
    if (formData.causa && formData.causa.startsWith(' ')) {
      newErrors.causa = 'No puede empezar con espacios';
      formValid = false;
    }
    if (formData.descripcion && formData.descripcion.startsWith(' ')) {
      newErrors.descripcion = 'No puede empezar con espacios';
      formValid = false;
    }

    // Mostrar errores si no es válido
    if (!formValid) {
      setErrors(newErrors);
      alert('Por favor, revise los campos antes de enviar.');
      return;
    }

    // Envío del formulario si todo es válido
    axios.post('http://localhost:5000/api/formulario', formData)
      .then(response => {
        alert('Datos enviados correctamente');
      })
      .catch(error => {
        alert('Error al enviar los datos');
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <ContainerForm>
        <TitleContainer>
          <h1>REALICE SU CONSULTA UTILIZANDO EL SIGUIENTE FORMULARIO</h1>
        </TitleContainer>
        <FormularioContainer>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">NOMBRE</label>
            <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} required />
            {errors.nombre && <span>{errors.nombre}</span>}
            
            <label htmlFor="apellido">APELLIDO</label>
            <input type="text" id="apellido" value={formData.apellido} onChange={handleChange} required />
            {errors.apellido && <span>{errors.apellido}</span>}
            
            <label htmlFor="telefono">TELEFONO</label>
            <input type="tel" id="telefono" value={formData.telefono} onChange={handleChange} required />
            
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <span>{errors.email}</span>}
            
            <label htmlFor="causa">CAUSA</label>
            <input type="text" id="causa" value={formData.causa} onChange={handleChange} required />
            {errors.causa && <span>{errors.causa}</span>}
            
            <label htmlFor="fecha">FECHA</label>
            <input type="date" id="fecha" value={formData.fecha} onChange={handleChange} required />
            
            <label htmlFor="descripcion">DESCRIPCION</label>
            <textarea id="descripcion" value={formData.descripcion} onChange={handleChange} required />
            {errors.descripcion && <span>{errors.descripcion}</span>}
            
            <button type="submit">Enviar</button>
          </form>
        </FormularioContainer>
      </ContainerForm>
      
    </>
  );
};
