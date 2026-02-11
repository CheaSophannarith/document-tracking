# Deployment Guide - Ministry Document Tracking System
## Kingdom of Cambodia (ព្រះរាជាណាចក្រកម្ពុជា)

## Overview
This document tracking system is designed for multi-department ministry operations in Cambodia with comprehensive user management and permission controls.

## Features Implemented

### 1. User Authentication System
- **Login Page** (`/login`)
  - Email/username and password authentication
  - Remember me functionality
  - Demo accounts for testing
  - Khmer language support

### 2. User Roles & Permissions

#### Administrator
- Full system access
- Manage all departments
- Manage all users
- Upload, download, approve, delete documents
- Access: `admin@ministry.gov.kh` / `admin123`

#### Department Head
- Manage department users
- Upload and download documents
- Approve documents
- View department analytics
- Access: `head@ministry.gov.kh` / `head123`

#### Officer
- Upload documents
- Download documents
- View assigned documents
- Access: `officer@ministry.gov.kh` / `officer123`

#### Viewer
- Download documents only
- View document lists
- Read-only access

### 3. Permission System

Each user has specific permissions:
- `upload` - Can upload new documents
- `download` - Can download documents
- `approve` - Can approve/reject documents
- `delete` - Can delete documents
- `manage_users` - Can add/edit/delete users
- `manage_departments` - Can manage department structure

### 4. Multi-User Department System

**Department Structure:**
- Finance Department (ការិយាល័យហិរញ្ញវត្ថុ)
- Human Resources (ធនធានមនុស្ស)
- Communications (ទំនាក់ទំនង)
- Planning & Development (ផែនការនិងអភិវឌ្ឍន៍)
- Administration (រដ្ឋបាល)
- Legal Affairs (កិច្ចការច្បាប់)

**Each Department Can:**
- Have multiple users with different roles
- Upload and manage department documents
- Track document workflows
- Generate department reports

### 5. Document Management

**Upload Features:**
- User tracking (who uploaded)
- Department assignment
- Metadata tags
- File type validation
- Size limits (50MB per file)
- Batch upload support

**Download Features:**
- Permission-based access
- Download tracking
- Audit trail logging
- Format preservation

### 6. User Management Page (`/users`)
- View all ministry users
- Filter by department and role
- Edit user permissions
- Activate/deactivate accounts
- Khmer name support
- Last activity tracking

## Installation

### Prerequisites
- Node.js 18+ or Bun
- npm or yarn or pnpm or bun

### Setup Steps

1. **Install Dependencies**
```bash
npm install
# or
bun install
```

2. **Environment Configuration**
Create `.env` file:
```env
# API Configuration (when ready for backend)
API_URL=http://localhost:4000
API_KEY=your_api_key

# File Upload Configuration
MAX_FILE_SIZE=52428800  # 50MB in bytes
ALLOWED_FILE_TYPES=pdf,doc,docx,xls,xlsx,ppt,pptx

# Database (for production)
DATABASE_URL=your_database_url
```

3. **Development Server**
```bash
npm run dev
# or
bun run dev
```

Access at: `http://localhost:3001`

4. **Build for Production**
```bash
npm run build
# or
bun run build
```

5. **Preview Production Build**
```bash
npm run preview
```

## User Access Levels

### Test Accounts

| Role | Email | Password | Permissions |
|------|-------|----------|-------------|
| Administrator | admin@ministry.gov.kh | admin123 | All permissions |
| Dept. Head | head@ministry.gov.kh | head123 | Manage dept, Upload, Download, Approve |
| Officer | officer@ministry.gov.kh | officer123 | Upload, Download |

## Security Features

### Authentication
- Session-based authentication
- Password hashing (to be implemented with backend)
- Remember me with secure tokens
- Auto-logout on inactivity

### Authorization
- Role-based access control (RBAC)
- Permission-based feature access
- Department-level isolation
- Audit logging

### File Security
- File type validation
- Size restrictions
- Malware scanning (recommended)
- Secure file storage
- Access logging

## Database Schema (Recommended)

### Users Table
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  name_kh VARCHAR(255),  -- Khmer name
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'department_head', 'officer', 'viewer'),
  department_id INT,
  permissions JSON,
  status ENUM('active', 'inactive') DEFAULT 'active',
  last_active TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

### Documents Table
```sql
CREATE TABLE documents (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  file_path VARCHAR(512) NOT NULL,
  file_type VARCHAR(50),
  file_size BIGINT,
  department_id INT,
  uploaded_by INT,
  status ENUM('pending', 'review', 'approved', 'rejected'),
  tags JSON,
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id),
  FOREIGN KEY (uploaded_by) REFERENCES users(id)
);
```

### Departments Table
```sql
CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  name_kh VARCHAR(255),
  description TEXT,
  head_user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (head_user_id) REFERENCES users(id)
);
```

### Permissions Table
```sql
CREATE TABLE permissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Download Logs Table
```sql
CREATE TABLE download_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  document_id INT,
  user_id INT,
  ip_address VARCHAR(45),
  downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (document_id) REFERENCES documents(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## API Endpoints (Backend Integration)

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - List all users (admin only)
- `POST /api/users` - Create new user (admin only)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Documents
- `GET /api/documents` - List documents (filtered by permissions)
- `POST /api/documents` - Upload document
- `GET /api/documents/:id` - Get document details
- `GET /api/documents/:id/download` - Download document
- `PUT /api/documents/:id` - Update document
- `DELETE /api/documents/:id` - Delete document (admin only)

### Departments
- `GET /api/departments` - List departments
- `GET /api/departments/:id/users` - Get department users
- `GET /api/departments/:id/documents` - Get department documents

## Mobile Deployment

### Progressive Web App (PWA)
The system can be installed as a PWA on mobile devices:

1. Visit the website on mobile browser
2. Tap "Add to Home Screen"
3. Use like a native app

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Cambodia-Specific Features

### Language Support
- English interface
- Khmer (ភាសាខ្មែរ) labels and names
- Bilingual user names
- Government terminology

### Government Branding
- Royal Government of Cambodia branding
- Ministry-appropriate color scheme
- Official document templates
- Khmer calendar support (future)

## Production Checklist

- [ ] Set up production database
- [ ] Configure backend API
- [ ] Implement real authentication
- [ ] Set up file storage (S3/local)
- [ ] Configure HTTPS/SSL
- [ ] Set up backup system
- [ ] Implement email notifications
- [ ] Add audit logging
- [ ] Security testing
- [ ] Performance optimization
- [ ] Mobile testing on real devices

## Support & Maintenance

### Regular Tasks
- User account management
- Database backups
- Security updates
- Performance monitoring
- Log analysis

### Contact
For technical support, contact your system administrator.

## License
Proprietary - Royal Government of Cambodia
© 2026 Ministry Document Tracking System
