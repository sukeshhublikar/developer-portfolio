# Sukesh Hublikar - Developer Portfolio

A modern, responsive portfolio for Sukesh Hublikar, Senior Frontend Developer with 8+ years of experience. Built with Next.js, TypeScript, and Tailwind CSS, inspired by the best practices from top developer portfolios.

## ✨ Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Performance Optimized**: Built with Next.js 14 and TypeScript
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation

## 🎨 Design Inspiration

This portfolio draws inspiration from excellent developer portfolios:
- [Alexandros Lekkas](https://www.alexandroslekkas.com/) - Clean layout and skills showcase
- [Tyrrrz](https://tyrrrz.me/) - Minimalist design and strong branding
- [Andrii Zontov](https://lwjerri.dev/) - Simple but effective project focus
- [Alejandro Sobko](https://www.alejandrosobko.com/) - Professional services orientation

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── MobileMenu.tsx
│   ├── ProjectCard.tsx
│   └── SkillCard.tsx
└── public/
    └── (your assets)
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI

## 📝 Customization

### Personal Information
Edit the constants in `src/app/page.tsx`:
- Update personal information in the hero section
- Modify skills array with your technologies
- Replace project data with your own projects
- Update experience section with your work history

### Styling
- Main styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

### Content Sections
1. **Hero**: Introduction and social links
2. **Skills**: Technology stack with icons
3. **Projects**: Featured project showcase
4. **Experience**: Professional work history
5. **Contact**: Contact information and CTA

## 🎯 Key Features Implemented

### Navigation
- Fixed header with smooth scroll
- Mobile-responsive hamburger menu
- Hover effects and active states

### Hero Section
- Animated introduction
- Social media links
- Download resume button
- Location display

### Skills Section
- Grid layout with hover effects
- Technology icons
- Staggered animations

### Projects Section
- Card-based layout
- Technology tags
- GitHub and demo links
- Hover animations

### Experience Section
- Timeline-style layout
- Company and role information
- Achievement highlights

### Contact Section
- Call-to-action buttons
- Multiple contact methods
- Professional presentation

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured experience
- **Large Screens**: Properly constrained content width

## ⚡ Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with Next.js font optimization
- **CSS Optimization**: Tailwind CSS purging

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to main page
3. Update navigation menu
4. Add smooth scroll anchor

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Other Platforms
Build the project and upload the generated files:
```bash
npm run build
```

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!