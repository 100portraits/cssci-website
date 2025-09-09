# CSSci Website Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Set up Sanity CMS

1. **Create a Sanity Account**
   - Go to [sanity.io](https://www.sanity.io/manage)
   - Sign up/login with GitHub or Google

2. **Create a New Project**
   - Click "Create new project"
   - Name it "CSSci Website"
   - Choose the free plan

3. **Get Your Project ID**
   - Once created, you'll see your project ID
   - Copy it for the next step

### 3. Configure Environment Variables

Create a `.env.local` file:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Initialize Sanity

```bash
pnpm dlx sanity@latest init --env .env.local
```

Choose:
- "Yes" when asked to use the current project
- "production" for dataset

### 5. Run the Development Server

```bash
pnpm dev
```

Visit:
- Website: http://localhost:3000
- CMS Admin: http://localhost:3000/studio

## Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
   - Deploy!

3. **Configure Sanity CORS**
   - Go to sanity.io/manage
   - Select your project
   - Go to API → CORS Origins
   - Add your Vercel URL (e.g., https://cssci.vercel.app)

## Adding Content

1. Go to `/studio` on your site
2. Login with your Sanity account
3. Start adding:
   - Homepage content
   - Projects
   - Partners
   - Testimonials
   - FAQs
   - Team members

## Troubleshooting

### "Project ID not found" error
- Make sure `.env.local` exists with correct values
- Restart the dev server after adding env variables

### Images not showing
- Check CORS settings in Sanity
- Ensure images are published in Sanity Studio

### Studio not loading
- Clear browser cache
- Check console for errors
- Ensure you're logged into Sanity

## Support

For issues, create a GitHub issue or contact the development team.