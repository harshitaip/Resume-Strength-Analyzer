// User types
export interface User {
  id: string
  email: string
  name?: string
  role: 'user' | 'admin'
  createdAt: string
  updatedAt?: string
}

export interface UserProfile extends User {
  bio?: string
  location?: string
  website?: string
  avatar?: string
}

// Authentication types
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name?: string
}

export interface AuthResponse {
  success: boolean
  user: User
  accessToken: string
  refreshToken?: string
}

// Resume analysis types
export interface ResumeAnalysis {
  id: string
  userId: string
  createdAt: string
  scores: {
    overall: number
    skillsCoverage: number
    experienceRelevance: number
    atsReadiness: number
    impact: number
  }
  missingSkills: string[]
  recommendations: string[]
  textPreview: string
}

export interface AnalysisReport {
  id: string
  report: ResumeAnalysis
  message: string
  success: boolean
}

// File upload types
export interface FileUpload {
  file: File
  preview?: string
}

export interface UploadResponse {
  success: boolean
  message: string
  id?: string
  report?: ResumeAnalysis
  error?: string
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
}

// Form types
export interface FormState {
  isLoading: boolean
  error: string | null
  success: string | null
}

// Chart data types
export interface RadarChartData {
  metric: string
  score: number
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Navigation types
export interface NavigationItem {
  name: string
  href: string
  icon?: string
  badge?: string
  external?: boolean
}

// Error types
export interface AppError {
  message: string
  code?: string
  status?: number
  details?: any
}
