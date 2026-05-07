# Portfolio Customization Guide

## 🎯 Quick Start

Your portfolio is now ready with all 7 of your real projects! Here's how to customize it:

## 📝 Step 1: Update Personal Information

Edit `data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Full Name",              // Replace with your name
  role: "Frontend & AI Web Developer", // Your role/title
  email: "your.email@example.com",     // Your email
  location: "Your City, Country",      // Your location
  github: "https://github.com/yourusername",     // Your GitHub
  linkedin: "https://linkedin.com/in/yourusername", // Your LinkedIn
  resume: "/resume.pdf"                // Path to your resume
}
```

## 🖼️ Step 2: Add Your Images

Add these files to the `public/` folder:

### Profile Photo
- `public/profile.jpg` - Your professional photo (square, 500x500px recommended)

### Project Screenshots
Create a `projects` folder and add:
- `public/projects/levy-consultant.jpg`
- `public/projects/khan-fish.jpg`
- `public/projects/burger-ecommerce.jpg`
- `public/projects/hackathon-ecommerce.jpg`
- `public/projects/charity.jpg`
- `public/projects/food-recipe.jpg`
- `public/projects/mobile-landing.jpg`

**Recommended image specs:**
- Format: JPG or PNG
- Size: 1200x800px (3:2 ratio)
- File size: < 500KB each
- Quality: High but optimized

### Resume
- `public/resume.pdf` - Your resume PDF

## 🔗 Step 3: Update Project Links

In `data/portfolio.ts`, update the URLs for each project:

```typescript
{
  id: 1,
  title: "Levy Consultant Tax Firm",
  liveUrl: "https://your-actual-live-url.vercel.app",  // ← Update this
  githubUrl: "https://github.com/yourusername/repo"    // ← Update this
}
```

**Current Projects:**
1. Levy Consultant Tax Firm
2. Khan Fish Supplier
3. Burger E-Commerce Website
4. Hackathon E-Commerce Website (Featured)
5. Modern Charity Website
6. Food Recipe Website
7. Mobile Landing Page

## ✏️ Step 4: Customize About Section

Edit the `about.story` in `data/portfolio.ts`:

```typescript
export const about = {
  story: `Write your personal story here.
  
  Talk about your journey, what drives you, and your goals.
  
  Make it personal and authentic.`,
  image: "/profile.jpg"
}
```

## 🎨 Step 5: Update Colors (Optional)

The portfolio uses a blue/purple gradient theme. To change colors:

### Primary Color (Blue)
Find and replace in components:
- `blue-500` → your color
- `blue-600` → darker shade
- `blue-400` → lighter shade

### Accent Color (Purple)
- `purple-500` → your color
- `purple-600` → darker shade

## 🚀 Step 6: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see your portfolio!

## 📦 Step 7: Deploy to Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Customize portfolio"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your portfolio will be live in minutes!

## 🎯 Project Features Implemented

### ✅ Premium Projects Section
- **Bento grid layout** - Modern card-based design
- **Featured badges** - Highlights top projects (Levy & Hackathon)
- **Category filters** - All, Business, E-Commerce, Frontend, Landing Page
- **Hover effects** - Smooth glow and overlay animations
- **Live Demo buttons** - Direct links to live projects
- **GitHub buttons** - Source code access
- **Tech stack badges** - Visual technology indicators
- **Responsive design** - Perfect on all devices

### ✅ All 7 Projects Added
1. ⭐ **Levy Consultant Tax Firm** (Featured, Business)
2. **Khan Fish Supplier** (Business)
3. **Burger E-Commerce** (E-Commerce)
4. ⭐ **Hackathon E-Commerce** (Featured, E-Commerce)
5. **Modern Charity** (Frontend)
6. **Food Recipe** (Frontend)
7. **Mobile Landing Page** (Landing Page)

### ✅ Premium Design Elements
- Gradient backgrounds
- Animated overlays
- Smooth transitions
- Glassmorphism effects
- Professional spacing
- Modern typography
- Mobile-first responsive

## 🎨 Customization Tips

### Change Project Order
Edit the `id` field in `data/portfolio.ts` to reorder projects.

### Add More Projects
Copy a project object and increment the `id`:

```typescript
{
  id: 8,
  title: "New Project",
  description: "Description here",
  image: "/projects/new-project.jpg",
  tags: ["React", "Next.js"],
  category: "Frontend",
  featured: false,
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

### Mark Projects as Featured
Set `featured: true` to add a gold star badge.

### Update Categories
Edit the `categories` array in `components/sections/projects.tsx`:

```typescript
const categories = ["All", "Business", "E-Commerce", "Frontend", "Landing Page"]
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Troubleshooting

### Images not showing?
- Check file paths match exactly
- Ensure images are in `public/` folder
- Use lowercase filenames
- Restart dev server after adding images

### Build errors?
```bash
npm run build
```
Check the error message and fix any TypeScript issues.

### Styling issues?
- Clear browser cache
- Check Tailwind classes are correct
- Restart dev server

## 📚 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG
- **Deployment**: Vercel

## 🎉 You're All Set!

Your premium portfolio is ready to showcase your work. Remember to:

1. ✅ Update personal info
2. ✅ Add images
3. ✅ Update project URLs
4. ✅ Customize about section
5. ✅ Deploy to Vercel

Need help? Check the README.md or create an issue on GitHub.

---

**Built with ❤️ using Next.js and Tailwind CSS**
