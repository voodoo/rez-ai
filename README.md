# Paul Vudmaska — Portfolio & Resume

A minimal, one-handed-friendly portfolio site. Built with Next.js, TypeScript, and clean design.

## Features

- ⚡ Fast, lightweight Next.js portfolio
- 🎨 Infinity sign hero visual
- 📱 One-handed responsive design
- 🔗 Direct booking integration (Cal.com)
- 🎯 Clean, professional layout

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (or create account)
3. Click "Add New..." → "Project"
4. Select `voodoo/rez-ai` repository
5. Click "Deploy"
6. Your site is live at a Vercel URL (e.g., `rez-ai.vercel.app`)

**Optional:** Add your own domain in Vercel settings.

Command-line deploy:

```bash
npm install -g vercel
vercel deploy
```

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Choose `voodoo/rez-ai`
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

**Note:** You may need to install the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/) for best results. Vercel is recommended if you want a simpler setup.

### Self-Hosted (VPS/Dedicated Server)

```bash
# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and build
git clone https://github.com/voodoo/rez-ai.git
cd rez-ai
npm install
npm run build
npm start
```

Site runs on `localhost:3000`. Use a reverse proxy (Nginx) and domain to expose it publicly.

### Environment

If you need to customize the Cal.com link, edit `pages/index.tsx`:

```typescript
const calLink = 'https://cal.com/paul-vudmaska/15min';
```

Then redeploy.

## Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** CSS (no frameworks)
- **Deployment:** Vercel / Netlify / Self-hosted

## License

MIT
