import { useState } from 'react'
import { Link } from 'react-router-dom'
import './News.css'

/* ── Data ─────────────────────────────────────────────────────────────────── */

const CATEGORIES = ['All', 'News', 'Stories', 'Events', 'Resources']

const NEWS_ITEMS = [
  {
    date: 'May 12, 2025',
    title: 'DEGNET joins call for inclusive healthcare for all',
    category: 'News',
  },
  {
    date: 'May 2, 2025',
    title: 'Community dialogue on GBV prevention',
    category: 'Events',
  },
  {
    date: 'April 30, 2025',
    title: 'Young Deaf Women leaders share CSW journeys',
    category: 'Stories',
  },
  {
    date: 'April 11, 2025',
    title: 'Vocational training empowers more deaf girls',
    category: 'News',
  },
  {
    date: 'April 7, 2025',
    title: 'Menstrual health awareness campaign in schools',
    category: 'News',
  },
  {
    date: 'April 3, 2025',
    title: 'World Health Day: Accessible health for all',
    category: 'Resources',
  },
]

/* ── Component ───────────────────────────────────────────────────────────── */

function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  /* Client-side filter — shows all items when 'All' is selected */
  const filtered =
    activeCategory === 'All'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <main className="news-page">

      {/* ── Section 1: Page header band ─────────────────────────────────── */}
      <div className="page-header-band">
        <h1>News &amp; Stories</h1>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span>News &amp; Stories</span>
        </nav>
      </div>

      {/* ── Section 2: Filter tabs ──────────────────────────────────────── */}
      <section className="news-filters section--white">
        <div className="container">
          <div className="news-filters__tabs" role="tablist" aria-label="Filter news by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={cat === activeCategory}
                className={`news-filters__tab${cat === activeCategory ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: News grid ────────────────────────────────────────── */}
      <section className="news-grid-section section section--cream">
        <div className="container">

          {filtered.length > 0 ? (
            <div className="news-grid">
              {filtered.map((item) => (
                <div key={item.title} className="card news-card">
                  {/* {{NEWS_IMAGE}} — replace with real photo when available */}
                  <div className="news-card__image-placeholder" aria-label="News image placeholder">
                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span className="news-card__date">{item.date}</span>
                      <span className="news-card__category">{item.category}</span>
                    </div>
                    <h3 className="news-card__title">{item.title}</h3>
                    <Link to="/news" className="news-card__link">
                      Read More
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="news-grid__empty">
              No items found in this category yet.
            </p>
          )}

        </div>
      </section>

      {/* ── Section 4: Load more ────────────────────────────────────────── */}
      <section className="news-more section--white">
        <div className="container news-more__inner">
          {/* {{PAGINATION}} — wire up real pagination or API call here */}
          <button className="btn-secondary">
            View All News &amp; Stories
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </button>
        </div>
      </section>

    </main>
  )
}

export default News
