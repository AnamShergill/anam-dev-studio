# Modern Developer Portfolio

A premium, professional developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for smooth animations
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop
- 🌙 **Dark Theme** with modern aesthetics
- 🎯 **SEO Optimized** with metadata and sitemap
- ♿ **Accessible** components
- 🔥 **Performance Optimized**
- 📊 **GitHub Stats** integration
- 📬 **Contact Form** with validation
- 🎭 **Loading Screen** animation
- 📈 **Scroll Progress** indicator

## 📦 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Custom shadcn/ui inspired components

## 🛠️ Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment file:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit \`data/portfolio.ts\` to update:
- Personal details (name, email, location)
- About section content
- Skills and technologies
- Projects showcase
- Experience timeline
- Learning goals
- Testimonials

### Styling

- **Colors:** Modify Tailwind classes in components
- **Fonts:** Update in \`app/layout.tsx\`
- **Animations:** Adjust Framer Motion settings in components

### Sections

All sections are modular components in \`components/sections/\`:
- \`hero.tsx\` - Hero section with CTA
- \`about.tsx\` - About me section
- \`skills.tsx\` - Skills showcase
- \`projects.tsx\` - Projects portfolio
- \`experience.tsx\` - Timeline of journey
- \`learning.tsx\` - Current learning goals
- \`github-stats.tsx\` - GitHub activity
- \`testimonials.tsx\` - Client testimonials
- \`contact.tsx\` - Contact form

## 🎨 Design Philosophy

This portfolio follows modern design principles:
- **Minimal but Premium** - Clean UI with attention to detail
- **Smooth Animations** - Subtle, professional motion
- **Glassmorphism** - Used sparingly for depth
- **Proper Spacing** - Generous whitespace
- **Typography Hierarchy** - Clear content structure
- **Mobile-First** - Responsive on all devices

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project:
\`\`\`bash
npm run build
\`\`\`

Start production server:
\`\`\`bash
npm start
\`\`\`

## 📄 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── robots.ts           # SEO robots
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable UI components
│   ├── navbar.tsx          # Navigation
│   ├── footer.tsx          # Footer
│   ├── loading-screen.tsx  # Loading animation
│   └── scroll-progress.tsx # Scroll indicator
├── data/
│   └── portfolio.ts        # Portfolio data
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
\`\`\`

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized images and fonts
- Code splitting and lazy loading

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Success/error states
- Responsive design
- Accessible labels

To integrate with a backend:
1. Add your API endpoint in the form handler
2. Update the submit function in \`components/sections/contact.tsx\`

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration: Vercel, Linear, Raycast
- Icons: Lucide React
- Animations: Framer Motion
- Framework: Next.js

---

Built with ❤️ using Next.js and Tailwind CSS
\`\`\`
