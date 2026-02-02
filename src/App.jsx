import { Routes, Route, Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaOrcid } from 'react-icons/fa'
import { SiGooglescholar, SiResearchgate } from 'react-icons/si'
import lattesIcon from './assets/icons-tit-acesso.png'
import About from './pages/About'
import Teaching from './pages/Teaching'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>Luis Filipe Campos Cardoso, MSc</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links">
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/teaching">Ensino</Link>
            </li>
            <li>
              <a href="mailto:luisfilipe.tec@gmail.com" rel="noopener noreferrer">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </main>

      <footer className="main-footer">
        <ul className="nav-links-footer">
          <li>
            <a href="https://github.com/luisfccardoso" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luisfccardoso/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="http://lattes.cnpq.br/4040261537212229" target="_blank" rel="noopener noreferrer">
              <img src={lattesIcon} alt="Lattes" className="lattes-icon" /> Lattes
            </a>
          </li>
          <li>
            <a href="https://orcid.org/0000-0002-5647-9941" target="_blank" rel="noopener noreferrer">
              <FaOrcid /> ORCID
            </a>
          </li>
          <li>
            <a href="https://www.researchgate.net/profile/Luis-Filipe-Campos-Cardoso" target="_blank" rel="noopener noreferrer">
              <SiResearchgate /> ResearchGate
            </a>
          </li>
          <li>
            <a href="https://scholar.google.com.br/citations?hl=pt-BR&user=qAjBblgAAAAJ" target="_blank" rel="noopener noreferrer">
              <SiGooglescholar /> Google Scholar
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}