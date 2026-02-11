# Cambodia Ministry Hierarchical Structure
## រចនាសម្ព័ន្ធក្រសួងកម្ពុជា

This document tracking system implements the complete hierarchical structure of Cambodian government ministries.

## 📊 Organizational Hierarchy

```
Kingdom of Cambodia (ព្រះរាជាណាចក្រកម្ពុជា)
│
└─ Royal Government (រាជរដ្ឋាភិបាល)
   │
   ├─ Ministry (ក្រសួង)
   │  │
   │  ├─ Department (នាយកដ្ឋាន)
   │  │  │
   │  │  ├─ Office (ការិយាល័យ)
   │  │  │  │
   │  │  │  ├─ Staff (បុគ្គលិក)
   │  │  │  └─ Documents (ឯកសារ)
   │  │  │
   │  │  └─ Office Chief (ប្រធានការិយាល័យ)
   │  │
   │  └─ Director (នាយក)
   │
   └─ Minister (រដ្ឋមន្ត្រី)
```

## 🏛️ Structure Levels

### Level 1: Ministry (ក្រសួង)
**Example:** Ministry of Health (ក្រសួងសុខាភិបាល)

**Headed by:** Minister (រដ្ឋមន្ត្រី)
- H.E. Mam Bunheng (ឯកឧត្តម ម៉ម ប៊ុនហេង)

**Contains:**
- Multiple Departments (12 departments)
- Total Offices (48 offices)
- Total Staff (342 staff members)
- Total Documents (1,284 documents)

**Ministry Code:** MOH

---

### Level 2: Department (នាយកដ្ឋាន)
**Example:** Department of Hospital Services (នាយកដ្ឋានសេវាមន្ទីរពេទ្យ)

**Headed by:** Director (នាយក)
- Dr. Sok Siphana (វេជ្ជបណ្ឌិត សុខ សុីផាណា)

**Contains:**
- Multiple Offices (8 offices)
- Department Staff (86 staff members)
- Department Documents (342 documents)

**Responsibilities:**
- Hospital management and services
- Staff coordination
- Document approval and tracking
- Office supervision

---

### Level 3: Office (ការិយាល័យ)
**Example:** Emergency Services Office (ការិយាល័យសេវាកម្មបន្ទាន់)

**Headed by:** Office Chief (ប្រធានការិយាល័យ)
- Dr. Rath Dara (វេជ្ជបណ្ឌិត រ័ត្ន ដារា)

**Contains:**
- Office Staff (24 staff members)
- Office Documents (89 documents)

**Responsibilities:**
- Daily operations
- Staff management
- Document processing
- Service delivery

---

### Level 4: Staff (បុគ្គលិក)
**Positions:**
- **Director (នាយក)** - Department level
- **Office Chief (ប្រធានការិយាល័យ)** - Office level
- **Officer (មន្ត្រី)** - Staff level
- **Clerk (ស្មៀន)** - Support staff

**Staff Information:**
- Full Name (Khmer & English)
- Position/Role
- Email (@ministry.gov.kh)
- Office Assignment
- Department Assignment
- Permissions

---

## 📋 Complete Example Structure

### Ministry of Health (MOH)

```
Ministry of Health (ក្រសួងសុខាភិបាល)
Minister: H.E. Mam Bunheng
├─ Department of Hospital Services (នាយកដ្ឋានសេវាមន្ទីរពេទ្យ)
│  Director: Dr. Sok Siphana
│  ├─ Emergency Services Office (ការិយាល័យសេវាកម្មបន្ទាន់)
│  │  Chief: Dr. Rath Dara
│  │  ├─ Dr. Kimheng Ratanak (Emergency Physician)
│  │  ├─ Nurse Sreypov Chan (Head Nurse)
│  │  └─ Officer Dara Sok (Administrator)
│  │
│  ├─ Surgical Services Office (ការិយាល័យសេវាវះកាត់)
│  │  Chief: Dr. Mey Sophal
│  │  └─ [Staff members...]
│  │
│  ├─ Pediatric Office (ការិយាល័យកុមារ)
│  │  Chief: Dr. Chan Sreypov
│  │  └─ [Staff members...]
│  │
│  └─ Maternity Office (ការិយាល័យសម្ភព)
│     Chief: Dr. Lim Bopha
│     └─ [Staff members...]
│
├─ Department of Preventive Medicine (នាយកដ្ឋានវេជ្ជសាស្រ្តបង្ការ)
│  Director: Dr. Chea Vibol
│  ├─ Vaccination Office
│  ├─ Disease Control Office
│  └─ [More offices...]
│
├─ Department of Drugs and Food (នាយកដ្ឋានឱសថ និងអាហារ)
│  Director: Dr. Pich Boravy
│  └─ [Offices...]
│
└─ Department of Planning (នាយកដ្ឋានផែនការ)
   Director: Mr. Vanna Rithy
   └─ [Offices...]
```

## 🎯 Document Tracking Path

Each document is tracked with its complete hierarchical path:

**Format:**
```
Ministry > Department > Office > Document
```

**Example:**
```
Ministry of Health
  > Department of Hospital Services
    > Emergency Services Office
      > Emergency Protocol Guidelines 2026.pdf
```

**Document Metadata:**
- Document Name
- File Type (PDF, DOCX, etc.)
- File Size
- Uploaded By (Staff member)
- Upload Date/Time
- Ministry
- Department
- Office
- Tags
- Status (Pending, Review, Approved, Rejected)
- Approval Chain

## 👥 User Roles & Hierarchy

### 1. Minister Level (រដ្ឋមន្ត្រី)
- **Access:** All ministry data
- **Permissions:** Full control
- **Can:** Approve all documents, manage all staff

### 2. Director Level (នាយក)
- **Access:** Department level
- **Permissions:** Department management
- **Can:** Approve department documents, manage department staff

### 3. Office Chief Level (ប្រធានការិយាល័យ)
- **Access:** Office level
- **Permissions:** Office management
- **Can:** Approve office documents, manage office staff

### 4. Officer Level (មន្ត្រី)
- **Access:** Assigned office
- **Permissions:** Upload, download
- **Can:** Create and edit documents, download permitted files

### 5. Viewer Level (អ្នកមើល)
- **Access:** Read-only
- **Permissions:** Download only
- **Can:** View and download permitted documents

## 📁 System Pages

### 1. Ministries Page (`/ministries`)
- List all ministries
- View ministry statistics
- Add new ministry (admin only)
- Ministry cards with:
  - Ministry name (English & Khmer)
  - Minister name
  - Department count
  - Office count
  - Staff count
  - Document count

### 2. Ministry Detail Page (`/ministries/[id]`)
- Ministry header with info
- Tabs:
  - **Departments:** List all departments
  - **Staff:** All ministry staff
  - **Documents:** All ministry documents
- Add department functionality
- View statistics

### 3. Department Page (`/departments/[id]`)
- Breadcrumb navigation
- Department header
- List of offices
- Department staff
- Department documents
- Add office functionality

### 4. User Management (`/users`)
- Filter by ministry
- Filter by department
- Filter by office
- View user hierarchy
- Assign to office/department
- Set permissions

### 5. Document Management (`/documents`)
- Filter by ministry
- Filter by department
- Filter by office
- View document path
- Track approval chain
- Download with permissions

## 🔐 Permission System

### Document Permissions by Level:

| Level | Upload | Download | Approve | Delete | Manage Users |
|-------|--------|----------|---------|--------|--------------|
| Minister | ✅ | ✅ | ✅ | ✅ | ✅ |
| Director | ✅ | ✅ | ✅ Dept | ❌ | ✅ Dept |
| Office Chief | ✅ | ✅ | ✅ Office | ❌ | ✅ Office |
| Officer | ✅ | ✅ | ❌ | ❌ | ❌ |
| Viewer | ❌ | ✅ | ❌ | ❌ | ❌ |

## 📊 Statistics Tracked

### Ministry Level:
- Total departments
- Total offices
- Total staff
- Total documents
- Documents by status
- Staff by department

### Department Level:
- Total offices
- Department staff
- Department documents
- Documents by status
- Staff by office

### Office Level:
- Office staff count
- Office documents count
- Documents by status
- Active staff members

## 🎨 Features

### Hierarchical Navigation
- Breadcrumbs showing full path
- Back navigation buttons
- Drill-down from ministry to office
- Filter at any level

### Search & Filter
- Search across all levels
- Filter by ministry
- Filter by department
- Filter by office
- Filter by staff member

### Document Tracking
- Full path visibility
- Approval chain tracking
- Version control
- Access logging
- Download tracking

### Staff Management
- Assign to ministry
- Assign to department
- Assign to office
- Set role/position
- Set permissions
- Track activity

## 🚀 Usage

1. **Navigate to Ministries** (`/ministries`)
2. **Select a Ministry** (e.g., Ministry of Health)
3. **View Departments** within the ministry
4. **Select a Department** (e.g., Hospital Services)
5. **View Offices** within the department
6. **See Staff & Documents** at each level
7. **Upload Documents** to specific office
8. **Track Document** through approval chain

---

**System Version:** 2.0
**Structure:** 4-Level Hierarchy (Ministry > Department > Office > Staff)
**Last Updated:** February 11, 2026
**Kingdom of Cambodia** | **ព្រះរាជាណាចក្រកម្ពុជា**
