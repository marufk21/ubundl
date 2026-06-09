# Unbundl — Whistle Aligners Landing Page

A fully responsive landing page for **Whistle Aligners**, an invisible teeth aligner product. Built to match the Figma design at 1440px desktop width, with responsive breakpoints for tablet and mobile.

## Setup

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview

# Run ESLint
npm run lint
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 8 |
| **Styling** | Plain CSS (no UI libraries) |
| **Linting** | ESLint |
| **Fonts** | Montserrat 800, Instrument Sans 400-700, Anybody 800 (Google Fonts) |

## API

The testimonials section ("Happy Smilers!") fetches user data from the **[DummyJSON Users API](https://dummyjson.com/users)**:

```
GET https://dummyjson.com/users
```

The component slices the first 6 results and renders them as horizontally scrollable profile cards. Loading, error, and empty states are all handled — a CSS spinner shows while fetching, and a human-readable error message is displayed if the request fails.

## Project Structure

```
unbundl/
├── src/
│   ├── App.tsx                    # Root component — composes all sections
│   ├── main.tsx                   # ReactDOM entry point
│   ├── styles.css                 # Global stylesheet (design tokens, all component CSS)
│   ├── assets/
│   │   ├── img/                   # Static images (hero, navbar icons)
│   │   └── icons/                 # SVG icons (social, phone, mail)
│   └── components/
│       ├── home.tsx               # Hero, Quiz Banner, Booking Form, Clove Banner, Offer Banner
│       ├── happy.tsx              # Testimonials carousel (API-driven)
│       ├── faq.tsx                # FAQ accordion + Happy + Sticky CTA composition
│       ├── doctor-led.tsx         # Doctor-led section
│       ├── navbar.tsx             # Header with logo, phone, announcement bar
│       ├── sticky-cta.tsx         # Fixed bottom CTA bar
│       └── footer.tsx             # Quick Links, Contact, Social, Legal
└── public/
    └── screenshots/               # Figma reference screenshots
```

## Approach

Each page section is a self-contained functional component using React functional hooks, local state and side effects. All styles live in a single CSS file built on CSS custom properties (design tokens) so colours, spacing, and typography stay consistent and are easy to tweak. Responsiveness is handled with three breakpoint tiers (1024px, 768px, 480px) — the layout collapses from multi-column grids to single-column stacks, fonts and buttons scale down, and form fields reflow for smaller screens. The only external data dependency is the DummyJSON users endpoint; everything else is static content derived from the Figma reference.
