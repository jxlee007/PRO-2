# 📷 Creator Store & Portfolio Website

A premium, highly interactive e-commerce storefront and digital portfolio designed for content creators, photographers, and filmmakers. Inspired by the clean, moody aesthetic of modern creator brands, this website showcases and sells both digital and physical products.

Live URL: [https://jxlee007.github.io/PRO-2](https://jxlee007.github.io/PRO-2)

---

## 🚀 Key Features

- **Premium Creator Aesthetic**: A refined dark theme featuring smooth transitions, glassmorphic accents, and clean layout patterns centered on high-quality visual content.
- **Dynamic Interaction Components**:
  - **Interactive Before/After Sliders**: Users can drag to compare raw versus edited images (built as `<BeforeAfterSlider.astro>`).
  - **Parallax Layout**: Immersive parallax scrolling effects for landing showcases and main sections.
  - **Media Gallery**: High-performance, responsive image and video grid systems.
- **Robust Storefront & Categories**:
  - **Digital Assets**: Lightroom presets, cinematic video LUTs, sound effects packs, and motion graphics.
  - **Physical Gear**: Specialized photographer toolkits, signature lens identification decals, and limited-edition fine art prints.
- **Dynamic Product Pages**: Dedicated pages per product collection with specific options (e.g. 1080p vs. 4K), interactive sliders, instructions accordions, and warning callouts.
- **Persistent Shopping Cart**: A client-side slide-out drawer cart powered by browser `localStorage` allowing users to add, edit quantities, and track cart totals.
- **Mobile-Responsive Navigation**: Adaptive header navigation with custom hover drop-downs on desktop and a slide-down full-screen overlay menu on mobile and tablet screens.

---

## 🛠️ Technology Stack

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation / Hybrid Rendering)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **State Management**: Vanilla JavaScript (client-side persistence in LocalStorage)
- **Typography**: Nunito Sans (Google Fonts) with setup for self-hosting local font files.

---

## 📂 Project Structure

Below is an overview of the core project structure:

```text
PRO-2/
├── public/                     # Static assets (images, logos, etc.)
│   └── images/
│       ├── digisign/           # Brand logo variations
│       ├── tools/              # Product hero/gallery images
│       └── thumb-gallery/      # Print portfolio collection thumbs
├── src/
│   ├── assets/                 # SVGs and component assets
│   ├── components/             # Reusable UI Blocks
│   │   ├── BeforeAfterSlider   # Draggable image comparison slider
│   │   ├── Cart                # LocalStorage-backed shopping cart drawer
│   │   ├── Footer              # Global website footer
│   │   ├── Gallery             # Photo grid showcase
│   │   ├── Link                # Base-aware anchor navigation wrapper
│   │   └── Nav                 # Desktop dropdown and mobile overlay navigation
│   ├── layouts/                # Page Layout Wrappers
│   │   ├── Layout.astro        # Base shell layout (HTML, Meta, SEO, Fonts)
│   │   └── Parallax.astro      # Custom parallax scroll wrapper
│   ├── lib/                    # Data models and utility functions
│   │   ├── prints.ts           # Limited edition prints database & metadata
│   │   ├── tools.ts            # Creator gear and preset packs catalog database
│   │   └── utils.ts            # Path base helpers & utility methods
│   ├── pages/                  # Page Routing (Astro file-system router)
│   │   ├── shop/
│   │   │   ├── [slug].astro    # Dynamic routes for storefront categorizations
│   │   │   └── products.js     # Shop front page metadata & layout configuration
│   │   ├── prints/
│   │   │   └── [slug].astro    # Dynamic limited-edition fine art print detail views
│   │   ├── products/
│   │   │   └── [slug].astro    # Dynamic creator gear and digital asset detail views
│   │   ├── about.astro         # About the creator page
│   │   ├── collabs.astro       # Partnerships and collaborations page
│   │   ├── contact.astro       # Contact form & newsletter subscription page
│   │   ├── index.astro         # Main entry landing page (Parallax + Nav)
│   │   ├── prints.astro        # Fine art prints gallery index
│   │   └── shop.astro          # Creator shop collection grid
│   └── styles/
│       └── global.css          # Tailwind directives, animations, and typography styles
├── astro.config.mjs            # Astro configuration (base path: `/PRO-2/`)
├── tailwind.config.cjs         # Tailwind utility styling configuration
└── package.json                # Project dependencies and script tasks
```

---

## 🧞 Developer Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds your production-ready static site to `./dist/` |
| `npm run preview` | Previews the production build locally prior to deploy |
| `npm run astro ...` | Runs CLI commands like `astro add` or `astro check` |
