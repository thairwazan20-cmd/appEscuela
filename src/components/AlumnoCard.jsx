const AlumnoCard = ({ nombre, carrera, estado }) => {
  const isEnrolled = estado === 'Matriculado'
  const initials = nombre
    .split(' ')
    .map((parte) => parte[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="col-md-4 mb-4">
      <article className="card student-card h-100">
        <div className="card-body">
          <div className="student-card-header">
            <div className="student-avatar" aria-hidden="true">{initials}</div>
            <span className={`student-status ${isEnrolled ? 'student-status--enrolled' : 'student-status--inactive'}`}>
              <span className="student-status-dot" aria-hidden="true"></span>
              {estado}
            </span>
          </div>
          <h2 className="student-name">{nombre}</h2>
          <p className="student-label">PROGRAMA DE ESTUDIOS</p>
          <p className="student-career">{carrera}</p>
          <div className="student-card-actions">
            <button className="btn btn-sm student-edit" type="button">
                Editar
            </button>
            <button className="btn btn-sm student-delete" type="button">
                Eliminar
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default AlumnoCard
