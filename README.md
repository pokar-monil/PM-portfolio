# Product Manager Portfolio Website

A modern, professional portfolio website built with React, Tailwind CSS, and Vite. Designed specifically for Product Managers to showcase both shipped and unshipped products, highlighting impact, learnings, and product management expertise.

## Features

- **Single-page application** with smooth scroll navigation
- **Responsive design** that works on desktop, tablet, and mobile
- **Active section highlighting** in navigation
- **Professional sections:**
  - Hero section with impactful headline
  - About section with bio and skills showcase
  - Shipped Products with metrics and impact
  - Unshipped Products with learnings and insights
  - Contact section with social links
- **Modern UI/UX:**
  - Subtle animations and transitions
  - Hover effects on cards
  - Visual distinction between shipped and unshipped products
  - Clean, professional color scheme
  - Lucide icons throughout

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd PM-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization Guide

All customizable content is clearly marked in `src/App.jsx` between the following comments:

```javascript
// ============================================================
// CUSTOMIZABLE CONTENT - UPDATE THESE SECTIONS WITH YOUR INFO
// ============================================================
```

### 1. Personal Information

Update the `personalInfo` object with your details:

```javascript
const personalInfo = {
  name: "Your Name",
  tagline: "Your Professional Tagline",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
};
```

### 2. About Section

Update the `aboutContent` object:

- **Bio**: Replace the array of paragraphs with your own story (2-3 paragraphs recommended)
- **Skills**: Modify the skills array to reflect your competencies. Each skill has:
  - `icon`: Choose from lucide-react icons (Target, Users, BarChart3, Lightbulb, TrendingUp, Zap, etc.)
  - `name`: Skill name
  - `color`: Tailwind color class (e.g., "text-blue-600")

### 3. Shipped Products

Update the `shippedProducts` array with your actual products:

```javascript
{
  title: "Product Name",
  company: "Company Name",
  period: "2023 - 2024",
  description: "Brief description of the product...",
  impact: [
    "Impact metric 1",
    "Impact metric 2",
    "Impact metric 3"
  ],
  technologies: ["Tech1", "Tech2", "Tech3"],
  image: "optional-image-filename.jpg"
}
```

### 4. Unshipped Products

Update the `unshippedProducts` array:

```javascript
{
  title: "Product Concept Name",
  company: "Company Name",
  period: "2023",
  description: "What the product would have been...",
  reason: "Why it didn't ship...",
  learnings: [
    "Key learning 1",
    "Key learning 2",
    "Key learning 3"
  ]
}
```

### 5. Adding Your Photo

Replace the placeholder in the About section:

1. Add your professional photo to `src/assets/`
2. Import it at the top of `App.jsx`:
   ```javascript
   import profilePhoto from './assets/your-photo.jpg';
   ```
3. Replace the photo placeholder div (around line 242) with:
   ```javascript
   <img
     src={profilePhoto}
     alt="Your Name"
     className="w-80 h-80 rounded-2xl shadow-xl object-cover"
   />
   ```

## Building for Production

```bash
npm run build
```

The optimized production files will be in the `dist/` directory.

## Deployment

This site can be deployed to:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drop the `dist` folder or connect via GitHub
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder contents

### Deploying to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploying to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

## Color Scheme Customization

To change the color scheme, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
    600: '#your-color',
    700: '#your-darker-color',
    // etc.
  },
}
```

## Project Structure

```
PM-portfolio/
├── src/
│   ├── App.jsx           # Main component with all sections
│   ├── index.css         # Tailwind directives and custom styles
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

## Tips for Customization

1. **Be Authentic**: Use real metrics and actual projects where possible
2. **Quantify Impact**: Numbers resonate with stakeholders - use them liberally
3. **Show Learning**: The unshipped section is powerful - be honest about failures and learnings
4. **Keep it Current**: Update regularly with new products and experiences
5. **Professional Photos**: Use high-quality, professional images
6. **Mobile First**: Always test on mobile devices

## Troubleshooting

### Styles not applying?
- Ensure Tailwind paths in `tailwind.config.js` are correct
- Clear browser cache
- Restart dev server

### Icons not showing?
- Verify `lucide-react` is installed: `npm list lucide-react`
- Check icon imports at the top of `App.jsx`

### Build errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be v16+)

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with React, Tailwind CSS, and passion for great products.
