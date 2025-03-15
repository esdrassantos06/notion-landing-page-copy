# Notion Landing Page Clone

This project is a recreation of Notion's homepage, built using modern web technologies. The goal is to replicate the look, feel, and basic functionality of Notion's landing page as closely as possible.

## 🚀 Technologies Used

- **Next.js 15** - React framework with advanced features like server components
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Static type-checking
- **Tailwind CSS 4** - Utility-first CSS framework
- **Phosphor Icons** - Icon library for consistent styling

## ✨ Features

- Responsive design that works across desktop, tablet, and mobile
- Interactive dropdown menus similar to Notion's navigation
- Hero section with call-to-action buttons
- "Trusted by teams" company logos display
- Clean, minimal UI matching Notion's aesthetic

## 📋 Project Structure

```
notion-landing-page/
├── public/
│   └── images/           # Image assets
├── src/
│   ├── app/              # Next.js app router
│   │   ├── globals.css
│   │   └── page.tsx      # Main landing page
│   ├── components/       # Reusable UI components
│   │   ├── LayoutComponent.tsx
│   │   ├── header.tsx
│   │   ├── dropdown.tsx
│   │   ├── logo.tsx
│   │   └── trustedTeams.tsx
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18.18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/esdrassantos06/notion-landing-page-copy.git
   ```

2. Navigate to the project directory:
   ```bash
   cd notion-landing-page-copy
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📱 Development

The project uses Next.js with the app router, providing a file-based routing system.

- `src/app/page.tsx` - The main landing page
- `src/components/` - Contains all reusable UI components
- `src/app/globals.css` - Global styles defined with Tailwind CSS

## 🛠️ Customization

You can modify the themes and colors in the `globals.css` file, which uses CSS variables for consistent styling throughout the application.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.