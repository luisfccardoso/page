import profilePhoto from '../assets/foto perfil linkedin.jpg'
import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <img src={profilePhoto} alt="Luis Filipe Campos Cardoso" className="about-profile-photo" />
        <div className="about-roles">
          <p className="role-item">
            <span className="role-label">Assessor de Dados</span>
            <span className="role-separator">@</span>
            <a href="https://www.stj.jus.br/" target='_blank' rel="noopener noreferrer">STJ</a>
          </p>
          <p className="role-item">
            <span className="role-label">Professor Assistente</span>
            <span className="role-separator">@</span>
            <a href="https://www.ceub.br/" target='_blank' rel="noopener noreferrer">CEUB</a>
          </p>
          <p className="role-item">
            <span className="role-label">Mestre e Engenheiro em Computação</span>
            <span className="role-separator">@</span>
            <a href="https://www.unb.br/" target='_blank' rel="noopener noreferrer">UnB</a>
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Sobre</h2>
        <p>
          Mestre e Engenheiro em Computação pela Universidade de Brasília (UnB).
          Atualmente, trabalho na área de Análise e Governança de Dados e de Desenvolvimento
          de Soluções de Tecnologia para a Gestão Estratégica no Superior Tribunal de Justiça (STJ). 
          Além disso, sou Professor Assistente no Centro Universitário de Brasília (CEUB), lecionando disciplinas na área de Ciência de Dados e atuando como líder dessa área na instituição.
          Na minha trajetória acadêmica, desenvolvi pesquisas focadas em Governança de Dados e Ciência de Dados.
          No passado, trabalhei em startups de tecnologia e em consultorias de TI, focando em projetos na área de Dados e Desenvolvimento Web. 
        </p>
      </section>

      <section className="about-section">
        <h2>Áreas de Atuação</h2>
        <div className="areas-grid">
          <div className="area-card">
            <h3>Profissional</h3>
            <p>Trabalho na área de Análise e Governança de Dados e de Desenvolvimento de Soluções Tecnológicas no setor público e em consultorias.</p>
          </div>
          <div className="area-card">
            <h3>Ensino</h3>
            <p>Atuo como Professor Assistente no CEUB, lecionando disciplinas na área de Ciência de Dados e liderando a cátedra dessa área dentro da instituição.</p>
          </div>
          <div className="area-card">
            <h3>Pesquisa</h3>
            <p>Minhas áreas de interesse são: Governança de Dados, Engenharia de Software na Ciência de Dados e Administração Pública.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
