# Ministry Document Tracking System

A modern, mobile-first document tracking system designed for ministry and government operations. Built with Nuxt 4, Vue 3, and Tailwind CSS 4.

## Features

### Core Functionality
- **Document Management** - Upload, track, and organize ministry documents
- **Department Organization** - Categorize documents by department/division
- **Status Tracking** - Monitor approval workflows (Pending, Review, Approved, Rejected)
- **Reports & Analytics** - Real-time insights and document metrics
- **Advanced Search** - Powerful search and filtering capabilities
- **User Management** - Role-based access control

### Design Features
- **Modern 2026 Aesthetics** - Glassmorphism effects, smooth animations, and contemporary UI
- **Mobile-First Design** - Optimized for smartphones, tablets, and desktop
- **Touch-Friendly** - Large tap targets and mobile gestures
- **Responsive Layout** - Adaptive sidebar and grid layouts
- **Dark Mode** - Full dark/light theme support with system preference detection
- **Professional Color Scheme** - Blue-indigo gradient suitable for government use

### Mobile & Tablet Support
- ✅ **Mobile Sidebar** - Slide-out navigation with overlay
- ✅ **Touch Gestures** - Tap, swipe, and drag interactions
- ✅ **Responsive Grid** - Adaptive layouts for all screen sizes
- ✅ **Mobile Search** - Optimized search interface
- ✅ **Touch-Friendly Forms** - Large input fields and buttons
- ✅ **Mobile Upload** - Drag-and-drop or tap to upload files
- ✅ **Swipe Actions** - Quick actions on document cards

## Tech Stack

- **Framework**: Nuxt 4.3.1
- **UI Library**: Vue 3.5
- **Styling**: Tailwind CSS 4.1
- **Components**: Shadcn-nuxt
- **Icons**: Lucide Icons
- **Typography**: Montserrat Font
- **Animations**: tw-animate-css

## Project Structure

```
app/
├── assets/
│   └── css/
│       └── tailwind.css          # Global styles and theme
├── components/
│   ├── ui/                       # Shadcn UI components
│   ├── ActionCard.vue            # Quick action cards
│   ├── DocumentCard.vue          # Document display card
│   ├── Header.vue                # Top navigation header
│   ├── MobileLayout.vue          # Mobile-responsive layout wrapper
│   ├── Sidebar.vue               # Responsive sidebar navigation
│   ├── SidebarItem.vue           # Sidebar navigation items
│   └── StatsCard.vue             # Statistics display cards
├── pages/
│   ├── index.vue                 # Dashboard page
│   ├── documents.vue             # Documents list page
│   ├── upload.vue                # File upload page
│   ├── analytics.vue             # Reports & analytics
│   ├── categories.vue            # Department management
│   └── settings.vue              # User settings
└── app.vue                       # Root application component
```

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Mobile Testing

The application is fully responsive and works on:
- 📱 **Mobile devices** (320px and up)
- 📱 **Tablets** (768px and up)
- 💻 **Desktop** (1024px and up)

### Testing on Mobile Devices

1. **Chrome DevTools**: Open DevTools > Toggle device toolbar (Ctrl+Shift+M)
2. **Network Testing**: Access via IP - `npm run dev -- --host`
3. **Physical Device**: Connect to `http://<your-ip>:3000`

## Customization

### Color Scheme
The system uses a professional blue-indigo color palette defined in `app/assets/css/tailwind.css` using modern oklch color space:
- Primary: Blue (#3B82F6)
- Secondary: Indigo (#6366F1)
- Accent: Violet for highlights

### Ministry Branding
To customize for your ministry:
1. Update logo and name in `components/Sidebar.vue`
2. Modify color scheme in `app/assets/css/tailwind.css`
3. Update department names in `pages/categories.vue`
4. Customize document types and workflows

### Mobile Behavior
- Sidebar automatically converts to slide-out menu on mobile
- Cards stack vertically on small screens
- Touch-friendly 44px minimum tap targets
- Optimized font sizes for mobile readability

## Key Features for Ministry Use

### Department Management
- Finance Department
- Human Resources
- Communications
- Planning & Development
- Administration
- Legal Affairs

### Document Workflows
- Upload documents with metadata
- Department categorization
- Approval status tracking
- User audit trail
- Search and filter capabilities

### Security Features
- Role-based access control
- Document status tracking
- User activity logging
- Secure file upload

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Automatic optimization via @nuxt/image
- **Code Splitting**: Route-based code splitting
- **Dark Mode**: CSS-based, no JavaScript required
- **Mobile Optimized**: Reduced animations on mobile devices

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Screen reader friendly
- Focus visible states

## License

MIT

## Support

For issues or questions, please contact your system administrator.
