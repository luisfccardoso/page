import './Teaching.css'

export default function Teaching() {
  return (
    <div className="teaching-container">
      <section className="teaching-hero">
        <h1>Ensino</h1>
        <p className="teaching-subtitle">Disciplinas, cursos e materiais didáticos</p>
      </section>

      <section className="teaching-section">
        <h2>Disciplinas Ministradas</h2>

        <div className="teaching-item">
          <div className="teaching-item-header">
            <h3>UniCEUB - Centro Universitário de Brasília</h3>
            <span className="teaching-period">Jul 2024 - Presente</span>
          </div>

          <div className="course-list">

            <div className="course-item">
              <h4>Banco de Dados</h4>
              <p>Fundamentos de bancos de dados relacionais, modelagem de dados, SQL e administração de SGBDs.</p>
            </div>

            <div className="course-item">
              <h4>Engenharia de Dados</h4>
              <p>Pipelines de dados, ETL/ELT, data warehousing e arquitetura de dados moderna.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
