import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true"></div>
      <div className="container site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-identity">
            <span className="site-footer-mark" aria-hidden="true">S</span>
            <div>
              <span className="site-footer-brand">SENATI</span>
              <p className="site-footer-tagline">Formación para el futuro</p>
            </div>
          </div>

          <div className="site-footer-section">
            <span className="site-footer-label">PORTAL ACADÉMICO</span>
            <p>Sistema de Matrícula</p>
            <span className="site-footer-detail">Directorio de Alumnos</span>
          </div>

          <div className="site-footer-community">
            <span className="site-footer-status-dot" aria-hidden="true"></span>
            <div>
              <span className="site-footer-label">NUESTRA COMUNIDAD</span>
              <p>Talento que transforma</p>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} SENATI</span>
          <span>Directorio académico · Hecho para aprender y crecer</span>
          <span className="site-footer-online">
            <span aria-hidden="true"></span>
            Plataforma educativa
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
