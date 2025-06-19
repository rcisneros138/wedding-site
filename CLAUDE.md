# Wedding Site - Claude Context

## Project Overview
A wedding website built with Next.js and Tailwind CSS, designed to be hosted on Netlify.

## Tech Stack
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify (static export)
- **Package Manager**: npm

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

## Wedding Site Features to Consider
- Hero section with names and date
- Wedding details (venue, time, dress code)
- RSVP form
- Photo gallery
- Registry links
- Accommodation information
- Schedule/timeline
- Contact information