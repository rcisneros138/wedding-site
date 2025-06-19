# Wedding Site - Claude Context

## Project Overview
A wedding website built with Next.js and Tailwind CSS, designed to be hosted on Netlify.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify (static export)
- **Package Manager**: npm
- **Version Control**: Git with GitHub repository

## Project Structure
```
/src
  /app          # App Router pages and layouts
  /components   # Reusable React components
/public         # Static assets (images, fonts, etc.)
```

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Build & Deploy
For Netlify deployment, the project uses static export:
- Build command: `npm run build`
- Publish directory: `out/`

## Common Tasks
- **Add new page**: Create file in `/src/app/[page-name]/page.tsx`
- **Add component**: Create in `/src/components/ComponentName.tsx`
- **Styling**: Use Tailwind CSS classes
- **Images**: Place in `/public/` and reference with `/image.jpg`

## Version Control & GitHub Workflow
- **Repository**: https://github.com/rcisneros138/wedding-site
- **Branch Strategy**: 
  - `main` - Production-ready code
  - Create feature branches for significant changes

### Git Workflow
1. **Before starting work**:
   ```bash
   git pull origin main
   ```

2. **For major features**:
   ```bash
   git checkout -b feature/feature-name
   # Make changes
   git add .
   git commit -m "Descriptive commit message"
   git push origin feature/feature-name
   # Create pull request on GitHub
   ```

3. **For minor changes**:
   ```bash
   # Make changes
   git add .
   git commit -m "Descriptive commit message"
   git push origin main
   ```

4. **Commit best practices**:
   - Write clear, descriptive commit messages
   - Commit frequently with logical changes
   - Always commit major changes to GitHub
   - Include the type of change in commit messages (e.g., "feat:", "fix:", "docs:")

## Wedding Site Features to Consider
- Hero section with names and date
- Wedding details (venue, time, dress code)
- RSVP form
- Photo gallery
- Registry links
- Accommodation information
- Schedule/timeline
- Contact information
