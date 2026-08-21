import { Link } from 'react-router-dom'
import './OurWork.css'

/* ── Data ────────────────────────────────────────────────────────────────────
   Each work area has a placeholder label for the image so developers know
   exactly which photo to drop in when real assets are supplied.
   ─────────────────────────────────────────────────────────────────────────── */

const WORK_AREAS = [
  {
    number: '01',
    title: 'Health, SRHR & HIV/AIDS',
    description:
      'We promote accessible healthcare and SRHR for deaf girls and women, including HIV, TB, malaria, mental health and menstrual health.',
    /* {{WORK_AREA_1_IMAGE}} — replace placeholder with real photo.
       Description: DEGNET staff/beneficiaries in purple shirts at a health
       outreach or clinic session. */
    imagePlaceholder: 'WORK_AREA_1_IMAGE',
    imageDesc: 'Health outreach session',
    link: '/contact',
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'GBV, Protection & Safeguarding',
    description:
      'We work to prevent gender-based violence and ensure protection services are accessible and confidential for deaf girls and women.',
    /* {{WORK_AREA_2_IMAGE}} — replace placeholder with real photo.
       Description: DEGNET staff in purple shirts at a community protection
       or awareness session. */
    imagePlaceholder: 'WORK_AREA_2_IMAGE',
    imageDesc: 'GBV protection session',
    link: '/contact',
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Inclusive Education, Skills & Economic Empowerment',
    description:
      'We promote inclusive education, skills development and economic empowerment for sustainable independence.',
    /* {{WORK_AREA_3_IMAGE}} — replace placeholder with real photo.
       Description: DEGNET beneficiaries in a vocational training or
       classroom setting. */
    imagePlaceholder: 'WORK_AREA_3_IMAGE',
    imageDesc: 'Vocational training session',
    link: '/contact',
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Advocacy, Policy, Research & Documentation',
    description:
      'We influence policy and practice through research, advocacy, documentation and strategic partnerships.',
    /* {{WORK_AREA_4_IMAGE}} — replace placeholder with real photo.
       Description: DEGNET staff at a policy forum, conference or
       documentation activity. */
    imagePlaceholder: 'WORK_AREA_4_IMAGE',
    imageDesc: 'Advocacy and policy forum',
    link: '/contact',
    icon: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
      </svg>
    ),
  },
]

/* ── Component ───────────────────────────────────────────────────────────── */

function OurWork() {
  return (
    <main className="our-work">

      {/* ── Section 1: Page header band ─────────────────────────────────── */}
      <div className="page-header-band">
        <h1>Our Work</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Our Work</span>
        </nav>
      </div>

      {/* ── Section 2: Intro ────────────────────────────────────────────── */}
      <section className="work-intro section section--white">
        <div className="container work-intro__inner">
          <p className="work-intro__text">
            Our work is guided by four key thematic areas. We design and
            implement programs that address the unique needs of deaf girls
            and women.
          </p>
        </div>
      </section>

      {/* ── Section 3: Work areas ───────────────────────────────────────── */}
      <section className="work-areas section section--cream">
        <div className="container">
          <div className="work-areas__list">
            {WORK_AREAS.map((area, index) => (
              /*
               * Alternate layout: even rows → image left / text right
               *                   odd rows  → text left / image right
               * The CSS class .work-area--reverse handles the flip.
               */
              <div
                key={area.number}
                className={`card work-area${index % 2 !== 0 ? ' work-area--reverse' : ''}`}
              >
                {/* Image side */}
                <div className="work-area__image-wrap">
                  {/* {{area.imagePlaceholder}} — swap div for <img> when real photo arrives */}
                  <div
                    className="work-area__image-placeholder"
                    aria-label={`${area.title} photo placeholder`}
                  >
                    <div className="work-area__placeholder-icon">
                      {area.icon}
                    </div>
                    <p>{area.imageDesc}</p>
                    <span>{`{{${area.imagePlaceholder}}}`}</span>
                  </div>
                </div>

                {/* Text side */}
                <div className="work-area__text">
                  <span className="work-area__number">{area.number}</span>
                  <h2 className="work-area__title">{area.title}</h2>
                  <p className="work-area__desc">{area.description}</p>
                  <Link to={area.link} className="work-area__link">
                    Learn More
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

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
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
            Get Involved
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}

export default OurWork
