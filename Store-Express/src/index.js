import app from "./app"
import childProcess from "child_process"

app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"))
    // Iniciar el servidor hijo
  const childServerProcess = childProcess.fork('../Unity/proyectoWEB/server.js');

  childServerProcess.on('message', (message) => {
    if (message === 'Server UP') {
      console.log('Servidor hijo iniciado correctamente.');
    }
  })
})

