# Personal Website
[Personal Website](https://garrygao00.github.io) for Yang (Garry) Gao 

This site has two versions:
- **Jekyll version** (main): Traditional static site at the root URL
- **React version** (interactive): Modern React app at `/react/`

## Development Setup

### Jekyll Site (Main Branch)
```bash
# Install Ruby dependencies
bundle install

# Run Jekyll development server
bundle exec jekyll serve
```

### React Site (react-redesign Branch)
```bash
# Switch to React development branch
git checkout react-redesign

# Install Node.js dependencies (if not already done)
npm install

# Run React development server
npm run dev

# Build React app for production
npm run build
```

## Deployment Workflow

1. **Develop React features** on `react-redesign` branch
2. **Build React app**: `npm run build` (creates `/react/` folder)
3. **Switch to main branch**: `git checkout main`
4. **Copy built React files**: `git checkout react-redesign -- react`
5. **Commit and push** to deploy both versions

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── index.md             # Jekyll homepage (with React link button)
├── Gemfile              # Ruby dependencies
├── react/               # Built React app (generated, commit to main)
│   ├── index.html
│   └── assets/
├── src/                 # React source code (react-redesign branch only)
├── package.json         # Node.js dependencies (react-redesign branch only)
└── vite.config.js       # Vite build config (react-redesign branch only)
```

## URLs
- Jekyll site: https://garrygao00.github.io
- React app: https://garrygao00.github.io/react/