import { Link } from 'react-router-dom'
import './Home.css'

/* ── Data ────────────────────────────────────────────────────────────────────
   Keeping content as plain data arrays makes it easy for any developer
   to update text without touching JSX structure.
   ─────────────────────────────────────────────────────────────────────────── */

const STATS = [
  { number: '17+',    label: 'Associations Networked'  },
  { number: '50+',    label: 'Districts Reached'        },
  { number: '10,000+',label: 'Lives Impacted'           },
  { number: '200+',   label: 'Community Champions'      },
  { number: '100+',   label: 'Programs Implemented'     },
]

const THEMATIC_AREAS = [
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    title: 'Health, SRHR & HIV/AIDS',
    description: 'Accessible healthcare, sexual and reproductive health, HIV, TB, malaria, mental health and menstrual health.',
    link: '/our-work',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    title: 'GBV, Protection & Safeguarding',
    description: 'Preventing violence, providing protection, safe reporting, support and legal aid for survivors.',
    link: '/our-work',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
    title: 'Inclusive Education, Skills & Economic Empowerment',
    description: 'Education, vocational skills, entrepreneurship, financial literacy and employment support.',
    link: '/our-work',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
      </svg>
    ),
    title: 'Advocacy, Policy, Research & Documentation',
    description: 'Research, advocacy, policy engagement, campaigns and documentation.',
    link: '/our-work',
  },
]

const NEWS_ITEMS = [
  {
    date: 'May 12, 2025',
    title: 'DEGNET participates in National Disability Week 2025',
    link: '/news',
  },
  {
    date: 'April 30, 2025',
    title: 'Training on SRHR and Rights for Deaf Girls',
    link: '/news',
  },
  {
    date: 'April 25, 2025',
    title: 'Empowering Deaf Women through Entrepreneurship',
    link: '/news',
  },
]

const PARTNERS = [
  'CBM',
  'PLAN International',
  'UN Women',
  'UNAIDS',
  'Kingdom of the Netherlands',
]

/* ── Component ───────────────────────────────────────────────────────────── */

function Home() {
  return (
    <main className="home">

      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section className="hero section section--white">
        <div className="container hero__inner">

          <div className="hero__text">
            <p className="hero__eyebrow">Women-Led. Rights-Based. Inclusive.</p>

            <h1 className="hero__heading">
              Empowering <b>Deaf Girls &amp; Women.</b>
            </h1>

            <p className="hero__subheading">
              Defending rights. Building inclusive futures.
            </p>

            <p className="hero__body">
              We work with and for deaf girls and women to ensure equal rights,
              dignity, opportunities and meaningful participation.
            </p>

            <div className="hero__actions">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Involved
              </Link>
            </div>
          </div>

          {/* {{HERO_IMAGE}} — replace src with the real photo when available.
              Description: three young women in purple DEGNET-branded t-shirts,
              giving a thumbs-up/peace sign, smiling, outdoors. */}
          <div className="hero__image-wrap">
            <div className="hero__image-placeholder" aria-label="Hero image placeholder">
              <svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              <p>Hero photo coming soon</p>
              <span>Three women in purple DEGNET t-shirts</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Stats strip ──────────────────────────────────────── */}
      <section className="stats section--tint">
        <div className="container stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stats__item">
              <span className="stats__number">{stat.number}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Thematic Areas ───────────────────────────────────── */}
      <section className="thematic section section--white">
        <div className="container">

          <div className="section-header">
            <h2>Our Thematic Areas</h2>
            <p>Four key areas guiding our work with deaf girls and women across Uganda.</p>
          </div>

          <div className="thematic__grid">
            {THEMATIC_AREAS.map((area) => (
              <div key={area.title} className="card thematic__card">
                <div className="thematic__icon">{area.icon}</div>
                <h3 className="thematic__title">{area.title}</h3>
                <p className="thematic__desc">{area.description}</p>
                <Link to={area.link} className="thematic__link">
                  Learn More
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 4: Latest News ──────────────────────────────────────── */}
      <section className="news section section--cream">
        <div className="container">

          <div className="section-header section-header--row">
            <h2>Latest News &amp; Stories</h2>
            <Link to="/news" className="section-header__link">
              View All News
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </Link>
          </div>

          <div className="news__grid">
            {NEWS_ITEMS.map((item) => (
              <div key={item.title} className="card news__card">
                {/* {{NEWS_IMAGE}} — replace with real news photo when available */}
                <div className="news__image-placeholder" aria-label="News image placeholder">
                  <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
                <div className="news__body">
                  <span className="news__date">{item.date}</span>
                  <h3 className="news__title">{item.title}</h3>
                  <Link to={item.link} className="thematic__link">
                    Read More
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 5: Partners ─────────────────────────────────────────── */}
      <section className="partners section section--white">
        <div className="container">

          <div className="section-header">
            <h2>Our Partners</h2>
          </div>

          <div className="partners__row">
            {PARTNERS.map((partner) => (
              <div key={partner} className="partners__badge">
                {partner}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 6: CTA Banner ───────────────────────────────────────── */}
      <section className="cta section section--dark">
        <div className="container cta__inner">

          <div className="cta__icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
            </svg>
          </div>

          <h2 className="cta__heading">
            Together, we can build an <b>inclusive and equal society</b> for all.
          </h2>

          <Link to="/contact" className="btn-secondary cta__btn">
            Support Our Work
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Home
