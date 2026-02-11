# Ministry Hierarchy & User Management

## 🏢 Organizational Structure

The system supports a **4-level hierarchical structure** for the Ministry of Health:

```
Ministry of Health (ក្រសួងសុខាភិបាល)
│
├── Department (នាយកដ្ឋាន) - Example: Department of Hospital Services
│   ├── Department Boss: Director (នាយក)
│   ├── Department Users: Direct staff assigned to department
│   │   └── Roles: Department Coordinator, Administrative Officer
│   │
│   └── Offices (ការិយាល័យ) - Multiple offices per department
│       ├── Office Boss: Office Chief (ប្រធានការិយាល័យ)
│       └── Office Users: Staff assigned to specific office
│           └── Roles: Specialists, Coordinators, Assistants
```

## 👥 User Assignment Levels

### 1. Department-Level Users
**Direct assignment to department (not to any specific office)**

**Example:**
- Department: Department of Hospital Services
- Boss: Dr. Sok Siphana (Director)
- Department Users:
  - Mr. Kimheng Ratanak - Department Coordinator
  - Mrs. Chea Mony - Administrative Officer

**Responsibilities:**
- Handle department-wide tasks
- Coordinate between offices
- Manage department-level documents
- Report directly to Department Director

**Access:**
- Can upload/download documents for the entire department
- Can see all offices within the department
- Can view documents from all offices in their department

### 2. Office-Level Users
**Assigned to specific office within a department**

**Example:**
- Department: Department of Hospital Services
- Office: Emergency Services Office
- Boss: Dr. Rath Dara (Office Chief)
- Office Users:
  - Dr. Lim Sophea - Emergency Specialist
  - Mrs. Chantha Bopha - Nurse Coordinator
  - Mr. Sok Vichet - Administrative Assistant

**Responsibilities:**
- Handle office-specific tasks
- Manage office daily operations
- Upload office documents
- Report to Office Chief

**Access:**
- Can upload/download documents for their office
- Can view office-specific information
- Limited to office scope unless given higher permissions

## 📊 Boss Hierarchy

### 1. Ministry Level
- **Role:** Minister (រដ្ឋមន្ត្រី)
- **Example:** H.E. Mam Bunheng
- **Access:** Full ministry access
- **Manages:** All departments

### 2. Department Level
- **Role:** Department Director (នាយក)
- **Example:** Dr. Sok Siphana - Director of Hospital Services
- **Access:** Department-wide access
- **Manages:**
  - All offices in the department
  - Department-level staff
  - Department documents

### 3. Office Level
- **Role:** Office Chief (ប្រធានការិយាល័យ)
- **Example:** Dr. Rath Dara - Chief of Emergency Services Office
- **Access:** Office-level access
- **Manages:**
  - Office staff
  - Office documents
  - Office operations

## 📄 Document Tracking

### Cross-Department Document Access

Users can track documents in two ways:

#### 1. Same Department Only (Default)
- View documents within your own department
- See documents from all offices in your department
- Filtered view for department-specific work

#### 2. All Departments (Cross-Department)
- View documents from other departments
- Filter by specific department
- Useful for inter-department collaboration
- Requires appropriate permissions

### Document Permissions by Role

| Role | Own Office | Own Department | Other Departments |
|------|-----------|----------------|-------------------|
| Minister | ✅ Full Access | ✅ Full Access | ✅ Full Access |
| Director | ✅ Full Access | ✅ Full Access | 👁️ View Only* |
| Office Chief | ✅ Full Access | 👁️ View Only | ❌ No Access |
| Dept. User | 👁️ View | ✅ Upload/Download | ❌ No Access |
| Office User | ✅ Upload/Download | 👁️ View | ❌ No Access |
| Viewer | 👁️ View | 👁️ View | ❌ No Access |

*With permission settings

## 🔄 User Management Workflow

### Adding Department User
1. Navigate to Department Detail page
2. Click "Add Staff" in Department Staff section
3. Assign user to department (no office selection)
4. User gets department-wide access

### Adding Office User
1. Navigate to Office Detail page
2. Click "Add Staff" in Office Staff section
3. Assign user to specific office
4. User gets office-specific access

## 📱 Page Structure

### Department Detail Page (`/departments/[id]`)
Shows:
- Department header with director info
- List of offices in department
- **Department staff** (direct to department)
- Department documents with cross-department filter

### Office Detail Page (`/offices/[id]`)
Shows:
- Office header with office chief info
- **Office staff** (assigned to office)
- Office-specific documents

## 🎯 Real Example

### Department of Hospital Services

**Department Boss:**
- Dr. Sok Siphana - Department Director

**Department Users (Direct):**
- Mr. Kimheng Ratanak - Department Coordinator
- Mrs. Chea Mony - Administrative Officer

**Offices:**

1. **Emergency Services Office**
   - Boss: Dr. Rath Dara (Office Chief)
   - Users:
     - Dr. Lim Sophea - Emergency Specialist
     - Mrs. Chantha Bopha - Nurse Coordinator
     - Mr. Sok Vichet - Administrative Assistant

2. **Surgical Services Office**
   - Boss: Dr. Mey Sophal (Office Chief)
   - Users:
     - [Office-specific staff]

3. **Pediatric Office**
   - Boss: Dr. Chan Sreypov (Office Chief)
   - Users:
     - [Office-specific staff]

4. **Maternity Office**
   - Boss: Dr. Lim Bopha (Office Chief)
   - Users:
     - [Office-specific staff]

## 🔐 Access Control Summary

1. **Department Users** can:
   - Upload documents to department
   - View all department offices
   - Access department-wide documents
   - Coordinate between offices

2. **Office Users** can:
   - Upload documents to their office
   - View office information
   - Access office-specific documents
   - Work within office scope

3. **Cross-Department** tracking:
   - Toggle between "This Department" and "All Departments"
   - Filter by specific department when viewing all
   - Useful for collaboration and reporting

---

**System Type:** Single Ministry with Multi-Level Hierarchy
**Ministry:** Ministry of Health (ក្រសួងសុខាភិបាល)
**Structure:** Ministry → Department → Office → Users
**Document Scope:** Department-level with cross-department visibility
**Last Updated:** February 11, 2026
