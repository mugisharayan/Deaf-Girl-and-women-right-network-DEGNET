import { useState } from 'react'
import { Link } from 'react-router-dom'
import './OurImpact.css'

/* ── Data ─────────────────────────────────────────────────────────────────── */

const STATS = [
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    number: '17+',
    label: 'Associations Networked',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    number: '50+',
    label: 'Districts Reached',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    number: '10,000+',
    label: 'Lives Impacted',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    number: '200+',
    label: 'Community Champions',
  },
  {
    icon: (
      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
      </svg>
    ),
    number: '100+',
    label: 'Programs Implemented',
  },
]

const IMPACT_AREAS = [
  {
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    label: 'Health',
    description: 'Improved access to accessible health services.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    label: 'Protection',
    description: 'Stronger protection and safe referrals facilitated.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
    label: 'Education & Skills',
    description: 'Girls and women trained in education, digital and vocational skills.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    label: 'Economic',
    description: 'Women empowered with business start-up and employment support.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: 'Leadership',
    description: 'Young women trained in leadership and networks.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'DEGNET has given me knowledge, confidence and opportunities. I can now speak up for my rights and support other deaf girls.',
    author: 'Amina',
    role: 'Youth Champion',
  },
  {
    quote:
      'Before DEGNET, I had no access to health information in sign language. Now I understand my rights and can advocate for myself.',
    author: 'Sarah',
    role: 'Community Member',
  },
  {
    quote:
      'The vocational training I received through DEGNET helped me start my own business. I am now financially independent.',
    author: 'Grace',
    role: 'Program Beneficiary',
  },
]

/* ── Component ───────────────────────────────────────────────────────────── */

function OurImpact() {
  const [activeSlide, setActiveSlide] = useState(0)

  function prevSlide() {
    setActiveSlide((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  function nextSlide() {
    setActiveSlide((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const testimonial = TESTIMONIALS[activeSlide]

  return (
    <main className="our-impact">

      {/* ── Section 1: Page header band ─────────────────────────────────── */}
      <div className="page-header-band">
        <h1>Our Impact</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Our Impact</span>
        </nav>
      </div>

      {/* ── Section 2: Intro ────────────────────────────────────────────── */}
      <section className="impact-intro section section--white">
        <div className="container">
          <p className="impact-intro__text">
            We are committed to creating lasting change in the lives of deaf
            girls and women. Here is the difference we are making together.
          </p>
        </div>
      </section>

      {/* ── Section 3: Stats row ────────────────────────────────────────── */}
      <section className="impact-stats section section--cream">
        <div className="container impact-stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="card impact-stats__card">
              <div className="impact-stats__icon">{stat.icon}</div>
              <span className="impact-stats__number">{stat.number}</span>
              <span className="impact-stats__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Impact Areas ─────────────────────────────────────── */}
      <section className="impact-areas section section--white">
        <div className="container">

          <div className="section-header">
            <h2>Our Impact Areas</h2>
          </div>

          <div className="impact-areas__grid">
            {IMPACT_AREAS.map((area) => (
              <div key={area.label} className="card impact-areas__card">
                <div className="impact-areas__icon">{area.icon}</div>
                <h3 className="impact-areas__label">{area.label}</h3>
                <p className="impact-areas__desc">{area.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 5: Stories of Change (testimonial carousel) ─────────── */}
      <section className="stories section section--cream">
        <div className="container">

          <div className="section-header">
            <h2>Stories of Change</h2>
          </div>

          <div className="stories__carousel">

            <button
              className="stories__arrow stories__arrow--prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
              </svg>
            </button>

            <div className="stories__card card">
              {/* {{TESTIMONIAL_PHOTO}} — replace with real circular photo */}
              <div className="stories__photo-placeholder" aria-label="Testimonial photo placeholder">
                <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>

              <div className="stories__quote-mark" aria-hidden="true">&ldquo;</div>

              <blockquote className="stories__quote">
                <p>{testimonial.quote}</p>
                <footer className="stories__author">
                  — {testimonial.author}, <cite>{testimonial.role}</cite>
                </footer>
              </blockquote>
            </div>

            <button
              className="stories__arrow stories__arrow--next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>

          </div>

          {/* Dot pagination */}
          <div className="stories__dots" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Testimonial ${i + 1}`}
                className={`stories__dot${i === activeSlide ? ' is-active' : ''}`}
                onClick={() => setActiveSlide(i)}
              />
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
            Be part of the movement for the <b>rights and empowerment</b> of deaf girls and women.
          </h2>
          <Link to="/contact" className="btn-secondary cta__btn">
            Get Involved Today
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}

export default OurImpact
