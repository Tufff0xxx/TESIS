const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'estudiojuridico2'
});

db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');

  // Crear la tabla si no existe
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Consultas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      apellido VARCHAR(255) NOT NULL,
      telefono VARCHAR(20) NOT NULL,
      email VARCHAR(255) NOT NULL,
      causa TEXT NOT NULL,
      fecha DATE NOT NULL,
      descripcion TEXT NOT NULL
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creando la tabla:', err);
      return;
    }
    console.log('Tabla creada o ya existe');
  });
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tufox120@gmail.com',
    pass: 'qagv gruo cxdv efry'
  }
});

// Ruta para guardar los datos del formulario y enviar correos electrónicos
app.post('/api/formulario', (req, res) => {
  const { nombre, apellido, telefono, email, causa, fecha, descripcion } = req.body;

  const sql = 'INSERT INTO Consultas (nombre, apellido, telefono, email, causa, fecha, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, telefono, email, causa, fecha, descripcion], (err, result) => {
    if (err) {
      console.error('Error insertando datos:', err);
      res.status(500).send('Error al guardar los datos');
      return;
    }

    const mailOptionsUser = {
      from: 'tufox120@gmail.com',
      to: email,
      subject: 'Confirmación de envío de formulario',
      text: `Hola ${nombre},\n\nGracias por enviar tu formulario. Aquí están los detalles:\n\nNombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nCausa: ${causa}\nFecha: ${fecha}\nDescripción: ${descripcion}`
    };

    const mailOptionsOwner = {
      from: 'tufox120@gmail.com',
      to: 'pamelaaravena27@gmail.com',
      subject: 'Nuevo formulario enviado',
      text: `Se ha enviado un nuevo formulario. Aquí están los detalles:\n\nNombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nCausa: ${causa}\nFecha: ${fecha}\nDescripción: ${descripcion}`
    };

    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        console.error('Error enviando correo al usuario:', error);
        res.status(500).send('Error al enviar el correo al usuario');
        return;
      }
      console.log('Correo enviado al usuario:', info.response);

      transporter.sendMail(mailOptionsOwner, (error, info) => {
        if (error) {
          console.error('Error enviando correo al dueño:', error);
          res.status(500).send('Error al enviar el correo al dueño');
          return;
        }
        console.log('Correo enviado al dueño:', info.response);
        res.send('Datos guardados y correos enviados');
      });
    });
  });
});

// Ruta para enviar correo de rechazo
app.post('/api/rechazar', (req, res) => {
  const { email, nombreCliente } = req.body;

  const mailOptions = {
    from: 'tufox120@gmail.com',
    to: email,
    subject: 'Consulta Rechazada',
    text: `Estimado ${nombreCliente},\n\nLamentamos informarle que no podemos proceder con su consulta en este momento. Quedamos a su disposición para cualquier otra inquietud. Desde ya, muchas gracias.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error enviando correo al cliente:', error);
      res.status(500).send('Error al enviar el correo al cliente');
    } else {
      console.log('Correo enviado al cliente:', info.response);
      res.send('Correo enviado al cliente');
    }
  });
});

// Ruta para obtener clientes
app.get('/api/clientes', (req, res) => {
  const sql = 'SELECT * FROM Consultas';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error obteniendo los datos:', err);
      res.status(500).send('Error al obtener los datos');
      return;
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
