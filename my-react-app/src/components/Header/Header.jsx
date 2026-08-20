import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/degnet-logo.jpg'
import './Header.css'

/*
 * NAV_LINKS — single source of truth for navigation order.
 * Update here and both the desktop nav and mobile drawer stay in sync.
 */
const NAV_LINKS = [
  { label: 'Home',          path: '/'           },
  { label: 'About Us',      path: '/about'      },
  { label: 'Our Work',      path: '/our-work'   },
  { label: 'Our Impact',    path: '/our-impact' },
  { label: 'Get Involved',  path: '/get-involved' },
  { label: 'News & Stories',path: '/news'       },
  { label: 'Contact Us',    path: '/contact'    },
]

/*
 * Header
 *
 * Two stacked bars:
 *   1. Utility bar  — location, phone, email, social icons
 *   2. Main nav bar — logo/wordmark, nav links, Donate button
 *
 * Behaviour:
 *   - Becomes sticky (adds .is-sticky class) after scrolling 80px
 *   - Hamburger menu toggles the mobile drawer below 1024px
 *   - Mobile drawer closes when a nav link is clicked
 */
function Header() {
  const [isSticky, setIsSticky]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)

  /* Add/remove sticky class based on scroll position */
  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${isSticky ? ' is-sticky' : ''}`}>

      {/* ── Utility bar ─────────────────────────────────────── */}
      <div className="utility-bar">
        <div className="container utility-bar__inner">

          <div className="utility-bar__left">
            <span className="utility-bar__item">
              {/* Location pin icon */}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Maganjo, Wakiso District, Uganda
            </span>
          </div>

          <div className="utility-bar__center">
            <a href="tel:+256776250273" className="utility-bar__item utility-bar__link">
              {/* Phone icon */}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
              </svg>
              0776250273
            </a>
            <a href="mailto:deafgirlsandwomenrightsnetwork@gmail.com" className="utility-bar__item utility-bar__link">
              {/* Envelope icon */}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              deafgirlsandwomenrightsnetwork@gmail.com
            </a>
          </div>

          <div className="utility-bar__right">
            <a href="#" aria-label="Facebook"  className="utility-bar__social">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="utility-bar__social">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="utility-bar__social">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="utility-bar__social">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── Main nav bar ─────────────────────────────────────── */}
      <nav className="main-nav" aria-label="Main navigation">
        <div className="container main-nav__inner">

          {/* Logo + wordmark */}
          <Link to="/" className="main-nav__brand" onClick={closeMenu} aria-label="DEGNET home">
            <img src={logo} alt="DEGNET logo" className="main-nav__logo" />
            <div className="main-nav__wordmark">
              <span className="main-nav__wordmark-name">DEGNET</span>
              <span className="main-nav__wordmark-tagline">Deaf Girls and Women Rights Network</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="main-nav__links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'main-nav__link is-active' : 'main-nav__link'
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Donate button — desktop */}
          <a href="#" className="btn-primary main-nav__donate">
            Donate
          </a>

          {/* Hamburger button — mobile only */}
          <button
            className="main-nav__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {/* Three lines → X when open */}
            <span className={`hamburger-icon${menuOpen ? ' is-open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>

        </div>
      </nav>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'mobile-drawer__link is-active' : 'mobile-drawer__link'
                }
                end={link.path === '/'}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#" className="btn-primary mobile-drawer__donate" onClick={closeMenu}>
              Donate
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay — closes menu when tapping outside on mobile */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

    </header>
  )
}

export default Header
