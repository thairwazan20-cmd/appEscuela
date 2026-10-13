const Navbar = () => {
  return (
    <nav className="navbar navbar-dark site-navbar">
      <div className="container">
        <a className="navbar-brand site-brand" href="#" aria-label="SENATI, inicio">
          <span className="site-brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>SENATI</strong>
            <small>Sistema de matrícula</small>
          </span>
        </a>
        <span className="site-navbar-label">PORTAL ACADÉMICO</span>
      </div>
    </nav>
  )
}

export default Navbar
