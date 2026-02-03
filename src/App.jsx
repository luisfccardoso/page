import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaOrcid } from 'react-icons/fa'
import { SiGooglescholar, SiResearchgate } from 'react-icons/si'
import lattesIcon from './assets/icons-tit-acesso.png'
import About from './pages/About'
import Teaching from './pages/Teaching'
import './App.css'

export default function App() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi em um link dentro do dropdown
      const isLink = event.target.closest('a')

      // Se clicar em um link, não fecha o dropdown imediatamente
      // Deixa o navegador processar o link primeiro
      if (isLink && dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return
      }

      // Fecha o dropdown se clicar fora dele
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>Luis Filipe Campos Cardoso, MSc</h1>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-links" ref={dropdownRef}>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/teaching">Ensino</Link>
            </li>
            <li className={`dropdown ${openDropdown === 'curriculo' ? 'open' : ''}`}>
              <span className="dropdown-trigger" onClick={() => toggleDropdown('curriculo')}>
                Currículo
              </span>
              <ul className="dropdown-menu">
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
              </ul>
            </li>
            <li className={`dropdown ${openDropdown === 'publicacoes' ? 'open' : ''}`}>
              <span className="dropdown-trigger" onClick={() => toggleDropdown('publicacoes')}>
                Publicações
              </span>
              <ul className="dropdown-menu">
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
            </li>
            <li className={`dropdown ${openDropdown === 'codigos' ? 'open' : ''}`}>
              <span className="dropdown-trigger" onClick={() => toggleDropdown('codigos')}>
                Códigos
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://github.com/luisfccardoso" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </li>
              </ul>
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
        <p className="footer-text">© 2026 Luis Filipe Campos Cardoso, MSc</p>
      </footer>
    </div>
  )
}