# CSSci Website - Next.js 15.5 + Sanity CMS

Modern website for the Computational Social Science (CSSci) program at the University of Amsterdam.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity v3
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 🎨 Brand Colors

- Environmental Green: `#124240` (Primary)
- Motivational Green: `#8fa674` (Secondary)
- Energetic Yellow: `#f9e663` (Accent)
- Midnight Black: `#1e1e1e`
- Neutral Beige: `#eee8dc`

## 📦 Installation

### Prerequisites

- Node.js 18.17 or later
- pnpm (`npm install -g pnpm`)

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd cssci-website

# Install dependencies
pnpm install
```

### 2. Set up Sanity

#### Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign up/login
2. Go to [sanity.io/manage](https://www.sanity.io/manage)
3. Click "Create new project"
4. Name it "CSSci Website"
5. Choose the free plan
6. Note your Project ID

#### Configure Environment Variables

```bash
# Copy the example env file
cp .env.local.example .env.local
```

Edit `.env.local` with your values:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Initialize Sanity Dataset

```bash
# Initialize the Sanity CLI (if needed)
pnpm dlx sanity@latest init --env .env.local

# When prompted:
# - Choose "Yes" to use the existing project
# - Select "production" dataset
```

### 4. Run Development Server

```bash
pnpm dev
```

Visit:
- Website: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Content Management

### Accessing Sanity Studio

1. Navigate to `/studio` on your local or deployed site
2. Login with your Sanity account
3. Start adding content!

### Content Types Available

- **Homepage**: Hero text, stats, section content
- **Projects**: Student projects with rich media
- **Partners**: Organization profiles
- **Testimonials**: Quotes from students and partners
- **FAQs**: Frequently asked questions
- **Resources**: Student resources and links
- **Timeline**: Semester project timelines
- **Team Members**: Faculty and staff
- **Site Settings**: Global configuration

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
   - Deploy!

3. **Configure Sanity CORS**
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Select your project
   - Go to API → CORS Origins
   - Add your Vercel URL (e.g., `https://your-site.vercel.app`)
   - Allow credentials: Yes

## 📂 Project Structure

```
cssci-website/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── studio/             # Sanity Studio route
│   │   │   └── [[...index]]/
│   │   ├── about/
│   │   ├── become-partner/
│   │   ├── partners/
│   │   ├── projects/
│   │   ├── resources/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/             # React components
├── sanity/
│   ├── env.ts                 # Environment config
│   ├── schema.ts              # Schema exports
│   ├── lib/
│   │   ├── client.ts          # Sanity client
│   │   ├── fetch.ts           # Data fetching with caching
│   │   ├── queries.ts         # GROQ queries
│   │   └── types.ts           # TypeScript types
│   └── schemaTypes/           # Content schemas
├── sanity.config.ts           # Sanity configuration
└── tailwind.config.ts         # Tailwind configuration
```

## 🔧 Development

### Fetching CMS Data

Example of fetching data with proper caching:

```typescript
import { sanityFetch } from '@/sanity/lib/fetch'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'

export default async function ProjectsPage() {
  const projects = await sanityFetch(PROJECTS_QUERY)
  
  return (
    // Your component
  )
}
```

### Adding New Content Types

1. Create schema in `sanity/schemaTypes/`
2. Add to `sanity/schema.ts`
3. Create TypeScript types in `sanity/lib/types.ts`
4. Add GROQ queries in `sanity/lib/queries.ts`
5. Restart dev server

### Image Handling

```typescript
import { urlFor } from '@/sanity/lib/client'

<img 
  src={urlFor(image).width(800).height(600).url()} 
  alt="Description"
/>
```

## 🐛 Troubleshooting

### "Project ID not found" error
- Ensure `.env.local` exists with correct values
- Restart dev server after adding environment variables

### Studio not loading
- Check browser console for errors
- Verify Sanity project ID and dataset
- Ensure you're logged into Sanity

### CORS errors
- Add your domain to Sanity CORS origins
- Include both `http://localhost:3000` and production URL

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [next-sanity Plugin](https://github.com/sanity-io/next-sanity)
- [Tailwind CSS v4](https://tailwindcss.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 CSSci Program, University of Amsterdam

---

Built with Next.js 15.5 and Sanity CMS