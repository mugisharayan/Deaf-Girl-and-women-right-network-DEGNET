import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

/* ── Initial form state ───────────────────────────────────────────────────── */
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

/* ── Component ───────────────────────────────────────────────────────────── */

function Contact() {
  const [form, setForm]       = useState(EMPTY_FORM)
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  /* ── Validation ─────────────────────────────────────────────────────── */
  function validate(fields) {
    const errs = {}
    if (!fields.name.trim())    errs.name    = 'Your name is required.'
    if (!fields.email.trim())   errs.email   = 'Your email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                errs.email   = 'Please enter a valid email address.'
    if (!fields.subject.trim()) errs.subject = 'A subject is required.'
    if (!fields.message.trim()) errs.message = 'Your message is required.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    /* Clear the error for this field as the user types */
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    /*
     * {{FORM_SUBMIT_HANDLER}}
     * Replace the console.log below with your real submission logic, e.g.:
     *   - fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
     *   - EmailJS / Formspree / Netlify Forms integration
     *   - window.location.href = `mailto:...?subject=...&body=...`
     */
    console.log('Contact form submitted:', form)

    setSubmitted(true)
    setForm(EMPTY_FORM)
    setErrors({})
  }

  return (
    <main className="contact-page">

      {/* ── Section 1: Page header band ─────────────────────────────────── */}
      <div className="page-header-band">
        <h1>Contact Us</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>Contact Us</span>
        </nav>
      </div>

      {/* ── Section 2: Two-column layout ────────────────────────────────── */}
      <section className="contact section section--white">
        <div className="container contact__inner">

          {/* ── Left column — contact info + social ─────────────────────── */}
          <div className="contact__info">

            <div className="contact-card card">
              <div className="contact-card__icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__label">Our Location</h3>
                <p className="contact-card__value">Maganjo, Wakiso District, Uganda</p>
              </div>
            </div>

            <div className="contact-card card">
              <div className="contact-card__icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__label">Phone</h3>
                <a href="tel:+256776250273" className="contact-card__value contact-card__link">
                  0776250273
                </a>
              </div>
            </div>

            <div className="contact-card card">
              <div className="contact-card__icon">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact-card__label">Email</h3>
                <a
                  href="mailto:deafgirlsandwomenrightsnetwork@gmail.com"
                  className="contact-card__value contact-card__link"
                >
                  deafgirlsandwomenrightsnetwork@gmail.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="contact__social">
              <h3 className="contact__social-heading">Follow Us</h3>
              <div className="contact__social-icons">
                <a href="#" aria-label="Facebook" className="contact__social-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="contact__social-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="contact__social-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="contact__social-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ── Right column — contact form ──────────────────────────────── */}
          <div className="contact__form-wrap card">

            <h2 className="contact__form-heading">Send Us a Message</h2>

            {submitted && (
              <div className="contact__success" role="alert">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Thank you! Your message has been received. We will get back to you shortly.
              </div>
            )}

            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              <div className="form-field">
                <label htmlFor="name" className="form-field__label">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`form-field__input${errors.name ? ' is-error' : ''}`}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  autoComplete="name"
                />
                {errors.name && <span className="form-field__error" role="alert">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-field__label">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-field__input${errors.email ? ' is-error' : ''}`}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@example.com"
                  autoComplete="email"
                />
                {errors.email && <span className="form-field__error" role="alert">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="form-field__label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={`form-field__input${errors.subject ? ' is-error' : ''}`}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Partnership inquiry"
                />
                {errors.subject && <span className="form-field__error" role="alert">{errors.subject}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-field__label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={`form-field__input form-field__textarea${errors.message ? ' is-error' : ''}`}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />
                {errors.message && <span className="form-field__error" role="alert">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary contact__submit">
                Send Message
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
