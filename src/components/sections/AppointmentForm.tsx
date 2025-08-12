import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAppointments } from '@/hooks/use-supabase'
import { Calendar, Clock, Car, User, Mail, Phone } from 'lucide-react'

const appointmentSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Please enter a valid email'),
  customer_phone: z.string().min(10, 'Please enter a valid phone number'),
  service_type: z.string().min(1, 'Please select a service'),
  appointment_date: z.string().min(1, 'Please select a date'),
  appointment_time: z.string().min(1, 'Please select a time'),
  vehicle_make: z.string().optional(),
  vehicle_model: z.string().optional(),
  vehicle_year: z.number().optional(),
  license_plate: z.string().optional(),
  notes: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

const serviceTypes = [
  { value: 'tuv_inspection', label: 'TÜV Hauptuntersuchung' },
  { value: 'damage_assessment', label: 'Schadensgutachten' },
  { value: 'purchase_inspection', label: 'Kaufberatung' },
  { value: 'value_assessment', label: 'Wertgutachten' },
  { value: 'expert_opinion', label: 'Sachverständigengutachten' },
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30'
]

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { createAppointment } = useAppointments()

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      customer_name: '',
      customer_email: '',
      customer_phone: '',
      service_type: '',
      appointment_date: '',
      appointment_time: '',
      vehicle_make: '',
      vehicle_model: '',
      vehicle_year: undefined,
      license_plate: '',
      notes: '',
    },
  })

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      setIsSubmitting(true)
      await createAppointment({
        ...data,
        status: 'pending',
      })
      form.reset()
    } catch (error) {
      console.error('Failed to create appointment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Termin vereinbaren
        </h2>
        <p className="text-gray-600">
          Buchen Sie Ihren Termin für TÜV, Gutachten oder Beratung
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5" />
              Persönliche Daten
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="customer_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr vollständiger Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="customer_phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon *</FormLabel>
                    <FormControl>
                      <Input placeholder="+49 123 456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="customer_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail *</FormLabel>
                  <FormControl>
                    <Input placeholder="ihre.email@beispiel.de" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Service & Termin
            </h3>
            
            <FormField
              control={form.control}
              name="service_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie einen Service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="appointment_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datum *</FormLabel>
                    <FormControl>
                      <Input type="date" min={minDate} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="appointment_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Uhrzeit *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie eine Uhrzeit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time} Uhr
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Car className="h-5 w-5" />
              Fahrzeugdaten (optional)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="vehicle_make"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marke</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. BMW" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="vehicle_model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modell</FormLabel>
                    <FormControl>
                      <Input placeholder="z.B. 3er" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="vehicle_year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Baujahr</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="2020" 
                        min="1900" 
                        max={new Date().getFullYear()}
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="license_plate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kennzeichen</FormLabel>
                  <FormControl>
                    <Input placeholder="z.B. F-AB 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Additional Notes */}
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zusätzliche Informationen</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Besondere Wünsche oder Anmerkungen..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Termin wird gebucht...
              </>
            ) : (
              <>
                <Clock className="h-4 w-4 mr-2" />
                Termin buchen
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}