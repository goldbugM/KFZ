import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (you can generate these from your Supabase schema)
export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          created_at: string
          customer_name: string
          customer_email: string
          customer_phone: string
          service_type: string
          appointment_date: string
          appointment_time: string
          vehicle_make?: string
          vehicle_model?: string
          vehicle_year?: number
          license_plate?: string
          notes?: string
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
        }
        Insert: {
          id?: string
          created_at?: string
          customer_name: string
          customer_email: string
          customer_phone: string
          service_type: string
          appointment_date: string
          appointment_time: string
          vehicle_make?: string
          vehicle_model?: string
          vehicle_year?: number
          license_plate?: string
          notes?: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
        }
        Update: {
          id?: string
          created_at?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          service_type?: string
          appointment_date?: string
          appointment_time?: string
          vehicle_make?: string
          vehicle_model?: string
          vehicle_year?: number
          license_plate?: string
          notes?: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone?: string
          subject: string
          message: string
          status: 'new' | 'read' | 'replied'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string
          subject: string
          message: string
          status?: 'new' | 'read' | 'replied'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          subject?: string
          message?: string
          status?: 'new' | 'read' | 'replied'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}