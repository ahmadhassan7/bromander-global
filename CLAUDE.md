# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run Next.js linting
```

### Testing
No test commands are configured. Tests should be added and run commands should be configured in package.json.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.6 with App Router and React 19.1.0
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom theme directives
- **Internationalization**: next-intl with English (en) and Swedish (sv) locales
- **Animation**: Framer Motion and GSAP for complex animations
- **Smooth Scrolling**: Lenis integration

### Project Structure
- `src/app/[locale]/` - Internationalized app routes using Next.js App Router
- `src/components/` - Reusable React components
- `src/i18n/` - Internationalization configuration
- `messages/` - Translation JSON files (en.json, sv.json)
- `src/middleware.ts` - Next-intl middleware for locale handling

### Key Patterns
1. **Internationalization**: All pages are nested under `[locale]` dynamic segment. Always use `useTranslations` hook from next-intl for text content.

2. **Routing**: Locale prefix is always present (e.g., `/en/about`, `/sv/contact`). Middleware handles locale detection and redirects.

3. **Styling**: Uses Tailwind v4 with `@theme` directive in globals.css for custom colors. Prefer existing utility classes and color variables.

4. **Path Aliases**: Use `@/*` for imports from src directory (configured in tsconfig.json).

5. **Animation Libraries**: GSAP and Framer Motion are both available. Use Framer Motion for component animations, GSAP for complex timeline animations.

### Important Files
- `src/app/globals.css` - Contains theme configuration, custom colors, and animations
- `src/middleware.ts` - Handles locale routing
- `next.config.ts` - Next.js configuration with next-intl plugin