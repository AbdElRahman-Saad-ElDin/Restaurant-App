# 🍽️ Byte & Bite - Restaurant App

A modern, elegant restaurant website built with React, TypeScript, and Tailwind CSS. This application showcases a fine dining restaurant with an interactive menu, reservation system, and beautiful UI components.

## ✨ Features

### 🏠 Homepage

- **Hero Section**: Eye-catching landing page with restaurant branding
- **About Section**: Restaurant story and culinary philosophy
- **Menu Preview**: Featured dishes with descriptions and pricing
- **Contact Information**: Location, phone, and email details
- **Responsive Design**: Optimized for all device sizes

### 📋 Menu Page

- **Full Menu Display**: Complete appetizers, main courses, and desserts
- **Dish Categories**: Organized sections for easy navigation
- **Dietary Indicators**: Vegetarian options clearly marked
- **Featured Dishes**: Highlighted signature items
- **Detailed Descriptions**: Rich descriptions with ingredients and preparation methods

### 🗓️ Reservation System

- **Online Booking**: Complete reservation form with validation
- **Date & Time Selection**: Flexible scheduling options
- **Guest Count**: Specify number of diners
- **Special Occasions**: Birthday, anniversary, business dinner options
- **Special Requests**: Custom notes for dietary restrictions or preferences
- **Confirmation System**: Toast notifications for booking confirmations

### 🎨 Design & UX

- **Modern UI**: Clean, sophisticated design with elegant typography
- **Color Scheme**: Warm, inviting palette with deep browns and warm oranges
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: WCAG compliant with proper contrast and navigation
- **Mobile-First**: Responsive design that works perfectly on all devices

## 🛠️ Technologies Used

### Frontend

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Beautiful, customizable icons

### State Management & Data

- **React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation

### UI Components

- **Shadcn/ui**: High-quality, customizable components
- **Class Variance Authority**: Component variant management
- **Tailwind Merge**: Utility class merging
- **Tailwind CSS Animate**: Smooth animations

### Development Tools

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Restaurant-APP
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Menu.tsx        # Menu preview
│   └── Contact.tsx     # Contact section
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── MenuPage.tsx    # Full menu page
│   ├── Reservation.tsx # Reservation form
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static files
└── App.tsx             # Main app component
```

## 🎯 Key Features Implementation

### Navigation

- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Active section highlighting

### Menu System

- Categorized dish display
- Dietary restriction indicators
- Featured dish highlighting
- Responsive grid layout

### Reservation Form

- Form validation with React Hook Form
- Date and time picker integration
- Toast notifications for user feedback
- Responsive form layout

## 🎨 Customization

### Colors

The app uses a custom color palette defined in `tailwind.config.ts`:

- Deep browns for elegance
- Warm oranges for accents
- Cream colors for text
- Subtle gradients for backgrounds

### Typography

- Serif fonts for headings (elegant, restaurant-appropriate)
- Sans-serif for body text (readable, modern)

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔧 Development

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript interfaces for props
3. Follow the existing naming conventions
4. Add proper accessibility attributes

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain consistent spacing and typography
- Ensure responsive design principles

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created by AbdElRahman Saad-ElDin for the ITI Frontend React course.

---

**Byte & Bite** - Where culinary artistry meets exceptional service.

