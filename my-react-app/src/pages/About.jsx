import { Link } from 'react-router-dom'
import './About.css'

/* ── Data ────────────────────────────────────────────────────────────────────
   All content kept as plain data so any developer can update text without
   touching JSX structure.
   ─────────────────────────────────────────────────────────────────────────── */

const VMG = [
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      </svg>
    ),
    title: 'Our Vision',
    text: 'A Uganda where deaf girls and women enjoy equal rights, dignity, opportunities, inclusive services and meaningful participation.',
    dark: false,
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    title: 'Our Mission',
    text: 'To promote and protect the rights and dignity of deaf girls and women through inclusive, empowerment and evidence-informed interventions.',
    dark: false,
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
      </svg>
    ),
    title: 'Our Goal',
    text: 'To improve the quality of life of deaf girls and women by addressing their health, rights, protection, opportunities and participation.',
    dark: false,
  },
  {
    icon: null,
    title: 'Our Core Values',
    values: ['Inclusion', 'Respect', 'Empowerment', 'Integrity', 'Accountability', 'Solidarity'],
    dark: true,
  },
]

const OBJECTIVES = [
  'Promote accessible healthcare and SRHR information and services.',
  'Prevent and respond to GBV, abuse and exploitation.',
  'Support inclusive education and skills development.',
  'Promote economic empowerment and employment.',
  'Strengthen leadership and meaningful participation.',
  'Influence policy and practices through advocacy and research.',
  'Build strong partnerships and community engagement.',
]

const TEAM = [
  { name: 'Ikiriza Peace',       title: 'Co-Founder / Executive Director' },
  { name: 'Namyuyiga Ruth',      title: 'Co-Founder'                      },
  { name: 'Nabatanzi Josephine', title: 'Program Manager'                 },
  { name: 'Nakuwago Allen',      title: 'Outreach Coordinator'            },
]

/* ── Component ───────────────────────────────────────────────────────────── */

function About() {
  return (
    <main className="about">

      {/* ── Section 1: Page header band ─────────────────────────────────── */}
      <div className="page-header-band">
        <h1>About Us</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>About Us</span>
        </nav>
      </div>

      {/* ── Section 2: Who We Are ───────────────────────────────────────── */}
      <section className="who section section--white">
        <div className="container who__inner">

          <div className="who__text">
            <h2>Who We Are</h2>
            <p>
              Deaf Girls and Women Rights Network (DEGNET) is a women- and
              girl-led organisation established in 2023 and formally registered
              in 2025. We are headquartered in Maganjo, Wakiso District, Uganda.
            </p>
            <p>
              We coordinate and network with more than 17 associations of deaf
              women and girls across Uganda.
            </p>
          </div>

          {/* {{TEAM_GROUP_PHOTO}} — replace src with the real photo when available.
              Description: team of women in matching purple DEGNET t-shirts posed
              together, some giving a sign-language/hand gesture. */}
          <div className="who__image-wrap">
            <div className="who__image-placeholder" aria-label="Team group photo placeholder">
              <svg aria-hidden="true" width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <p>Team group photo coming soon</p>
              <span>Women in purple DEGNET t-shirts</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 3: Vision / Mission / Goal + Core Values ────────────── */}
      <section className="vmg section section--cream">
        <div className="container">

          <div className="section-header">
            <h2>What Drives Us</h2>
          </div>

          <div className="vmg__grid">
            {VMG.map((item) => (
              <div
                key={item.title}
                className={`card vmg__card${item.dark ? ' vmg__card--dark' : ''}`}
              >
                {item.icon && (
                  <div className="vmg__icon">{item.icon}</div>
                )}
                <h3 className="vmg__title">{item.title}</h3>

                {/* Light cards — single paragraph */}
                {item.text && (
                  <p className="vmg__text">{item.text}</p>
                )}

                {/* Dark card — bulleted core values list */}
                {item.values && (
                  <ul className="vmg__values">
                    {item.values.map((value) => (
                      <li key={value}>
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 4: Objectives + Leadership Team ─────────────────────── */}
      <section className="objectives section section--white">
        <div className="container objectives__inner">

          {/* Left — Objectives */}
          <div className="objectives__left">
            <h2>Our Objectives</h2>
            <ul className="objectives__list">
              {OBJECTIVES.map((obj) => (
                <li key={obj}>
                  <span className="objectives__check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Leadership Team */}
          <div className="objectives__right">
            <h2>Our Leadership Team</h2>

            <div className="team__grid">
              {TEAM.map((member) => (
                <div key={member.name} className="team__card">
                  {/* {{HEADSHOT_member.name}} — replace with real headshot photo */}
                  <div className="team__photo-placeholder" aria-label={`${member.name} headshot placeholder`}>
                    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__title">{member.title}</p>
                </div>
              ))}
            </div>

            <div className="team__cta">
              <Link to="/contact" className="btn-primary">
                Meet the Team
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

export default About
