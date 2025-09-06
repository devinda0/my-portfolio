# Devinda Dilshan - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features stunning 3D animations, interactive components, and a clean, professional design.

## 🚀 Features

- **Modern Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **3D Animations**: Three.js integration with custom 3D scenes
- **Interactive Components**: Custom ReactBits components with magnetic effects, particles, and aurora backgrounds
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **SEO Optimized**: Structured data, meta tags, and performance optimization
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Performance**: Optimized for Core Web Vitals and fast loading

## � Project Structure

```
├── app/                          # Next.js 15 app directory
│   ├── layout.tsx               # Root layout with SEO and analytics
│   ├── page.tsx                 # Homepage with all sections
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── manifest.json            # PWA manifest
│   ├── robots.ts                # SEO robots configuration
│   ├── sitemap.ts               # Dynamic sitemap generation
│   └── sitemap-new.ts           # Updated sitemap configuration
├── components/                   # Reusable components organized by function
│   ├── layout/                  # Layout-related components
│   │   ├── navigation.tsx       # Main navigation with scroll effects
│   │   ├── footer.tsx           # Site footer
│   │   └── theme-provider.tsx   # Theme context provider
│   ├── sections/                # Page section components
│   │   ├── hero-section.tsx     # Landing hero with 3D effects
│   │   ├── about-section.tsx    # About me section
│   │   ├── experience-section.tsx # Professional experience
│   │   ├── skills-section.tsx   # Technical skills showcase
│   │   ├── projects-section.tsx # Featured projects
│   │   └── contact-section.tsx  # Contact form and information
│   ├── seo/                     # SEO and analytics components
│   │   ├── seo-schemas.tsx      # Structured data schemas
│   │   ├── seo-tracking.tsx     # Analytics tracking
│   │   └── google-analytics.tsx # Google Analytics integration
│   ├── reactbits/               # Custom interactive components
│   │   ├── aurora.tsx           # Aurora background effect
│   │   ├── aurora-enhanced.tsx  # Enhanced aurora effect
│   │   ├── aurora-premium.tsx   # Premium aurora effect
│   │   ├── blob-cursor.tsx      # Blob cursor effect
│   │   ├── particles.tsx        # Basic particle system
│   │   ├── particles-enhanced.tsx # Enhanced particle system
│   │   ├── magnet.tsx           # Basic magnetic hover effects
│   │   ├── magnet-enhanced.tsx  # Enhanced magnetic effects
│   │   ├── splash-cursor.tsx    # Interactive cursor effects
│   │   ├── gradient-text.tsx    # Animated gradient text
│   │   └── spotlight-card.tsx   # Spotlight hover cards
│   └── ui/                      # Shadcn/ui components
│       ├── accordion.tsx        # Accordion component
│       ├── alert-dialog.tsx     # Alert dialog component
│       ├── alert.tsx            # Alert component
│       ├── aspect-ratio.tsx     # Aspect ratio component
│       ├── avatar.tsx           # Avatar component
│       ├── badge.tsx            # Badge component
│       ├── breadcrumb.tsx       # Breadcrumb component
│       ├── button.tsx           # Button variants
│       ├── calendar.tsx         # Calendar component
│       ├── card.tsx             # Card components
│       ├── carousel.tsx         # Carousel component
│       ├── chart.tsx            # Chart component
│       ├── checkbox.tsx         # Checkbox component
│       ├── collapsible.tsx      # Collapsible component
│       ├── command.tsx          # Command component
│       ├── context-menu.tsx     # Context menu component
│       ├── dialog.tsx           # Modal dialogs
│       ├── drawer.tsx           # Drawer component
│       ├── dropdown-menu.tsx    # Dropdown menu component
│       ├── form.tsx             # Form component
│       ├── hover-card.tsx       # Hover card component
│       ├── input.tsx            # Input component
│       ├── input-otp.tsx        # OTP input component
│       ├── label.tsx            # Label component
│       ├── menubar.tsx          # Menubar component
│       ├── navigation-menu.tsx  # Navigation menu component
│       ├── pagination.tsx       # Pagination component
│       ├── popover.tsx          # Popover component
│       ├── progress.tsx         # Progress component
│       ├── radio-group.tsx      # Radio group component
│       ├── resizable.tsx        # Resizable component
│       ├── scroll-area.tsx      # Scroll area component
│       ├── select.tsx           # Select component
│       ├── separator.tsx        # Separator component
│       ├── sheet.tsx            # Sheet component
│       ├── sidebar.tsx          # Sidebar component
│       ├── skeleton.tsx         # Skeleton component
│       ├── slider.tsx           # Slider component
│       ├── sonner.tsx           # Sonner toast component
│       ├── switch.tsx           # Switch component
│       ├── table.tsx            # Table component
│       ├── tabs.tsx             # Tabs component
│       ├── textarea.tsx         # Textarea component
│       ├── toast.tsx            # Toast component
│       ├── toaster.tsx          # Toaster component
│       ├── toggle.tsx           # Toggle component
│       ├── toggle-group.tsx     # Toggle group component
│       ├── tooltip.tsx          # Tooltip component
│       ├── use-mobile.tsx       # Mobile hook (UI version)
│       └── use-toast.ts         # Toast hook
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   ├── use-navigation.ts       # Navigation state management
│   └── use-toast.ts            # Toast notifications
├── lib/                         # Utility functions
│   ├── utils.ts                # Utility functions and cn helper
│   ├── seo.ts                  # SEO helper functions
│   └── navigation-utils.ts     # Navigation utilities
├── public/                      # Static assets
│   ├── Devinda_Resume.pdf      # Resume download
│   ├── my-circle.png           # Profile image
│   ├── my-full.jpeg            # Full profile image
│   ├── fonts/                  # Custom fonts directory
│   ├── models/                 # 3D model assets
│   └── models_extracted/       # Extracted 3D model files
│       ├── license.txt         # Model license
│       ├── scene.bin           # Model binary data
│       ├── scene.gltf          # GLTF scene file
│       └── textures/           # Model textures
├── static-export/               # Static export build output
├── styles/                      # Additional stylesheets
│   └── globals.css             # Alternative global styles
├── types/                       # TypeScript type definitions
│   └── three.d.ts              # Three.js type extensions
├── components.json              # Shadcn/ui configuration
├── firebase.json               # Firebase configuration
├── next.config.mjs             # Next.js configuration
├── next-env.d.ts               # Next.js TypeScript definitions
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml              # Lockfile for pnpm
├── postcss.config.mjs          # PostCSS configuration
├── README.md                   # Project documentation
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animations
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Production-ready motion library
- **GSAP** - High-performance animations

### UI & Styling
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Theme switching
- **Lucide React** - Icon library

### Development & Build
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devinda0/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## � Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update personal information in:
- `app/page.tsx` - Projects data and content
- `app/layout.tsx` - SEO metadata
- `components/sections/*.tsx` - Section content

### Styling
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration
- `components/ui/` - Component styling

### Content
- `public/` - Replace images and resume
- `components/sections/` - Update section content
- `lib/seo.ts` - SEO configuration

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Touch-friendly interactions
- Optimized performance across devices
- Accessible design patterns

## 🔧 Performance Optimizations

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Dynamic imports for heavy components
- **Bundle Analysis** - Optimized chunk splitting
- **Caching Strategy** - Static generation where possible
- **Core Web Vitals** - Optimized for Google's performance metrics

## 📈 SEO Features

- **Structured Data** - Rich snippets for better search presence
- **Meta Tags** - Comprehensive meta tag optimization
- **Sitemap** - Dynamic sitemap generation
- **Robots.txt** - Search engine optimization
- **Open Graph** - Social media optimization

## � Deployment

The project is optimized for deployment on:

### Vercel (Recommended)
```bash
pnpm build
```
Deploy directly from GitHub with automatic CI/CD.

### Netlify
```bash
pnpm build
```
Configure build settings: `pnpm build` and publish directory: `.next`

### Other Platforms
The project exports as a static site compatible with any hosting platform.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍� About the Developer

**Devinda Dilshan**
- Computer Science & Engineering Student at University of Moratuwa
- Full-Stack Developer specializing in React, Node.js, and Python
- Passionate about creating beautiful, functional web experiences

## 📞 Contact

- **Email**: devindadilshan.dev@gmail.com
- **LinkedIn**: [Devinda Dilshan](https://linkedin.com/in/devinda-dilshan)
- **GitHub**: [devinda0](https://github.com/devinda0)
- **Portfolio**: [devinda-dilshan.dev](https://devinda-dilshan.dev)

---

⭐ Star this repo if you found it helpful!
