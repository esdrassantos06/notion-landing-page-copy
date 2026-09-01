# Notion Landing Page Clone

A rebuild of Notion's homepage from scratch: navigation with the hover dropdowns, hero section, the "trusted by teams" logo strip, and the responsive behaviour down to mobile. Static copy of the design, no Notion API and no real signup.

I built it to get familiar with the Next.js 15 App Router and Tailwind 4, and a page I could compare side by side against the original was a better exercise than inventing a layout.

## Running it

Node 18.18 or newer.

```bash
git clone https://github.com/esdrassantos06/notion-landing-page-copy.git
cd notion-landing-page-copy
npm install
npm run dev
```

http://localhost:3000.

## Stack

Next.js 15 (App Router, Turbopack in dev), React 19, TypeScript, Tailwind 4, Phosphor Icons.

## Structure

```
src/
├── app/
│   ├── globals.css        theme variables live here
│   └── page.tsx           the whole landing page
└── components/
    ├── LayoutComponent.tsx
    ├── header.tsx
    ├── dropdown.tsx
    ├── logo.tsx
    └── trustedTeams.tsx
public/images/             logos and screenshots
```

Colours and spacing are CSS variables declared in `globals.css`, so retheming means editing that one file.

## License

MIT, see [LICENSE](LICENSE).
