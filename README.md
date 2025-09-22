# Bromander Global Website

A modern, responsive website for Bromander Global - showcasing our innovative products including Shinery and Smart Bookkeeping.

## 🚀 Features

- **Modern Design**: Dark theme with blue/cyan gradient color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Product Showcases**: Dedicated pages for Shinery and Smart Bookkeeping
- **Interactive Elements**: Engaging hover effects and micro-interactions
- **Performance Optimized**: Built with Next.js 15 and Turbopack

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 with React 19.1.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.23.12 & GSAP 3.13.0
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis
- **TypeScript**: Full type safety
- **Additional Libraries**:
  - React CountUp for animated counters
  - React Intersection Observer for scroll-triggered animations
  - Clsx & Tailwind Merge for utility management

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) to Cyan (#06b6d4) gradients
- **Secondary**: Purple (#a855f7) to Pink (#ec4899) for Shinery
- **Accent**: Emerald (#10b981) for additional highlights
- **Background**: Pure black (#000000)
- **Text**: Gray scale from #f3f4f6 to #9ca3af

### Typography
- **Headers**: Space Grotesk (display font)
- **Body**: Inter (sans-serif)
- **Weights**: Regular (400), Medium (500), Bold (700), Black (900)

### Components
- **Glass Effect**: Backdrop blur with subtle transparency
- **Gradient Text**: Animated gradient text effects
- **Floating Elements**: CSS animations for dynamic movement
- **Pattern Overlays**: Dot and grid patterns for texture

## 📁 Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── products/
│   │   ├── shinery/        # Shinery product page
│   │   └── bookkeeping/    # Smart Bookkeeping product page
│   ├── globals.css         # Global styles and theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation component
│   └── SmoothScroll.tsx   # Smooth scrolling provider
└── lib/
    └── utils.ts           # Utility functions
```

## 🎯 Pages Overview

### Homepage (/)
- Hero section with animated 3D globe
- Product showcase cards
- Statistics section with animated counters
- Testimonials
- Call-to-action sections

### Shinery (/products/shinery)
- Product overview with interactive mockup
- Feature highlights
- User testimonials
- Download section with platform options

### Smart Bookkeeping (/products/bookkeeping)
- Product preview with waitlist signup
- Feature comparison
- Pricing tiers
- Beta user feedback

### About (/about)
- Company mission and vision
- Core values
- Team members
- Company timeline/milestones

### Contact (/contact)
- Contact form
- Company information
- Business hours
- Quick links

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🎨 Customization

### Colors
Colors are defined in `src/app/globals.css` using CSS custom properties within the `@theme` directive. To modify colors:

```css
@theme {
  --color-blue-500: #your-color;
  --color-cyan-500: #your-color;
}
```

### Animations
Custom animations are defined in the globals.css file. Key animations include:
- `float`: Subtle up/down movement
- `pulse`: Opacity animation
- `bounce`: Spring-like bouncing effect

### Components
All components are built with:
- TypeScript for type safety
- Tailwind classes for styling
- Framer Motion for animations
- Responsive design patterns

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Development Notes

- Uses Tailwind CSS v4 with the new `@theme` directive
- Includes smooth scrolling with Lenis
- GSAP used for complex animations
- All images should be optimized and placed in `public/` directory
- Form submissions are currently mock implementations

## 📄 License

This project is proprietary to Bromander Global.

---

Built with ❤️ by the Bromander Global team