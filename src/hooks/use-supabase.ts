import { useState, useEffect } from 'react'
import { supabase, type Database } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

type Appointment = Database['public']['Tables']['appointments']['Row']
type AppointmentInsert = Database['public']['Tables']['appointments']['Insert']
type ContactMessage = Database['public']['Tables']['contact_messages']['Row']
type ContactMessageInsert = Database['public']['Tables']['contact_messages']['Insert']

// Hook for managing appointments
export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Fetch all appointments
  const fetchAppointments = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setAppointments(data || [])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch appointments'
      setError(errorMessage)
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  // Create new appointment
  const createAppointment = async (appointment: AppointmentInsert) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([appointment])
        .select()
        .single()

      if (error) throw error
      
      setAppointments(prev => [data, ...prev])
      toast({
        title: 'Success',
        description: 'Appointment created successfully!',
      })
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create appointment'
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      throw err
    }
  }

  // Update appointment status
  const updateAppointmentStatus = async (id: string, status: Appointment['status']) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .update({ status })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      setAppointments(prev => 
        prev.map(apt => apt.id === id ? { ...apt, status } : apt)
      )
      toast({
        title: 'Success',
        description: 'Appointment status updated!',
      })
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update appointment'
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      throw err
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  return {
    appointments,
    loading,
    error,
    createAppointment,
    updateAppointmentStatus,
    refetch: fetchAppointments,
  }
}

// Hook for managing contact messages
export function useContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Fetch all contact messages
  const fetchMessages = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMessages(data || [])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch messages'
      setError(errorMessage)
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  // Create new contact message
  const createMessage = async (message: ContactMessageInsert) => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([message])
        .select()
        .single()

      if (error) throw error
      
      setMessages(prev => [data, ...prev])
      toast({
        title: 'Success',
        description: 'Message sent successfully!',
      })
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message'
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      throw err
    }
  }

  // Update message status
  const updateMessageStatus = async (id: string, status: ContactMessage['status']) => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      
      setMessages(prev => 
        prev.map(msg => msg.id === id ? { ...msg, status } : msg)
      )
      toast({
        title: 'Success',
        description: 'Message status updated!',
      })
      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update message'
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      throw err
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return {
    messages,
    loading,
    error,
    createMessage,
    updateMessageStatus,
    refetch: fetchMessages,
  }
}