# DEGNET Website — AI Coding Assistant Prompts

**How to use this document:** Feed each numbered prompt to your AI coding assistant (Cursor, Claude Code, Windsurf, etc.) one at a time, in order. Prompt 0 sets up the design system so every later page stays consistent. Attach the three source files to your assistant's context before you start:

- `DEGNET_logo_and_name_transparent.jpg` — the official logo (transparent background)
- `fidelity_2.jpg` — the high-fidelity mockup showing all 6 pages + footer
- Reference site for color/theme inspiration: `https://csuganda.org/`

> ⚠️ **Important note on colors:** The mockup uses a deep maroon/burgundy as the primary color, a cream/off-white page background, a dark forest green and muted purple as secondary accents (matching the logo), and a gold/amber sunburst accent. Rather than guessing hex codes from a description, instruct your assistant (in Prompt 0) to **sample the exact pixel colors directly from `fidelity_2.jpg` and the logo file**, and to **inspect `csuganda.org`'s computed CSS** (via browser dev tools or by viewing page source/CSS) for spacing, font pairing, and layout rhythm. This guarantees pixel-accurate colors instead of approximated ones.

---

## Prompt 0 — Project Setup & Design System (run this first)

```
Set up a new multi-page website project for "DEGNET" (Deaf Girls and Women Rights Network).

STACK: [tell your assistant your preferred stack here, e.g. plain HTML/CSS/JS, React + Vite, or Next.js — the prompts below are stack-agnostic]

STEP 1 — Extract the design system:
1. Open the attached logo file `DEGNET_logo_and_name_transparent.jpg` and sample its exact colors:
   - The dark forest green used in the two taller silhouette figures
   - The muted purple used in the two shorter silhouette figures and the outlined hands
   - The gold/amber used in the sunburst rays
   - The red/pink used in the thin horizontal rule beneath the hands
   Store these as CSS custom properties: --degnet-green, --degnet-purple, --degnet-gold, --degnet-accent-line.
2. Open the attached `fidelity_2.jpg` mockup and sample:
   - The dominant deep maroon/burgundy used for the top utility bar, nav "DONATE" button, page-header bands, section headings' underline accents, and CTA banners → store as --degnet-primary (maroon).
   - The warm off-white/cream used as the general page background → store as --degnet-bg.
   - The white used for card backgrounds → --degnet-card-bg.
   - The dark charcoal/near-black used for body text and headings → --degnet-text.
   - Any muted gray used for secondary text → --degnet-text-muted.
3. Browse https://csuganda.org/ and inspect its stylesheet for: font families (heading + body), base font sizes, container max-width, border-radius scale used on cards/buttons, and box-shadow style on cards. Match that general rhythm and typographic feel (NOT its maroon/green colors necessarily — DEGNET's own sampled colors from step 1–2 take priority since the mockup is the source of truth for color).
4. Define a reusable design system: color variables, spacing scale, container max-width (~1280–1320px), card border-radius (~8–12px), button styles (filled primary = maroon bg/white text, outline secondary = maroon border/maroon text on transparent bg, both with a pill or slightly rounded rectangle shape matching the mockup), and a consistent card shadow (soft, low-opacity).

STEP 2 — Page shell:
Create the site scaffold with 6 routes/pages: Home (/), About Us (/about), Our Work (/our-work), Our Impact (/our-impact), News & Stories (/news), Contact Us (/contact). Every page shares the same global Header (utility bar + nav) and Footer described in Prompt 1.

Do not build any page content yet — this prompt is only for the design system, tokens, and page routing scaffold. Confirm the token list back to me before continuing.
```

---

## Prompt 1 — Global Header & Footer (used on every page)

```
Build the global Header and Footer components using the design tokens from Prompt 0. Reference the top strip of every screen in fidelity_2.jpg — the header is identical across all 6 pages, only the active nav link changes.

HEADER — two stacked bars:

1. Utility bar (top, full width, light background, small text, sits above the main nav):
   - Left side: a location pin icon + "Maganjo, Wakiso District, Uganda"
   - Center-left: a phone icon + "0776250273" (as a tel: link)
   - Center-right: an envelope icon + "deafgirlsandwomenrightsnetwork@gmail.com" (as a mailto: link)
   - Right side: 4 small circular social icons — Facebook, X (Twitter), Instagram, LinkedIn — each linking out (use "#" placeholder hrefs for now)

2. Main navigation bar (white/cream background, sits directly below the utility bar):
   - Left: the DEGNET logo (use the transparent logo file) at a small size, immediately followed by the wordmark stacked as two lines: "DEGNET" (bold, larger) and "Deaf Girls and Women Rights Network" (smaller, regular weight) — match the lockup shown top-left of every mockup screen.
   - Center/right: horizontal nav links in this exact order: Home, About Us, Our Work, Our Impact, Get Involved, News & Stories, Contact Us.
     - The active page's link should be visually distinguished (e.g. maroon color or underline) — see how each mockup screen highlights its own page (e.g. "About Us" is active/underlined on the About page).
   - Far right: a solid maroon pill/rounded-rectangle "DONATE" button in white uppercase text.
   - Make the nav sticky on scroll and collapse into a hamburger/mobile menu below ~1024px width, preserving the same link order and the Donate button inside the mobile drawer.

FOOTER — 4-column layout on a maroon/burgundy background with light/white text (see the bottom-right panel of fidelity_2.jpg for exact column structure):

   Column 1: DEGNET logo (white/light version or the transparent logo on the dark background) + wordmark, one short descriptive sentence: "DEGNET is a women- and girl-led organisation working for the rights, dignity and empowerment of deaf girls and women in Uganda." Below it, 4 small circular social icons (Facebook, X, Instagram, LinkedIn) in outlined/light style.

   Column 2 header "Quick Links": Home, About Us, Our Work, Our Impact, Get Involved, News & Stories, Contact Us — each as a link with a small chevron/arrow bullet.

   Column 3 header "Our Work Areas": Health, SRHR & HIV/AIDS; GBV, Protection & Safeguarding; Inclusive Education, Skills & Economic Empowerment; Advocacy, Policy, Research & Documentation.

   Column 4 header "Contact Us": 
     - Location icon + "Maganjo, Wakiso District, Uganda"
     - Phone icon + "0776250273"
     - Envelope icon + "deafgirlsandwomenrightsnetwork@gmail.com"

   Bottom bar (full width, thin divider line above it, centered/split text): 
   "© 2025 Deaf Girls and Women Rights Network (DEGNET). All rights reserved." on the left, and "Privacy Policy" / "Terms & Conditions" links on the right, separated by a small dot or pipe.

Make both Header and Footer fully responsive and reusable across all pages built in the next prompts.
```

---

## Prompt 2 — Home Page

```
Build the Home page (/) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's top-left screen section by section, in this exact order:

SECTION 1 — Hero:
- Two-column layout: text on the left, image on the right (stack vertically on mobile, image below text).
- Small uppercase eyebrow label above the headline, letter-spaced, maroon color: "WOMEN-LED. RIGHTS-BASED. INCLUSIVE."
- Large bold headline (largest text on the page): "Empowering Deaf Girls & Women." — style the words "Deaf Girls & Women" in the maroon primary color, the rest in dark text.
- Subheading directly below in a lighter/medium weight: "Defending rights. Building inclusive futures."
- Body paragraph: "We work with and for deaf girls and women to ensure equal rights, dignity, opportunities and meaningful participation."
- Two buttons side by side: filled maroon "LEARN MORE ABOUT US" (primary) and outline maroon "GET INVOLVED" (secondary).
- Right column: a rounded-corner photo showing three young women in purple DEGNET-branded t-shirts giving a thumbs-up/peace sign, smiling, outdoors. Use a placeholder image with that description (people, purple shirts, celebratory pose) until the real photo is supplied — leave a clearly marked `{{HERO_IMAGE}}` placeholder comment in the code so it's easy to swap.

SECTION 2 — Stats strip:
Directly below the hero, a horizontal band (white or very light card, slightly overlapping the hero on desktop) with 5 stat blocks, each a big bold maroon number + a small gray label beneath it, evenly spaced:
   17+  Associations Networked
   50+  Districts Reached
   10,000+  Lives Impacted
   200+  Community Champions
   100+  Programs Implemented
On mobile, wrap these into a 2-column or scrollable grid.

SECTION 3 — "Our Thematic Areas":
- Centered section heading "Our Thematic Areas".
- 4-column grid (stacks to 2-col then 1-col responsively) of cards, each with: a circular icon badge (maroon-tinted background, line icon), a bold title, a 1–2 sentence description, and a "Learn More →" text link at the bottom. Content for the 4 cards:
   1. Icon: heart/health. Title: "Health, SRHR & HIV/AIDS". Description: "Accessible healthcare, sexual and reproductive health, HIV, TB, malaria, mental health and menstrual health."
   2. Icon: shield. Title: "GBV, Protection & Safeguarding". Description: "Preventing violence, providing protection, safe reporting, support and legal aid for survivors."
   3. Icon: graduation cap. Title: "Inclusive Education, Skills & Economic Empowerment". Description: "Education, vocational skills, entrepreneurship, financial literacy and employment support."
   4. Icon: megaphone. Title: "Advocacy, Policy, Research & Documentation". Description: "Research, advocacy, policy engagement, campaigns and documentation."

SECTION 4 — "Latest News & Stories":
- Section heading left-aligned "Latest News & Stories" with a "VIEW ALL NEWS →" link aligned to the right of the heading (same row).
- 3-column grid of news cards (stacks responsively), each with: a top image, a maroon-colored date line (e.g. "May 12, 2025"), a bold headline, and a "Read More →" link. Use these 3 example items:
   1. Date: May 12, 2025 — "DEGNET participates in National Disability Week 2025"
   2. Date: April 30, 2025 — "Training on SRHR and Rights for Deaf Girls"
   3. Date: April 25, 2025 — "Empowering Deaf Women through Entrepreneurship"

SECTION 5 — Partners strip:
- Small centered heading "Our Partners".
- A horizontal logo row/carousel with left/right arrow controls showing partner logos: cbm, PLAN International, UN Women, UNAIDS, "Kingdom of the Netherlands". Use text-based or simple placeholder logo badges for each until real logo files are supplied.

SECTION 6 — CTA banner:
- Full-width maroon background band, white text, centered, with a small hands/care icon.
- Text: "Together, we can build an inclusive and equal society for all."
- Below it, a white/outline button "SUPPORT OUR WORK →".

Ensure spacing, alignment and card styles are consistent with the design tokens from Prompt 0.
```

---

## Prompt 3 — About Us Page

```
Build the About Us page (/about) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's top-middle screen section by section:

SECTION 1 — Page header band:
Full-width maroon band directly under the nav, centered white text: large title "About Us", and below it a small breadcrumb "Home > About Us" (with "Home" as a link and ">" as separator, "About Us" not a link/bold).

SECTION 2 — "Who We Are":
- Section heading "Who We Are".
- Two-column layout: text block on the left, a rounded-corner group photo on the right (a team of women in matching purple DEGNET t-shirts posed together, some giving a sign-language/hand gesture). Use a clearly labeled `{{TEAM_GROUP_PHOTO}}` placeholder image.
- Body copy (two short paragraphs):
   Paragraph 1: "Deaf Girls and Women Rights Network (DEGNET) is a women- and girl-led organisation established in 2023 and formally registered in 2025. We are headquartered in Maganjo, Wakiso District, Uganda."
   Paragraph 2: "We coordinate and network with more than 17 associations of deaf women and girls across Uganda."

SECTION 3 — Vision / Mission / Goal + Core Values:
- 4-column grid (3 light cards + 1 highlighted maroon card), stacking responsively:
   1. Icon (eye/heart) + heading "Our Vision" + text: "A Uganda where deaf girls and women enjoy equal rights, dignity, opportunities, inclusive services and meaningful participation."
   2. Icon (target/compass) + heading "Our Mission" + text: "To promote and protect the rights and dignity of deaf girls and women through inclusive, empowerment and evidence-informed interventions."
   3. Icon (flag) + heading "Our Goal" + text: "To improve the quality of life of deaf girls and women by addressing their health, rights, protection, opportunities and participation."
   4. Solid maroon background card, white text, heading "Our Core Values", bulleted list (each with a small checkmark/diamond bullet): Inclusion, Respect, Empowerment, Integrity, Accountability, Solidarity.

SECTION 4 — "Our Objectives":
- Two-column layout on this row: left column heading "Our Objectives" with a bulleted list (each item prefixed with a small circular icon/checkmark) listing:
   - Promote accessible healthcare and SRHR information and services.
   - Prevent and respond to GBV, abuse and exploitation.
   - Support inclusive education and skills development.
   - Promote economic empowerment and employment.
   - Strengthen leadership and meaningful participation.
   - Influence policy and practices through advocacy and research.
   - Build strong partnerships and community engagement.
- Right column: heading "Our Leadership Team" with a 2x2 grid of 4 circular/rounded team member photo cards, each with a name and title beneath, and a "MEET THE TEAM" maroon button below the grid. Team members:
   1. Ikiriza Peace — Co-Founder/Executive Director
   2. Namyuyiga Ruth — Co-Founder
   3. Nabatanzi Josephine — Program Manager
   4. Nakuwago Allen — Outreach Coordinator
   (Use clearly labeled placeholder headshot images for each until real photos are supplied.)

Keep card styles, spacing and colors consistent with Prompt 0's tokens.
```

---

## Prompt 4 — Our Work Page

```
Build the Our Work page (/our-work) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's top-right screen:

SECTION 1 — Page header band:
Same maroon header band pattern as the About page: title "Our Work", breadcrumb "Home > Our Work".

SECTION 2 — Intro line:
A short centered/left-aligned paragraph: "Our work is guided by four key thematic areas. We design and implement programs that address the unique needs of deaf girls and women."

SECTION 3 — Work areas list:
A vertical stack of 4 large content rows, alternating or consistently laid out as image-left/text-right (match the mockup's card style — each row is its own card with a photo on one side and text on the other), each with: a photo showing DEGNET staff/beneficiaries in purple shirts engaged in a related activity, a bold title, a 1–2 sentence description, and a "Learn More →" link. Content:
   1. "Health, SRHR & HIV/AIDS" — "We promote accessible healthcare and SRHR for deaf girls and women, including HIV, TB, malaria, mental health and menstrual health."
   2. "GBV, Protection & Safeguarding" — "We work to prevent gender-based violence and ensure protection services are accessible and confidential for deaf girls and women."
   3. "Inclusive Education, Skills & Economic Empowerment" — "We promote inclusive education, skills development and economic empowerment for sustainable independence."
   4. "Advocacy, Policy, Research & Documentation" — "We influence policy and practice through research, advocacy, documentation and strategic partnerships."

Use placeholder images labeled `{{WORK_AREA_1_IMAGE}}` through `{{WORK_AREA_4_IMAGE}}`. Keep card shadows, spacing and the maroon accent color consistent with Prompt 0.
```

---

## Prompt 5 — Our Impact Page

```
Build the Our Impact page (/our-impact) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's second-row-left screen:

SECTION 1 — Page header band:
Title "Our Impact", breadcrumb "Home > Our Impact".

SECTION 2 — Intro line:
Centered paragraph: "We are committed to creating lasting change in the lives of deaf girls and women. Here is the difference we are making together."

SECTION 3 — Stats row:
Same 5-stat pattern as the Home page stats strip, in individual bordered/light cards with an icon above each number this time:
   17+ Associations Networked | 50+ Districts Reached | 10,000+ Lives Impacted | 200+ Community Champions | 100+ Programs Implemented

SECTION 4 — "Our Impact Areas":
Section heading "Our Impact Areas", then a 5-column row (wraps responsively) of small icon + label + one-line description blocks:
   1. Health — "Improved access to accessible health services."
   2. Protection — "Stronger protection and safe referrals facilitated."
   3. Education & Skills — "Girls and women trained in education, digital and vocational skills."
   4. Economic — "Women empowered with business start-up and employment support."
   5. Leadership — "Young women trained in leadership and networks."

SECTION 5 — "Stories of Change":
A centered testimonial/quote carousel card: a circular or rounded photo of a young woman signing, a large quote mark, italic quote text: "DEGNET has given me knowledge, confidence and opportunities. I can now speak up for my rights and support other deaf girls." attributed to "— Amina, Youth Champion". Include left/right arrow controls and small dot pagination indicators beneath the card.

SECTION 6 — CTA banner:
Maroon full-width band, white centered text, small hands icon: "Be part of the movement for the rights and empowerment of deaf girls and women." with a white/outline button "GET INVOLVED TODAY →" beneath it.

Match spacing, icon style and color tokens from Prompt 0 throughout.
```

---

## Prompt 6 — News & Stories Page

```
Build the News & Stories page (/news) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's second-row-middle screen:

SECTION 1 — Page header band:
Title "News & Stories", breadcrumb "Home > News & Stories".

SECTION 2 — Filter tabs:
A horizontal row of pill-shaped filter tabs directly below the header band: "All" (active/selected style — filled maroon), "News", "Stories", "Events", "Resources" (inactive style — outline or plain text). Make these functional client-side filters if the stack supports it (filtering the grid below by category), otherwise static UI is fine for now.

SECTION 3 — News grid:
A 3-column grid (2 rows of 3 = 6 items, responsive down to 1 column on mobile) of cards, each with a top image, a small maroon date line, a bold title, and a "Read More →" link. Use these 6 items:
   1. May 12, 2025 — "DEGNET joins call for inclusive healthcare for all"
   2. May 2, 2025 — "Community dialogue on GBV prevention"
   3. April 30, 2025 — "Young Deaf Women leaders share CSW journeys"
   4. April 11, 2025 — "Vocational training empowers more deaf girls"
   5. April 7, 2025 — "Menstrual health awareness campaign in schools"
   6. April 3, 2025 — "World Health Day: Accessible health for all"

SECTION 4 — Load more / pagination:
Centered maroon outline button beneath the grid: "VIEW ALL NEWS & STORIES →" (or implement real pagination if the stack supports it).

Match card proportions, image aspect ratio, and spacing to the other card grids already built on Home/Our Work.
```

---

## Prompt 7 — Contact Us Page

```
Build the Contact Us page (/contact) using the Header and Footer from Prompt 1. Match fidelity_2.jpg's second-row-right screen:

SECTION 1 — Page header band:
Title "Contact Us", breadcrumb "Home > Contact Us".

SECTION 2 — Two-column layout:

LEFT COLUMN — Contact info cards, stacked vertically, each a light card with a circular maroon icon badge on the left and text on the right:
   1. Icon: map pin. Label: "Our Location". Value: "Maganjo, Wakiso District, Uganda".
   2. Icon: phone. Label: "Phone". Value: "0776250273".
   3. Icon: envelope. Label: "Email". Value: "deafgirlsandwomenrightsnetwork@gmail.com".
Below the three cards, a "Follow Us" heading with 4 circular social icons (Facebook, X, Instagram, LinkedIn).

RIGHT COLUMN — Contact form card (white card, soft shadow) with heading, and these fields stacked vertically:
   - "Your Name" (text input)
   - "Your Email" (email input)
   - "Subject" (text input)
   - "Your Message" (multi-line textarea, larger height)
   - A full-width or right-aligned maroon "SEND MESSAGE" button beneath the fields.
Wire up basic client-side validation (required fields, valid email format) and a placeholder submit handler (e.g. console.log or a mailto: fallback) — leave a clear `{{FORM_SUBMIT_HANDLER}}` comment for wiring to a real backend/email service later.

Match the card and input styling (border radius, focus states in maroon) to the design tokens from Prompt 0.
```

---

## Prompt 8 — Email Signature (HTML block, not a webpage)

```
Build a standalone HTML email signature block (a self-contained table-based HTML snippet suitable for pasting into Gmail/Outlook — not a webpage, no external CSS files, all styles inline since email clients strip <style> tags) that follows the exact layout of the reference screenshot (a name, title/role pill, organisation contact block, logo, and social icons side by side), but with this content:

- Name (bold, larger): Ikiriza Peace
- Role pill/badge (small rounded background tag beneath or beside the name): Co-Founder/Executive Director
- Organisation line: Deaf Girls and Women Rights Network
- Address: use the location shown on the DEGNET logo/letterhead — "Maganjo, Wakiso District, Uganda"
- Email: deafgirlsandwomenrightsnetwork@gmail.com
- Phone: 0776250273
- Logo: the attached DEGNET transparent logo, sized small (~60-70px tall) to the left of or beside the text block, matching the reference's logo placement.
- 4 small circular social icons (Facebook, Instagram, LinkedIn, X) in a row, using the DEGNET brand colors (maroon/green/purple) for the icon backgrounds instead of the reference's pink/red tones.
- Use a thin vertical divider line between the contact-details block and the social icons, matching the reference layout.

Output the final result as a single copy-pasteable HTML block, and also confirm it renders correctly with inline styles only (no <style> tag, no external stylesheet, no flexbox — use an HTML <table> layout for maximum email client compatibility).
```

---

## Prompt 9 — Final Consistency Pass (run last)

```
Do a full pass across all 6 pages (Home, About Us, Our Work, Our Impact, News & Stories, Contact Us) and check:

1. The Header and Footer are pixel-consistent on every page (same logo size, same nav order, same footer columns).
2. The maroon primary color, cream background, and card styles from Prompt 0's design tokens are used consistently everywhere — no page introduces a new ad-hoc color.
3. Every button follows the same two variants: filled maroon primary, outline maroon secondary — no third button style has crept in anywhere.
4. All breadcrumb bands use the same maroon band + "Home > [Page]" pattern.
5. All card grids (thematic areas, news, work areas, team) share the same border-radius, shadow, and spacing scale.
6. Typography scale (H1/H2/H3/body/small) is consistent across pages.
7. The site is fully responsive at mobile (~375px), tablet (~768px), and desktop (~1280px+) breakpoints, matching how the hero/stat/card grids described in each prompt should reflow.
8. Every placeholder image/content comment (`{{HERO_IMAGE}}`, `{{TEAM_GROUP_PHOTO}}`, `{{WORK_AREA_1_IMAGE}}` etc.) is still clearly marked so real photos can be dropped in later.

Report back any inconsistencies you find and fix them.
```
