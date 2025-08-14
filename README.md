# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features a clean design with dark/light theme support and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Sections Include**:
  - Hero section with animated background
  - About section with personal information
  - Skills showcase with visual indicators
  - Experience timeline
  - Projects gallery with live demos
  - Contact form integration
- **Form Integration**: Contact form powered by Formspree
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: Custom CSS animations with Tailwind
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Formspree](https://formspree.io/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd devinda-portfolio-2
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   
   Or if you prefer npm:
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm run dev
   ```
   
   Or with npm:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🔧 Configuration

### Environment Variables

If you're using Formspree for the contact form, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

### Customization

1. **Personal Information**: Update the content in each component file:
   - `components/hero-section.tsx` - Hero section content
   - `components/about-section.tsx` - About section information
   - `components/experience-section.tsx` - Work experience
   - `components/projects-section.tsx` - Projects showcase
   - `components/skills-section.tsx` - Skills and technologies

2. **Images**: Replace the images in the `public/` directory:
   - `my-circle.png` - Profile picture (circular)
   - `my-full.jpeg` - Full profile image
   - `resume.pdf` - Your resume file

3. **Styling**: Modify the global styles in:
   - `app/globals.css` - Global CSS styles
   - `tailwind.config.js` - Tailwind configuration

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── about-section.tsx  # About section
│   ├── contact-section.tsx# Contact form
│   ├── experience-section.tsx # Experience timeline
│   ├── hero-section.tsx   # Hero/landing section
│   ├── navigation.tsx     # Navigation component
│   ├── projects-section.tsx # Projects showcase
│   ├── skills-section.tsx # Skills display
│   └── theme-provider.tsx # Theme context provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/               # Additional stylesheets
```

## 🚦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customizing Themes

The portfolio supports both dark and light themes. You can customize the theme colors by modifying the CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Add your custom colors here */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* Dark theme colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `pnpm build`
2. Upload the `out` folder to Netlify
3. Configure redirects if needed

### Other Platforms

The portfolio can be deployed to any platform that supports Node.js applications.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

⭐ If you found this portfolio helpful, please give it a star!
