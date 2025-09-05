# 📁 Project Structure

This document outlines the professional folder structure of the Resume Strength Analyzer project.

## 🏗️ Root Directory Structure

```
resume-strength-analyzer/
├── 📁 app/                     # Next.js App Router (pages and API routes)
│   ├── 📁 api/                # API endpoints
│   ├── 📁 dashboard/          # Dashboard pages
│   ├── 📁 login/              # Authentication pages
│   ├── 📁 register/           # Registration pages
│   ├── 📁 upload/             # File upload pages
│   ├── 📄 layout.tsx          # Root layout
│   └── 📄 page.tsx            # Home page
├── 📁 src/                     # Source code (organized by feature)
│   ├── 📁 components/         # Reusable UI components
│   ├── 📁 lib/                # Core libraries and utilities
│   ├── 📁 hooks/              # Custom React hooks
│   ├── 📁 styles/             # Global styles and CSS
│   ├── 📁 types/              # TypeScript type definitions
│   ├── 📁 utils/              # Utility functions
│   ├── 📁 constants/          # Application constants
│   └── 📄 components.json     # Component configuration
├── 📁 public/                  # Static assets
├── 📁 tests/                   # Test files and test data
├── 📁 config/                  # Configuration files
├── 📁 deployment/              # Deployment configurations
├── 📁 scripts/                 # Build and deployment scripts
├── 📁 docs/                    # Documentation files
├── 📁 archive/                 # Archived/unused code
└── 📄 Configuration Files      # Root config files
```

## 📂 Detailed Folder Descriptions

### **`/app` - Next.js App Router**
- **Purpose**: Next.js 13+ App Router structure
- **Contents**: Pages, layouts, API routes, route groups
- **Key Files**:
  - `layout.tsx` - Root layout with providers
  - `page.tsx` - Home page component
  - `api/` - Backend API endpoints

### **`/src` - Source Code**
Organized source code following industry best practices:

#### **`/src/components` - UI Components**
- **Purpose**: Reusable React components
- **Structure**:
  ```
  components/
  ├── ui/           # Basic UI components (buttons, inputs, etc.)
  ├── forms/        # Form-specific components
  ├── layout/       # Layout components (header, footer, etc.)
  └── features/     # Feature-specific components
  ```

#### **`/src/lib` - Core Libraries**
- **Purpose**: Core application logic and libraries
- **Contents**: Database, authentication, file parsing, analysis engine
- **Key Files**:
  - `auth.ts` - Authentication utilities
  - `db.ts` - Database layer
  - `analyzer.ts` - Resume analysis engine
  - `parser.ts` - File parsing logic

#### **`/src/hooks` - Custom Hooks**
- **Purpose**: Reusable React hooks
- **Examples**: `useAuth`, `useLocalStorage`, `useDebounce`

#### **`/src/types` - Type Definitions**
- **Purpose**: TypeScript type definitions
- **Contents**: Interface definitions, type aliases, enums
- **Structure**: Organized by feature area

#### **`/src/utils` - Utility Functions**
- **Purpose**: Pure utility functions
- **Contents**: Formatting, validation, helper functions
- **Examples**: `formatFileSize`, `debounce`, `formatDate`

#### **`/src/constants` - Application Constants**
- **Purpose**: Application-wide constants
- **Contents**: API endpoints, configuration values, enums
- **Benefits**: Centralized configuration, type safety

#### **`/src/styles` - Styling**
- **Purpose**: Global styles and CSS modules
- **Contents**: Tailwind CSS, global styles, component styles

### **`/tests` - Testing**
- **Purpose**: All test-related files
- **Contents**: Unit tests, integration tests, test data
- **Structure**:
  ```
  tests/
  ├── data/         # Test data files
  ├── unit/         # Unit tests
  ├── integration/  # Integration tests
  └── fixtures/     # Test fixtures
  ```

### **`/config` - Configuration**
- **Purpose**: Application configuration files
- **Contents**: Environment templates, JWT secrets, deployment configs
- **Security**: Sensitive files are gitignored

### **`/deployment` - Deployment**
- **Purpose**: Deployment-specific files
- **Contents**: Docker files, Netlify config, CI/CD configurations
- **Structure**:
  ```
  deployment/
  ├── Dockerfile
  ├── docker-compose.yml
  └── netlify.toml
  ```

### **`/scripts` - Scripts**
- **Purpose**: Build and deployment scripts
- **Contents**: Deployment scripts, database seeds, utility scripts
- **Examples**: `deploy.sh`, `setup.sh`, `migrate.sh`

### **`/docs` - Documentation**
- **Purpose**: Project documentation
- **Contents**: API docs, development guides, deployment instructions
- **Future**: API documentation, contribution guidelines

### **`/archive` - Archived Code**
- **Purpose**: Unused or legacy code
- **Contents**: Old backend/frontend implementations
- **Benefit**: Keeps main codebase clean while preserving history

## 🎯 Benefits of This Structure

### **1. Scalability**
- Easy to add new features without cluttering
- Clear separation of concerns
- Modular architecture

### **2. Developer Experience**
- Intuitive file organization
- Easy to find specific functionality
- Consistent patterns across the project

### **3. Maintainability**
- Clear dependencies between modules
- Easy to refactor and update
- Separation of business logic from UI

### **4. Team Collaboration**
- Clear ownership of different areas
- Reduced merge conflicts
- Easier code reviews

### **5. Testing**
- Organized test structure
- Easy to add new tests
- Clear test data management

## 🔧 Import Patterns

With the new structure, imports follow these patterns:

```typescript
// Components
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'

// Libraries and utilities
import { auth } from '@/lib/auth'
import { formatFileSize } from '@/utils'

// Types and constants
import type { User } from '@/types'
import { API_ENDPOINTS } from '@/constants'

// Hooks
import { useAuth } from '@/hooks/use-auth'
```

## 📝 File Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Types**: PascalCase (`UserProfile`, `ApiResponse`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`)

This structure provides a solid foundation for scaling the Resume Strength Analyzer application while maintaining code quality and developer productivity.
