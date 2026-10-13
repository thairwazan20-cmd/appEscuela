import Navbar from './components/Navbar'
import AlumnoCard from './components/AlumnoCard'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="container directory">
        <section className="directory-heading">
          <div>
            <p className="directory-eyebrow">COMUNIDAD ACADÉMICA</p>
            <h1 className="directory-title">Directorio de alumnos</h1>
            <p className="directory-description">
              Conoce a las personas que forman parte de nuestra comunidad.
            </p>
          </div>
          <div className="directory-total" aria-label="3 alumnos registrados">
            <span>03</span>
            <small>alumnos</small>
          </div>
        </section>

        <div className="row">
          <AlumnoCard
            nombre="Jenapiere Llamocca"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Thair"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Lizbeth"
            carrera="Textilería y Confecciones"
            estado="Expulsado"
          />
            <AlumnoCard
            nombre="Luciana"
            carrera="Gastronomía"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Lia"
            carrera="Diseño Gráfico"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Lizbeth Llamocca"
            carrera="Ingeniería de Sistemas"
            estado="Repitente"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
