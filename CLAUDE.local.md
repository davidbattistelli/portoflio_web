# Portfolio Project - Claude Context

## Project Overview
Modern, responsive portfolio website built with React 18, TypeScript, and Tailwind CSS. Optimized for deployment to GitHub Pages/Vercel.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS (utility-first)
- **Icons**: React Icons
- **Linting**: ESLint with TypeScript rules

## Key Commands
```bash
npm run dev      # Start development server (uses Vite)
npm run build    # Build for production (TypeScript + Vite)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

## Code Style & Conventions
- **Module System**: ES modules only (no CommonJS)
- **TypeScript**: Strict type checking enabled
- **Components**: Functional components with TypeScript interfaces
- **Styling**: Tailwind utility classes (avoid custom CSS when possible)
- **File Structure**: Components in `src/components/`, main entry in `src/main.tsx`

## Project Structure
```
src/
├── components/     # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── context/        # Context providers (new)
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles + Tailwind directives
```

## Best Practices to Follow
1. **Always run lint before committing**: `npm run lint`
2. **Test build before pushing**: `npm run build` should complete without errors
3. **Keep components small**: One component per file, single responsibility
4. **Type everything**: No `any` types unless absolutely necessary
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Responsive design**: Mobile-first approach with Tailwind breakpoints

## Development Workflow
1. **Explore** - Read relevant files before making changes
2. **Plan** - Create a todo list for complex tasks
3. **Code** - Implement with proper TypeScript types
4. **Test** - Run `npm run build` and `npm run lint`
5. **Commit** - Use descriptive commit messages

## Git Conventions
- Main branch: `main`
- Commit messages: Use conventional commits format
- Before pushing: Ensure build succeeds and linting passes

## Deployment Notes
- Target platforms: Vercel (recommended), Netlify, GitHub Pages
- Build output: `dist/` folder (gitignored)
- Configuration: `vercel.json` already configured

## Common Pitfalls to Avoid
- Don't mix CommonJS and ES modules
- Don't use inline styles (prefer Tailwind classes)
- Don't commit `node_modules/` or `dist/` folders
- Don't skip TypeScript type definitions

## Testing Strategy
Currently no automated tests. When adding tests:
- Use Vitest (Vite's test runner)
- Test user interactions and component rendering
- Maintain >80% coverage for critical components
