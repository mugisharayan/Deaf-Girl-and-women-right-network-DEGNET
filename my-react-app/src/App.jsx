import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home     from './pages/Home'
import About    from './pages/About'
import OurWork  from './pages/OurWork'
import OurImpact from './pages/OurImpact'
import News     from './pages/News'
import Contact  from './pages/Contact'

/*
 * App — root component
 *
 * Defines the 6 routes for the DEGNET website.
 * Header and Footer will be added here in Prompt 1 so they appear
 * on every page without repeating them inside each page component.
 *
 * Routes:
 *   /             → Home
 *   /about        → About Us
 *   /our-work     → Our Work
 *   /our-impact   → Our Impact
 *   /news         → News & Stories
 *   /contact      → Contact Us
 */
function App() {
  return (
    <BrowserRouter>
      {/* Global Header goes here — Prompt 1 */}

      <Routes>
        <Route path="/"           element={<Home />}      />
        <Route path="/about"      element={<About />}     />
        <Route path="/our-work"   element={<OurWork />}   />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/news"       element={<News />}      />
        <Route path="/contact"    element={<Contact />}   />
      </Routes>

      {/* Global Footer goes here — Prompt 1 */}
    </BrowserRouter>
  )
}

export default App
