# PSB Rhein-Main - Kfz Gutachter & TÜV Service

A modern React application for PSB Rhein-Main's automotive inspection and TÜV services, built with Vite, TypeScript, Tailwind CSS, and integrated with Supabase for backend services.

## 🚀 Features

- **Modern React App** - Built with Vite, TypeScript, and Tailwind CSS
- **Responsive Design** - Mobile-first approach with beautiful UI components
- **Database Integration** - Connected to Supabase for data management
- **Appointment Booking** - Customers can book appointments online
- **Contact Forms** - Integrated contact message system
- **Admin Dashboard** - Manage appointments and messages
- **SEO Optimized** - Meta tags and structured data
- **Fast Deployment** - Ready for Vercel deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI Components
- **Backend**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM with Hash Router
- **State Management**: TanStack Query

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account
- Vercel account (for deployment)

## 🔧 Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd gutachter-prime-futur-main
npm install
```

### 2. Supabase Setup

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready
3. Go to Settings > API to get your project URL and anon key

#### Set up the Database
1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-schema.sql` and run it
3. This will create the necessary tables:
   - `appointments` - For booking appointments
   - `contact_messages` - For contact form submissions

#### Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update `.env` with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### 3. Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 4. Vercel Deployment

#### Option A: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Set environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

#### Option B: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Vercel will automatically detect it's a Vite project
3. Add environment variables in the deployment settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

#### Option C: Deploy Button
Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo&env=VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY)

## 📊 Database Schema

The application uses two main tables:

### Appointments Table
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `customer_name` (Text)
- `customer_email` (Text)
- `customer_phone` (Text)
- `service_type` (Text)
- `appointment_date` (Date)
- `appointment_time` (Time)
- `vehicle_make` (Text, Optional)
- `vehicle_model` (Text, Optional)
- `vehicle_year` (Integer, Optional)
- `license_plate` (Text, Optional)
- `notes` (Text, Optional)
- `status` (Enum: pending, confirmed, completed, cancelled)

### Contact Messages Table
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `name` (Text)
- `email` (Text)
- `phone` (Text, Optional)
- `subject` (Text)
- `message` (Text)
- `status` (Enum: new, read, replied)

## 🔐 Security

- Row Level Security (RLS) is enabled on all tables
- Public access for creating appointments and contact messages
- Authenticated access required for reading/updating data (admin functions)
- Environment variables for sensitive data

## 📱 Features Overview

### Customer Features
- **Service Information** - Detailed information about TÜV and inspection services
- **Online Booking** - Book appointments directly through the website
- **Contact Forms** - Multiple ways to get in touch
- **Responsive Design** - Works perfectly on mobile and desktop

### Admin Features (Future)
- **Appointment Management** - View and manage all appointments
- **Message Management** - Handle contact form submissions
- **Dashboard** - Overview of business metrics

## 🚀 Performance

- **Fast Loading** - Optimized Vite build with code splitting
- **SEO Friendly** - Meta tags and structured data
- **Mobile Optimized** - Responsive design with mobile-first approach
- **Caching** - Proper cache headers for static assets

## 🔄 GitHub Pages (Alternative Deployment)

The project is also configured for GitHub Pages deployment:

```bash
# Deploy to GitHub Pages
npm run deploy
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to PSB Rhein-Main.

## 🆘 Support

For support or questions about the application:
- Email: info@psb-rhein-main.de
- Phone: +49 (0) 69 XXX XXXX

---

**PSB Rhein-Main** - Your trusted partner for automotive inspections and TÜV services in Frankfurt am Main.
