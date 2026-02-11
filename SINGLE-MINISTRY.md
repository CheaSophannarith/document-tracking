# Single Ministry Document Tracking System
## ក្រសួងសុខាភិបាល - Ministry of Health

## 🏥 System Overview

This system is designed to manage **ONE MINISTRY ONLY** - the Ministry of Health (ក្រសួងសុខាភិបាល) with complete hierarchical structure:

```
Ministry of Health (ក្រសួងសុខាភិបាល)
├── Minister: H.E. Mam Bunheng (ឯកឧត្តម ម៉ម ប៊ុនហេង)
│
├── Department (នាយកដ្ឋាន)
│   ├── Director (នាយក)
│   ├── Multiple Offices
│   └── Department Staff
│
├── Office (ការិយាល័យ)
│   ├── Office Chief (ប្រធានការិយាល័យ)
│   └── Office Staff
│
└── Staff (បុគ្គលិក)
    ├── Officers
    └── Support Staff
```

## 📊 Ministry Structure

### Ministry Information
- **Name:** Ministry of Health
- **Khmer:** ក្រសួងសុខាភិបាល
- **Code:** MOH
- **Minister:** H.E. Mam Bunheng (ឯកឧត្តម ម៉ម ប៊ុនហេង)
- **Email Domain:** @health.gov.kh

### Statistics
- **6 Departments** (នាយកដ្ឋាន)
- **35 Offices** (ការិយាល័យ)
- **328 Staff** (បុគ្គលិក)
- **1,618 Documents** (ឯកសារ)

## 🏢 Departments

### 1. Department of Hospital Services
**Khmer:** នាយកដ្ឋានសេវាមន្ទីរពេទ្យ
**Director:** Dr. Sok Siphana (វេជ្ជបណ្ឌិត សុខ សុីផាណា)
- 8 Offices
- 86 Staff
- 342 Documents

**Offices:**
- Emergency Services Office (ការិយាល័យសេវាកម្មបន្ទាន់)
- Surgical Services Office (ការិយាល័យសេវាវះកាត់)
- Pediatric Office (ការិយាល័យកុមារ)
- Maternity Office (ការិយាល័យសម្ភព)

### 2. Department of Preventive Medicine
**Khmer:** នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ
**Director:** Dr. Chea Vibol (វេជ្ជបណ្ឌិត ជា វិបុល)
- 6 Offices
- 54 Staff
- 267 Documents

### 3. Department of Drugs and Food
**Khmer:** នាយកដ្ឋានឱសថ និងអាហារ
**Director:** Dr. Pich Boravy (វេជ្ជបណ្ឌិត ពេជ្រ បុរាវី)
- 5 Offices
- 42 Staff
- 198 Documents

### 4. Department of Planning and Health Information
**Khmer:** នាយកដ្ឋានផែនការ និងព័ត៌មានសុខាភិបាល
**Director:** Mr. Vanna Rithy (លោក វណ្ណា រិទ្ធី)
- 7 Offices
- 63 Staff
- 421 Documents

### 5. Department of Personnel
**Khmer:** នាយកដ្ឋានបុគ្គលិក
**Director:** Mrs. Sreypov Dara (លោកស្រី ស្រីពៅ ដារា)
- 4 Offices
- 38 Staff
- 156 Documents

### 6. Department of Finance
**Khmer:** នាយកដ្ឋានហិរញ្ញវត្ថុ
**Director:** Mr. Kimheng Ratanak (លោក គឹមហេង រតនៈ)
- 5 Offices
- 45 Staff
- 234 Documents

## 👥 User Hierarchy

### 1. Minister (រដ្ឋមន្ត្រី)
**Example:** H.E. Mam Bunheng
- **Access:** All ministry data
- **Permissions:** Full control
- **Email:** admin@health.gov.kh
- **Can:** Manage everything

### 2. Director (នាយក)
**Example:** Dr. Sok Siphana
- **Access:** Department level
- **Permissions:** Department management
- **Email:** director@health.gov.kh
- **Can:** Manage department, approve documents, manage staff

### 3. Office Chief (ប្រធានការិយាល័យ)
**Example:** Dr. Rath Dara
- **Access:** Office level
- **Permissions:** Office management
- **Email:** officer@health.gov.kh
- **Can:** Manage office, approve office documents

### 4. Officer (មន្ត្រី)
- **Access:** Assigned office
- **Permissions:** Upload, download
- **Can:** Create documents, view office documents

### 5. Viewer (អ្នកមើល)
- **Access:** Read-only
- **Permissions:** Download only
- **Can:** View and download permitted documents

## 🎯 System Features

### Dashboard (`/`)
- Ministry overview header
- Quick statistics
- Quick actions
- Recent documents

### Departments (`/departments`)
- Ministry header with stats
- List all departments
- Add new department
- View department cards

### Department Detail (`/departments/[id]`)
- Breadcrumb navigation
- Department info
- List of offices
- Department staff
- Add office button

### Documents (`/documents`)
- All ministry documents
- Filter by department
- Filter by office
- Search functionality
- Download with permissions

### Upload (`/upload`)
- Upload to ministry
- Select department
- Select office
- Add metadata

### Staff (`/users`)
- All ministry staff
- Filter by department
- Filter by office
- Filter by role
- Add/edit staff

### Reports (`/analytics`)
- Ministry statistics
- Department analytics
- Staff activity
- Document metrics

## 📱 Navigation Structure

```
├── Dashboard (Ministry Overview)
├── Departments (List all departments)
│   └── Department Detail (View specific department)
│       └── Office Detail (View specific office)
├── Documents (All documents)
├── Upload (Upload new documents)
├── Staff (All ministry staff)
├── Reports (Analytics & reports)
└── Settings (User settings)
```

## 🔐 Access Control

### Document Access by Role:

| Role | View | Upload | Download | Approve | Delete |
|------|------|--------|----------|---------|--------|
| Minister | All | ✅ | ✅ | ✅ | ✅ |
| Director | Dept | ✅ | ✅ | ✅ Dept | ❌ |
| Office Chief | Office | ✅ | ✅ | ✅ Office | ❌ |
| Officer | Office | ✅ | ✅ | ❌ | ❌ |
| Viewer | Permitted | ❌ | ✅ | ❌ | ❌ |

## 🎨 Branding

### Colors
- **Primary:** Emerald (#10B981) - Health/Medical theme
- **Logo:** Heart Pulse icon
- **Gradient:** Emerald 500 to Emerald 600

### Typography
- **Ministry Name:** Ministry of Health
- **Khmer Name:** ក្រសួងសុខាភិបាល
- **Font:** Montserrat (Latin), Khmer OS (Khmer)

## 📧 Email Structure

All emails follow the pattern: `name@health.gov.kh`

Examples:
- Minister: `admin@health.gov.kh`
- Director: `sok.siphana@health.gov.kh`
- Office Chief: `rath.dara@health.gov.kh`
- Officer: `kimheng.ratanak@health.gov.kh`

## 🚀 Getting Started

### Login Credentials

**Minister:**
- Email: admin@health.gov.kh
- Password: admin123

**Director:**
- Email: director@health.gov.kh
- Password: head123

**Office Chief:**
- Email: officer@health.gov.kh
- Password: officer123

### First Steps

1. **Login** at `/login`
2. **View Dashboard** - See ministry overview
3. **Browse Departments** - Navigate to `/departments`
4. **View a Department** - Click on any department
5. **See Offices** - View offices within department
6. **Manage Staff** - Go to `/users`
7. **Upload Documents** - Go to `/upload`

## 📊 Key Differences from Multi-Ministry System

### What Changed:
❌ **Removed:** Ministry selection/list page
❌ **Removed:** Multi-ministry navigation
❌ **Removed:** Ministry switching

✅ **Added:** Single ministry branding
✅ **Added:** Ministry header on all pages
✅ **Added:** Direct department access
✅ **Added:** Simplified navigation

### Focus Areas:
- ✅ Department management
- ✅ Office management
- ✅ Staff hierarchy
- ✅ Document tracking within ministry
- ✅ Ministry-specific branding

## 🎯 Use Cases

1. **Department Director**
   - View all department offices
   - Manage department staff
   - Approve department documents
   - Generate department reports

2. **Office Chief**
   - Manage office staff
   - Upload office documents
   - Approve office documents
   - Track office activity

3. **Staff Member**
   - Upload documents to office
   - Download permitted documents
   - View office information
   - Track own documents

4. **Minister**
   - Overview of entire ministry
   - Access all documents
   - Approve ministry-wide policies
   - View comprehensive reports

---

**System Type:** Single Ministry Management
**Ministry:** Ministry of Health (ក្រសួងសុខាភិបាល)
**Version:** 2.0 - Single Ministry Focus
**Last Updated:** February 11, 2026
