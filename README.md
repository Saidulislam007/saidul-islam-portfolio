# Saidul Islam — Full-Stack Developer Portfolio

A responsive, editorial-style developer portfolio showcasing my projects, technical skills, education, résumé, certification and contact details.

## Core technology

- **Next.js 16** — application framework
- **React 19** — reusable components and interactive UI
- **TypeScript** — type-safe development
- **HTML5 and CSS3**
- **Tailwind CSS 4** — styling foundation
- **Custom responsive CSS** — layout, colour, spacing and visual design

## UI and design

- **Lucide React** — interface icons
- CSS variables for the white, deep-green and amber colour system
- CSS gradients, shadows and glass effects
- Georgia serif and Arial sans-serif typography
- Responsive media queries for desktop, laptop, tablet and mobile devices

## Animation and interaction

The portfolio does not use Framer Motion. Its interactions are built with custom CSS and React:

- CSS keyframe animations
- React `useEffect` and `useState`
- Letter-by-letter `Saidul Islam` reveal
- Initial `SI` loading animation
- Custom animated cursor
- Scroll-reveal animation
- Project-card hover and 3D tilt effects
- Two-direction skills marquee
- Floating elements and rotating orbits
- Animated mobile navigation
- `prefers-reduced-motion` accessibility support

## Pages and structure

- Next.js App Router
- Reusable React components
- Home page
- All Projects page
- Contact page
- Responsive navigation menu
- Project content managed from a separate TypeScript data file
- Résumé and certificate PDFs
- Optimized WebP and PNG images

## Project structure

```text
Saidul-Islam-Portfolio/
├── public/                  # Images, résumé and certificate
├── src/
│   ├── app/
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # All Projects page
│   │   ├── globals.css     # Global styling and animations
│   │   ├── layout.tsx      # Root layout and metadata
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable interactive components
│   └── data/
│       └── projects.ts     # Project content and URLs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Run locally

Install Node.js 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
npm start
```

## Updating portfolio content

- Update project information and URLs in `src/data/projects.ts`.
- Replace project screenshots and profile images inside `public/` while keeping the filenames unchanged, or update their paths in the source.
- Edit page content in `src/app/page.tsx`, `src/app/projects/page.tsx` and `src/app/contact/page.tsx`.
- Update colours, responsiveness and animation rules in `src/app/globals.css`.

## Backend

This is currently a frontend/static portfolio application. Contact details are displayed directly and no form data is submitted to a backend or database.

## Portfolio summary

> My portfolio is built with Next.js, React, TypeScript, Tailwind CSS and custom CSS animations. It features a responsive editorial design, reusable components, interactive project showcases, custom cursor effects and optimized layouts across desktop and mobile devices.

## Author

**Saidul Islam**  
Full-Stack Web Developer — Khulna, Bangladesh

- [LinkedIn](https://www.linkedin.com/in/saidulislam007)
- [GitHub](https://github.com/Saidulislam007)
