# Ghulam Muhammad Khan | AI Engineer Portfolio

A modern, fast-loading personal portfolio website for an AI/ML engineer. Built with **React 19**, **Vite**, **Tailwind CSS v3**, and **Framer Motion** animations.

## 🚀 Features

- ✅ **Modern Design** - Clean, minimal dark theme with professional aesthetics
- ✅ **Responsive** - Mobile-first design that works on all devices
- ✅ **Fast Loading** - Optimized with Vite for blazing-fast performance
- ✅ **Smooth Animations** - Subtle Framer Motion scroll animations
- ✅ **SEO Ready** - Meta tags and proper semantic HTML
- ✅ **Dark Mode** - Beautiful dark theme optimized for eyes
- ✅ **Social Links** - Integrated GitHub, LinkedIn, and Email
- ✅ **Project Showcase** - Display AI/ML projects with descriptions and tech stacks

## 📋 Sections

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Eye-catching introduction with call-to-action
3. **About** - Bio with certifications
4. **Skills** - Tech stack organized by category
5. **Projects** - 7 featured AI/ML projects with tech stacks
6. **Contact** - Social media links and email
7. **Footer** - Copyright information

## 🛠️ Tech Stack

- **Frontend**: React 19.2.6
- **Build Tool**: Vite 8.0.14
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Framer Motion 12.40.0
- **Icons**: React Icons 5.6.0
- **Fonts**: Google Fonts (Sora + Inter)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/gmkhan974/portfolio-site.git
cd portfolio-site
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```
Creates optimized production files in the `dist/` folder

### 5. Preview Production Build
```bash
npm run preview
```

## 🔧 Configuration

### Update Personal Information

**1. Update Email**
- Edit `src/components/Contact.jsx`
- Find: `mailto:ghulammuhammadkhan2003@gmail.com`
- Replace with your email address

**2. Update GitHub & LinkedIn Links**
- Edit `src/data/projects.js`
- Replace `YOUR_GITHUB_LINK_HERE` with actual GitHub repository URLs
- Edit `src/components/Contact.jsx`
- Update GitHub and LinkedIn profile URLs

**3. Update Skills**
- Edit `src/data/skills.js`
- Add/remove skill categories and items

**4. Update Projects**
- Edit `src/data/projects.js`
- Modify project details, descriptions, and tech stacks
- Format:
  ```javascript
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    stack: ["Tech1", "Tech2", ...],
    github: "https://github.com/yourname/project",
    demo: "https://project-demo.com", // or null
    status: "Completed",
    featured: true
  }
  ```

### Add Resume
- Create/obtain `resume.pdf`
- Place it in the `public/` folder
- Path should be: `public/resume.pdf`
- The file will be accessible at: `/resume.pdf`

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js`:
- Primary accent: `#3B82F6` (sky-600)
- Secondary accent: `#10B981` (emerald-600)
- Background: `#0F172A` (slate-900)
- Surface: `#1E293B` (slate-800)

### Typography
- **Headings**: Sora (600, 700 weights)
- **Body**: Inter (400-700 weights)
- Edit `src/index.css` for custom font imports

### Animations
- Edit `src/index.css` for keyframe animations
- Modify `@keyframes fadeInUp`, `fadeInDown`, `glow`
- Adjust animation timing and easing in component variants

## 📁 Project Structure

```
portfolio-site/
├── public/                    # Static files (resume.pdf goes here)
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js       # Project data
│   │   └── skills.js         # Skills data
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── index.css             # Global styles & animations
│   └── main.jsx              # React entry point
├── index.html                # HTML entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies & scripts
└── .gitignore                # Git ignore rules
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-site.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your portfolio repository from GitHub
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Your site will be live in 2-5 minutes!

3. **Custom Domain**
   - Go to Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records (Vercel provides instructions)

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Push to GitHub (same steps as Vercel)

3. Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

## 📝 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## 🎯 Performance

- **Vite HMR**: Hot Module Replacement for instant updates
- **Optimized Bundle**: ~150KB gzipped
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Responsive Images**: Optimized for all screen sizes
- **CSS Optimization**: Purged unused styles with Tailwind v3

## 🔐 Security

- No external API calls or sensitive data
- All data stored locally in component/data files
- No database or backend required
- Safe for public repositories

## 📧 Contact

- **Email**: ghulammuhammadkhan2003@gmail.com
- **GitHub**: [github.com/gmkhan974](https://github.com/gmkhan974)
- **LinkedIn**: [linkedin.com/in/ghulam-muhammad-khan-7bb37a375](https://www.linkedin.com/in/ghulam-muhammad-khan-7bb37a375)

## 📄 License

MIT License - Feel free to use this portfolio as a template for your own!

## 🙏 Credits

Built with:
- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)

---

**Made with ❤️ by Ghulam Muhammad Khan**
