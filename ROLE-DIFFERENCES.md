# Role Differences: Department vs Office Accounts

## 🎨 Visual Differences

### Sidebar Branding

| Feature | Ministry Account | Department Account | Office Account |
|---------|-----------------|-------------------|----------------|
| **Icon** | Heart Pulse 🫀 | Building 🏢 | Briefcase 💼 |
| **Color** | Emerald (Green) | Blue | Violet (Purple) |
| **Badge** | None | "DEPT" | "OFFICE" |
| **Title** | Ministry of Health | Department Name | Office Name |
| **Subtitle** | ក្រសួងសុខាភិបាល | Department Khmer | Office Khmer |

### Dashboard Header

| Account Type | Header Color | Icon | Information Shown |
|-------------|-------------|------|-------------------|
| **Ministry** | Emerald Gradient | Heart Pulse | Ministry name + Khmer |
| **Department** | Blue Gradient | Building | Department + Director + Stats |
| **Office** | Violet Gradient | Briefcase | Office + Chief + Department |

## 📋 Navigation Menu Differences

### Ministry Account Menu
```
✓ Dashboard
✓ Departments (All departments)
✓ Documents (All documents)
✓ Upload
✓ Staff (All ministry staff)
✓ Reports (Ministry-wide)
✓ Settings
```

### Department Account Menu
```
✓ Dashboard (Department overview)
✓ Offices (Offices in their department only)
✓ Documents (Department documents only)
✓ Upload (Upload to department)
✓ Staff (Department staff only)
✓ Reports (Department reports)
✓ Settings
```

### Office Account Menu
```
✓ Dashboard (Office overview)
✓ Documents (Office documents only)
✓ Upload (Upload to office)
✓ Staff (Office staff only)
✓ My Office (Office details)
✓ Settings
```

## 📊 Quick Actions Differences

### Ministry Account
1. **View Departments** - Browse all departments
2. **Upload Document** - Add new documents
3. **Manage Staff** - View and manage staff

### Department Account
1. **Department Offices** - View all offices in department
2. **Upload Document** - Add department documents
3. **Department Staff** - Manage department staff

### Office Account
1. **Office Documents** - View office documents
2. **Upload Document** - Add office documents
3. **Office Details** - View office information

## 🔐 Permission Differences

### Document Access

| Permission | Ministry | Department | Office |
|-----------|----------|------------|--------|
| View All Documents | ✅ All | ⚠️ Department Only | ❌ Office Only |
| Upload Documents | ✅ Anywhere | ⚠️ Department Only | ❌ Office Only |
| Download Documents | ✅ All | ⚠️ Department Only | ❌ Office Only |
| Approve Documents | ✅ All | ⚠️ Department Only | ❌ Office Only |
| Delete Documents | ✅ Yes | ❌ No | ❌ No |

### Staff Management

| Permission | Ministry | Department | Office |
|-----------|----------|------------|--------|
| View All Staff | ✅ Yes | ⚠️ Department Only | ❌ Office Only |
| Add Staff | ✅ Anywhere | ⚠️ Department Only | ❌ No |
| Edit Staff | ✅ All | ⚠️ Department Only | ❌ No |
| Remove Staff | ✅ Yes | ⚠️ Department Only | ❌ No |
| Change Roles | ✅ Yes | ❌ No | ❌ No |

### Department/Office Management

| Permission | Ministry | Department | Office |
|-----------|----------|------------|--------|
| Create Department | ✅ Yes | ❌ No | ❌ No |
| Edit Department | ✅ Yes | ⚠️ Own Only | ❌ No |
| Create Office | ✅ Yes | ⚠️ In Dept Only | ❌ No |
| Edit Office | ✅ Yes | ⚠️ In Dept Only | ❌ No |
| View Other Depts | ✅ Yes | ❌ No | ❌ No |
| View Other Offices | ✅ Yes | ⚠️ In Dept Only | ❌ No |

### Reports & Analytics

| Permission | Ministry | Department | Office |
|-----------|----------|------------|--------|
| Ministry-wide Reports | ✅ Yes | ❌ No | ❌ No |
| Department Reports | ✅ All | ⚠️ Own Dept | ❌ No |
| Office Reports | ✅ All | ⚠️ In Dept | ❌ Own Office |
| Export Data | ✅ All | ⚠️ Own Data | ❌ Own Data |
| View Statistics | ✅ All | ⚠️ Department | ❌ Office |

## 📄 Document Filtering Examples

### Scenario: 10 Documents Across Ministry

**Documents:**
1. Emergency Protocol - Hospital Dept, Emergency Office
2. Surgical Inventory - Hospital Dept, Surgical Office
3. Pediatric Standards - Hospital Dept, Pediatric Office
4. Vaccination Report - Preventive Dept, Immunization Office
5. Disease Data - Preventive Dept, Disease Control Office
6. Drug Quality - Drugs Dept, Pharmaceutical Office

**Ministry Account (admin@health.gov.kh):**
```
Can see: All 6 documents
Filter by: Any department
Action: Full access to all
```

**Department Account (hospital@health.gov.kh):**
```
Can see: Documents 1, 2, 3 (Hospital Dept only)
Cannot see: Documents 4, 5, 6 (Other departments)
Filter by: Hospital Department only
Action: Manage documents 1, 2, 3
```

**Office Account (emergency@health.gov.kh):**
```
Can see: Document 1 only (Emergency Office)
Cannot see: Documents 2, 3 (Other offices)
Cannot see: Documents 4, 5, 6 (Other departments)
Filter by: Emergency Office only
Action: Manage document 1 only
```

## 👥 Staff Visibility Examples

### Ministry Staff Total: 328 Staff
- Department of Hospital Services: 86 staff
  - Emergency Office: 24 staff
  - Surgical Office: 18 staff
  - Pediatric Office: 15 staff
- Department of Preventive Medicine: 54 staff
- Department of Drugs and Food: 42 staff

**Ministry Account:**
```
Can see: All 328 staff across all departments
Can manage: All staff
Can add: Staff to any department or office
```

**Department Account (Hospital Services):**
```
Can see: 86 staff in Hospital Services only
Cannot see: Staff in Preventive or Drugs departments
Can manage: 86 staff in their department
Can add: Staff to their department only
```

**Office Account (Emergency):**
```
Can see: 24 staff in Emergency Office only
Cannot see: Staff in Surgical, Pediatric offices
Cannot see: Staff in other departments
Can manage: View only, cannot add/edit
Can add: Cannot add staff
```

## 🎯 Real-World Examples

### Example 1: Upload Document

**Ministry (Minister):**
- Can upload to any department
- Can upload to any office
- No restrictions

**Department (Hospital Director):**
- Can upload to Hospital Department
- Can choose any office in Hospital Dept
- Cannot upload to Preventive or Drugs Dept

**Office (Emergency Chief):**
- Can upload to Emergency Office only
- Cannot select other offices
- Locked to Emergency Office

### Example 2: View Reports

**Ministry (Minister):**
- Dashboard shows all ministry stats
- Can generate cross-department reports
- Can compare departments

**Department (Hospital Director):**
- Dashboard shows Hospital Dept stats only
- Can generate department reports
- Can view office breakdown within dept
- Cannot see Preventive or Drugs stats

**Office (Emergency Chief):**
- Dashboard shows Emergency Office stats only
- Can generate office reports
- Cannot see other offices
- Cannot see department-wide stats

### Example 3: Manage Staff

**Ministry (Minister):**
- Can add staff to any department
- Can move staff between departments
- Can change any staff role
- Full access

**Department (Hospital Director):**
- Can add staff to Hospital Department
- Can assign staff to offices within dept
- Can edit staff in their department
- Cannot access other department staff

**Office (Emergency Chief):**
- Cannot add new staff
- Can view Emergency Office staff
- Cannot edit staff roles
- Read-only access

## 🔧 Permission Composable Usage

```typescript
import { usePermissions } from '~/composables/usePermissions'

const {
  isMinistry,
  isDepartment,
  isOffice,
  canViewAllDepartments,
  canManageUsers,
  filterDocuments
} = usePermissions()

// Check account type
if (isMinistry()) {
  // Show all departments
}

if (isDepartment()) {
  // Show only their department
}

if (isOffice()) {
  // Show only their office
}

// Filter documents automatically
const filteredDocs = filterDocuments(allDocuments)
```

## 📝 Summary

| Feature | Ministry | Department | Office |
|---------|----------|------------|--------|
| **Scope** | Full Ministry | Single Department | Single Office |
| **Branding** | Green/Emerald | Blue | Violet/Purple |
| **Documents** | All | Department Only | Office Only |
| **Staff** | All | Department Only | Office Only |
| **Navigation** | All Pages | Department Pages | Limited Pages |
| **Upload** | Anywhere | Department Only | Office Only |
| **Manage** | Everything | Department | View Only |
| **Reports** | Ministry-wide | Department | Office Only |

---

**Key Principle:** Each account type sees only what they have permission to access. The system enforces strict boundaries between departments and offices to maintain data privacy and security.

**Last Updated:** February 11, 2026
