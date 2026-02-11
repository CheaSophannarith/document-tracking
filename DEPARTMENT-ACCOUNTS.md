# Department Account System

## 🔐 Account Types

The system supports **3 different account types** with different access levels:

### 1. Ministry Account
- **Access Level:** Full Ministry
- **Example:** Minister - admin@health.gov.kh
- **Can See:** All departments, all offices, all documents
- **Branding:** Green (Emerald) - Heart Pulse icon

### 2. Department Account
- **Access Level:** Single Department Only
- **Example:** Department Director - hospital@health.gov.kh
- **Can See:** Only their department, all offices within department
- **Branding:** Blue - Building icon with "DEPT" badge
- **Cannot See:** Other departments' data

### 3. Office Account
- **Access Level:** Single Office Only
- **Example:** Office Chief - emergency@health.gov.kh
- **Can See:** Only their office, only their office documents
- **Branding:** Violet - Briefcase icon with "OFFICE" badge
- **Cannot See:** Other offices or departments

## 📊 Login Credentials

### Ministry Level
```
Email: admin@health.gov.kh
Password: admin123
Role: Minister
Access: Full Ministry
```

### Department Level
```
Hospital Services:
Email: hospital@health.gov.kh
Password: dept123
Role: Department Director
Access: Department of Hospital Services only

Preventive Medicine:
Email: preventive@health.gov.kh
Password: dept123
Role: Department Director
Access: Department of Preventive Medicine only

Drugs and Food:
Email: drugs@health.gov.kh
Password: dept123
Role: Department Director
Access: Department of Drugs and Food only
```

### Office Level
```
Emergency Services Office:
Email: emergency@health.gov.kh
Password: office123
Role: Office Chief
Access: Emergency Services Office only
```

## 🎨 Visual Differences

### Sidebar Branding

**Ministry Account:**
- Icon: Heart Pulse (🫀)
- Color: Emerald gradient
- Title: "Ministry of Health"
- Subtitle: "ក្រសួងសុខាភិបាល"

**Department Account:**
- Icon: Building (🏢)
- Color: Blue gradient
- Badge: "DEPT"
- Title: Department name (e.g., "Department of Hospital Services")
- Subtitle: Khmer department name

**Office Account:**
- Icon: Briefcase (💼)
- Color: Violet gradient
- Badge: "OFFICE"
- Title: Office name (e.g., "Emergency Services Office")
- Subtitle: Khmer office name

### Dashboard Header

**Ministry:** Shows Ministry of Health with emerald gradient
**Department:** Shows department name with blue gradient and director info
**Office:** Shows office name with violet gradient, department, and chief info

## 📄 Document Filtering

### Ministry Account
- Sees: All documents from all departments
- Filter: Can filter by any department

### Department Account
- Sees: Only documents from their department
- Filter: Cannot see other departments' documents
- Scope: All offices within their department

### Office Account
- Sees: Only documents from their office
- Filter: Cannot see other offices' documents
- Scope: Single office only

## 🔐 Permissions by Account Type

| Permission | Ministry | Department | Office |
|-----------|----------|------------|--------|
| View All Departments | ✅ | ❌ | ❌ |
| View Own Department | ✅ | ✅ | ✅ |
| View All Offices | ✅ | ✅ (in dept) | ❌ |
| View Own Office | ✅ | ✅ | ✅ |
| Upload Documents | ✅ | ✅ (dept only) | ✅ (office only) |
| Download Documents | ✅ | ✅ (dept only) | ✅ (office only) |
| Approve Documents | ✅ | ✅ (dept only) | ✅ (office only) |
| Manage Users | ✅ | ✅ (dept only) | ❌ |
| Manage Departments | ✅ | ❌ | ❌ |
| Cross-Dept Access | ✅ | ❌ | ❌ |

## 🎯 Use Cases

### 1. Department Director Login
**Scenario:** Director of Hospital Services logs in

**What they see:**
- Dashboard shows "Department of Hospital Services" header
- Sidebar shows department branding (blue)
- Documents: Only Hospital Services documents
- Offices: Emergency, Surgical, Pediatric, Maternity (all within dept)
- Staff: All staff in Hospital Services department

**What they CAN do:**
- Manage all offices in their department
- Upload/approve documents for their department
- Add staff to their department
- View statistics for their department

**What they CANNOT do:**
- See other departments (Preventive Medicine, Drugs, etc.)
- Access other departments' documents
- Manage ministry-wide settings

### 2. Office Chief Login
**Scenario:** Chief of Emergency Services Office logs in

**What they see:**
- Dashboard shows "Emergency Services Office" header
- Sidebar shows office branding (violet)
- Documents: Only Emergency Office documents
- Staff: Only Emergency Office staff
- Department info showing they belong to Hospital Services

**What they CAN do:**
- Upload documents to their office
- Approve office documents
- View office statistics
- Manage office daily operations

**What they CANNOT do:**
- See other offices (Surgical, Pediatric, etc.)
- Access department-wide documents
- Manage department staff
- View other departments

### 3. Minister Login
**Scenario:** Minister logs in

**What they see:**
- Dashboard shows "Ministry of Health" header
- Sidebar shows ministry branding (emerald)
- All departments listed
- All documents from all departments
- Complete ministry overview

**What they CAN do:**
- Everything - full access
- View all departments
- Access all documents
- Manage all users
- Cross-department operations

## 🔄 Account Structure in localStorage

```javascript
// Ministry Account
{
  email: 'admin@health.gov.kh',
  name: 'Dr. Mam Bunheng',
  role: 'Minister',
  accountType: 'ministry',
  department: null,
  departmentId: null,
  permissions: ['all']
}

// Department Account
{
  email: 'hospital@health.gov.kh',
  name: 'Dr. Sok Siphana',
  role: 'Department Director',
  accountType: 'department',
  department: 'Department of Hospital Services',
  departmentId: '1',
  departmentKh: 'នាយកដ្ឋានសេវាមន្ទីរពេទ្យ',
  permissions: ['upload', 'download', 'approve', 'manage_users', 'view_department']
}

// Office Account
{
  email: 'emergency@health.gov.kh',
  name: 'Dr. Rath Dara',
  role: 'Office Chief',
  accountType: 'office',
  department: 'Department of Hospital Services',
  departmentId: '1',
  office: 'Emergency Services Office',
  officeId: '1',
  officeKh: 'ការិយាល័យសេវាកម្មបន្ទាន់',
  permissions: ['upload', 'download', 'approve', 'view_office']
}
```

## 🚀 Testing Different Accounts

1. **Test Ministry Account:**
   - Login: admin@health.gov.kh / admin123
   - Should see: All departments, all data

2. **Test Department Account:**
   - Login: hospital@health.gov.kh / dept123
   - Should see: Only Hospital Services department
   - Try accessing: Preventive Medicine (should be blocked)

3. **Test Office Account:**
   - Login: emergency@health.gov.kh / office123
   - Should see: Only Emergency Office
   - Try accessing: Other offices (should be blocked)

---

**System Type:** Multi-Account Hierarchy
**Account Types:** Ministry, Department, Office
**Access Control:** Role-based with strict scoping
**Last Updated:** February 11, 2026
