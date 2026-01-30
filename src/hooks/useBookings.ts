import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface BookedSlot {
  barber_id: string;
  booking_date: string;
  booking_time: string;
}

interface BookingData {
  service_id: string;
  service_name: string;
  service_price: string;
  barber_id: string;
  barber_name: string;
  booking_date: string;
  booking_time: string;
  client_name: string;
  client_phone: string;
}

export const useBookings = () => {
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookedSlots = async (barberId: string, date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    
    const { data, error } = await supabase
      .from('bookings')
      .select('barber_id, booking_date, booking_time')
      .eq('barber_id', barberId)
      .eq('booking_date', dateStr)
      .in('status', ['pending', 'confirmed']);

    if (error) {
      console.error('Error fetching booked slots:', error);
      return [];
    }

    return data || [];
  };

  const isSlotAvailable = (barberId: string, date: Date, time: string): boolean => {
    const dateStr = date.toISOString().split('T')[0];
    return !bookedSlots.some(
      slot => 
        slot.barber_id === barberId && 
        slot.booking_date === dateStr && 
        slot.booking_time === time
    );
  };

  const refreshAvailability = async (barberId: string, date: Date) => {
    const slots = await fetchBookedSlots(barberId, date);
    setBookedSlots(slots);
  };

  const createBooking = async (bookingData: BookingData): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          service_id: bookingData.service_id,
          service_name: bookingData.service_name,
          service_price: bookingData.service_price,
          barber_id: bookingData.barber_id,
          barber_name: bookingData.barber_name,
          booking_date: bookingData.booking_date,
          booking_time: bookingData.booking_time,
          client_name: bookingData.client_name,
          client_phone: bookingData.client_phone,
          status: 'pending'
        });

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - slot already booked
          toast.error("Horário indisponível", {
            description: "Este horário acabou de ser reservado. Por favor, escolha outro.",
          });
          return false;
        }
        throw error;
      }

      return true;
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error("Erro ao agendar", {
        description: "Ocorreu um erro. Por favor, tente novamente.",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    bookedSlots,
    isLoading,
    isSlotAvailable,
    refreshAvailability,
    createBooking
  };
};
