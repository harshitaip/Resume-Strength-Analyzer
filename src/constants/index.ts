// Application constants
export const APP_CONFIG = {
  name: 'Resume Strength Analyzer',
  version: '1.0.0',
  description: 'AI-powered resume analysis and optimization tool',
  author: 'Harshita',
  repository: 'https://github.com/harshitaip/Resume-Strength-Analyzer'
} as const

// File upload constants
export const FILE_UPLOAD = {
  maxSize: 6 * 1024 * 1024, // 6MB
  allowedTypes: ['.pdf', '.doc', '.docx', '.txt'],
  allowedMimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ]
} as const

// Score ranges
export const SCORE_RANGES = {
  excellent: { min: 90, max: 100, label: 'Excellent' },
  veryGood: { min: 80, max: 89, label: 'Very Good' },
  good: { min: 70, max: 79, label: 'Good' },
  average: { min: 60, max: 69, label: 'Average' },
  needsWork: { min: 0, max: 59, label: 'Needs Work' }
} as const

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    refresh: '/api/auth/refresh',
    logout: '/api/auth/logout'
  },
  resume: {
    upload: '/api/upload',
    analyze: '/api/resumes/analyze',
    history: '/api/resumes/history'
  },
  user: {
    profile: '/api/users/me',
    update: '/api/users/update'
  }
} as const

// Storage keys
export const STORAGE_KEYS = {
  accessToken: 'access_token',
  refreshToken: 'refresh_token',
  userProfile: 'user_profile',
  theme: 'theme'
} as const
