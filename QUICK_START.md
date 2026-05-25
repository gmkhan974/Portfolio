# 🚀 Quick Start - Upload to GitHub in 5 Minutes

## One-Command Setup

Copy-paste these commands in PowerShell (in your `portfolio-site` folder):

```powershell
# 1. Initialize Git
git init

# 2. Add all files (node_modules automatically ignored)
git add .

# 3. Create commit
git commit -m "Initial portfolio commit"

# 4. Set main branch
git branch -M main

# 5. Add your GitHub repository URL (replace 'yourusername')
git remote add origin https://github.com/yourusername/portfolio-site.git

# 6. Push to GitHub
git push -u origin main
```

**Done! Your portfolio is now on GitHub! ✅**

---

## Before You Upload - Checklist

- [ ] Updated email in `src/components/Contact.jsx`
- [ ] Updated GitHub links in `src/data/projects.js`
- [ ] Updated LinkedIn URL in `src/components/Contact.jsx`
- [ ] Created GitHub repository at github.com (empty repo)

---

## Files Uploaded (~270KB total)

```
✅ src/              → All React components
✅ public/           → Static assets
✅ *.js files        → Config files (vite, tailwind, postcss, eslint)
✅ index.html        → Main HTML
✅ package.json      → Dependencies
✅ README.md         → Documentation
✅ .gitignore        → Git rules

❌ node_modules/     → NOT uploaded (400-600MB, auto-ignored)
❌ dist/             → NOT uploaded (build folder)
```

---

## After Upload - Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select your GitHub repository
4. Click "Deploy" - Done in 2-5 minutes! 🎉

---

## Need Help?

- See `README.md` for full documentation
- See `GITHUB_UPLOAD_GUIDE.md` for detailed explanation
- All config is ready - just upload!

**Your portfolio is complete and ready for production! 🎊**
