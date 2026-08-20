import { Link } from 'react-router-dom'
import logo from '../../assets/degnet-logo.jpg'
import './Footer.css'

/*
 * QUICK_LINKS — mirrors the main nav order exactly.
 * Kept here separately so the footer doesn't depend on Header's NAV_LINKS.
 */
const QUICK_LINKS = [
  { label: 'Home',           path: '/'            },
  { label: 'About Us',       path: '/about'       },
  { label: 'Our Work',       path: '/our-work'    },
  { label: 'Our Impact',     path: '/our-impact'  },
  { label: 'Get Involved',   path: '/get-involved'},
  { label: 'News & Stories', path: '/news'        },
  { label: 'Contact Us',     path: '/contact'     },
]

const WORK_AREAS = [
  'Health, SRHR & HIV/AIDS',
  'GBV, Protection & Safeguarding',
  'Inclusive Education, Skills & Economic Empowerment',
  'Advocacy, Policy, Research & Documentation',
]

/*
 * Footer
 *
 * Four-column layout on a maroon background:
 *   Col 1 — Logo, description, social icons
 *   Col 2 — Quick Links
 *   Col 3 — Our Work Areas
 *   Col 4 — Contact details
 *
 * Bottom bar — copyright + Privacy Policy / Terms links
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">

        {/* ── Four columns ──────────────────────────────────── */}
        <div className="footer__grid">

          {/* Column 1 — Brand */}
          <div className="footer__col">
            <Link to="/" aria-label="DEGNET home" className="footer__brand">
              <img src={logo} alt="DEGNET logo" className="footer__logo" />
            </Link>
            <p className="footer__description">
              DEGNET is a women- and girl-led organisation working for the
              rights, dignity and empowerment of deaf girls and women in Uganda.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social-icon">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="footer__social-icon">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-icon">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social-icon">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Work Areas */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Work Areas</h3>
            <ul className="footer__list">
              {WORK_AREAS.map((area) => (
                <li key={area}>
                  <span className="footer__list-item">
                    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="footer__col">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__contact-list">
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Maganjo, Wakiso District, Uganda</span>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
                <a href="tel:+256776250273" className="footer__contact-link">0776250273</a>
              </li>
              <li>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:deafgirlsandwomenrightsnetwork@gmail.com" className="footer__contact-link">
                  deafgirlsandwomenrightsnetwork@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Deaf Girls and Women Rights Network (DEGNET). All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
