const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORTHIRD || 3004;

// Establecer la carpeta de archivos estáticos (donde se encuentra tu archivo HTML)
app.use(express.static(path.join(__dirname)));

// Ruta principal para servir el archivo HTML
app.get('/manos', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor  
app.listen(PORT, () => {
  console.log(`Server UP Unity Manos: http://localhost:${PORT}`);
  //process.send("Server  manos UP")
});
