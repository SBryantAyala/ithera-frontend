import type React from 'react'

// ── Domain ────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: 'admin' | 'clinician' | 'viewer'
}

// ── API ───────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  pageSize: number
}

// ── Navigation ────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
}

// ── UI Primitives ─────────────────────────────────────────────────────────────

export type Size = 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info'
