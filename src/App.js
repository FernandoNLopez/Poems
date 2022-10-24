import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='title-container'>
        <h1>Poemas by Animals</h1>
        </div>
        <Testimonio 
          nombre='Fer El Panda'
          pais='China'
          imagen='panda'
          cargo='Ingeniero en Software'
          empresa='Spotify'
          testimonio='Como todas las cosas están llenas de mi alma, emerges de las cosas, llena del alma mía. Mariposa de sueño, te pareces a mi alma, y te pareces a la palabra melancolía.' 
          alt='panda' />

          <Testimonio
          nombre='Osiris el perico'
          pais='Croacia'
          imagen='perico'
          cargo='Analista de Datos Sr'
          empresa='Accenture'
          testimonio='mató mi gloria y acabó mi suerte.
          Si el cielo ya no es menos poderoso,
          porque no den los suyos más enojos,
          rayos, como a tu hijo, te den muerte.' 
          alt='perico' />    


          <Testimonio
          nombre='Ricchie El Tigre'
          pais='Camerún'
          imagen='Tigre'
          cargo='Desarrollador de Negocios y Consultor BI'
          empresa='Amazon'
          testimonio='He cometido el peor de los pecados
          que un hombre puede cometer. No he sido
          feliz. Que los glaciares del olvido
          me arrastren y me pierdan, despiadados.' 
          alt='tigre' />
      </div>
    </div>
  );
}

export default App;
