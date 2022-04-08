import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Switch } from './switch'

export function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if(window.localStorage.darkmode && JSON.parse(window.localStorage.darkmode)) setDarkMode(true)
  }, []);

  return (
    <div className={`app-warpper ${darkMode ? 'dark-mode' : ''}`}>
      <Head>
        <meta name="description" content="I'm a Toronto based full stack developer with over 4 years of professional experience designing and developing different kinds of systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <div className="container">
          <div className={`wrapper ${(expanded) ? 'expanded' : ''}`}>
            <div className="name">
              <Link href="/" scroll={false}>You-Sheng Huang</Link>
            </div>
            <nav className="header-nav">
              <ul>
                <li><NavItem href="/" onClick={() => setExpanded(false)}>Resume</NavItem></li>
                <li><NavItem href="/projects" onClick={() => setExpanded(false)}>Projects</NavItem></li>
              </ul>
            </nav>
            <div className="dark-mode-wrapper">
              <Switch id="darkMode" state={darkMode} setState={setDarkMode}></Switch>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className={`moon ${(darkMode)? 'on' : ''}`} viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" /></svg>
            </div>

            <a className="header-menu-toggle" onClick={() => setExpanded(expanded => !expanded)}><span>Menu</span></a>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        You-Sheng Huang{' '}
      </a>
    </footer>
  )
}

function NavItem({ href, onClick, children }) {
  const route = useRouter()
  const path = route.asPath;
  return (
    <Link href={href} scroll={false} >
      <a className={(path === href) ? 'current' : ''} onClick={onClick}>{children}</a>
    </Link>
  )
}