# Deployment Guide: Supabase + Vercel

This guide will walk you through deploying the PSB Rhein-Main application with Supabase as the backend and Vercel for hosting.

## 🗄️ Supabase Setup

### Step 1: Create Supabase Project

1. **Sign up/Login** to [Supabase](https://supabase.com)
2. **Create a new project**:
   - Click "New Project"
   - Choose your organization
   - Enter project name: `psb-rhein-main`
   - Enter database password (save this!)
   - Choose region (closest to your users)
   - Click "Create new project"

3. **Wait for setup** (usually 2-3 minutes)

### Step 2: Configure Database

1. **Go to SQL Editor** in your Supabase dashboard
2. **Create a new query** and paste the contents of `supabase-schema.sql`
3. **Run the query** to create tables and policies
4. **Verify tables** were created in the Table Editor

### Step 3: Get API Credentials

1. **Go to Settings > API**
2. **Copy these values**:
   - Project URL: `https://your-project-id.supabase.co`
   - Anon public key: `eyJ...` (long string)

### Step 4: Test Database Connection

1. **Update your local `.env` file**:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

2. **Test locally**:
   ```bash
   npm run dev
   ```

3. **Check browser console** for any Supabase connection errors

## 🚀 Vercel Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project? `N`
   - Project name: `psb-rhein-main`
   - Directory: `./` (current directory)
   - Override settings? `N`

5. **Add environment variables**:
   ```bash
   vercel env add VITE_SUPABASE_URL
   # Paste your Supabase URL
   
   vercel env add VITE_SUPABASE_ANON_KEY
   # Paste your Supabase anon key
   ```

6. **Deploy again** to use environment variables:
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard

1. **Connect GitHub** (if not already):
   - Push your code to GitHub first
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Import Project"
   - Select your GitHub repository

2. **Configure deployment**:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Add environment variables**:
   - Click "Environment Variables"
   - Add `VITE_SUPABASE_URL` with your Supabase URL
   - Add `VITE_SUPABASE_ANON_KEY` with your Supabase anon key
   - Make sure both are available for all environments

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo&env=VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY&envDescription=Supabase%20credentials%20needed%20for%20database%20connection&envLink=https://supabase.com/docs/guides/getting-started)

## 🔧 Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### 2. Environment Variables Management

**Production Environment**:
```bash
# Add production environment variables
vercel env add VITE_SUPABASE_URL production
vercel env add VITE_SUPABASE_ANON_KEY production
```

**Preview Environment**:
```bash
# Add preview environment variables (for PR previews)
vercel env add VITE_SUPABASE_URL preview
vercel env add VITE_SUPABASE_ANON_KEY preview
```

### 3. Automatic Deployments

**GitHub Integration**:
- Every push to `main` branch = Production deployment
- Every pull request = Preview deployment
- Vercel automatically builds and deploys

## 🔍 Troubleshooting

### Common Issues

**1. Blank page after deployment**
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure Supabase URL and key are valid

**2. Database connection errors**
- Verify Supabase project is active
- Check if RLS policies are correctly set
- Ensure anon key has proper permissions

**3. Build failures**
- Check if all dependencies are in `package.json`
- Verify TypeScript types are correct
- Ensure no missing imports

**4. Environment variables not working**
- Variables must start with `VITE_` for Vite
- Redeploy after adding environment variables
- Check variable names match exactly

### Debug Commands

```bash
# Check deployment logs
vercel logs your-deployment-url

# Test build locally
npm run build
npm run preview

# Check environment variables
vercel env ls
```

## 📊 Monitoring & Analytics

### Vercel Analytics
1. **Enable in Vercel Dashboard**:
   - Go to your project
   - Click "Analytics"
   - Enable Web Analytics

### Supabase Monitoring
1. **Database Usage**:
   - Monitor in Supabase Dashboard
   - Check API usage
   - Review database performance

## 🔄 Continuous Deployment

### Automatic Deployments
- **Production**: Push to `main` branch
- **Preview**: Create pull request
- **Development**: Use `vercel dev` for local development

### Manual Deployments
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## 🛡️ Security Checklist

- ✅ Environment variables are not committed to git
- ✅ Supabase RLS policies are enabled
- ✅ API keys are properly scoped
- ✅ HTTPS is enabled (automatic with Vercel)
- ✅ Database backups are configured in Supabase

## 📞 Support

If you encounter issues:

1. **Check the logs** in Vercel Dashboard
2. **Review Supabase** project health
3. **Test locally** with same environment variables
4. **Contact support**:
   - Vercel: [vercel.com/support](https://vercel.com/support)
   - Supabase: [supabase.com/support](https://supabase.com/support)

---

**Next Steps**: After successful deployment, consider setting up monitoring, analytics, and automated backups for your production application.