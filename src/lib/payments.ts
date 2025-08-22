import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";

export type Payment = Tables<'payments'>;

// Placeholder payment gateway integration
export async function processPayment(invoiceId: string, amount: number) {
  // simulate external gateway processing
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { data, error } = await supabase
    .from('payments')
    .insert({ invoice_id: invoiceId, amount, status: 'completed' })
    .select()
    .single();

  if (error) {
    toast({ title: 'Payment failed', description: error.message });
    throw error;
  }

  toast({ title: 'Payment successful', description: `Invoice ${invoiceId} paid.` });

  return data as Payment;
}

export async function getPaymentHistory() {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    toast({ title: 'Failed to load payments', description: error.message });
    throw error;
  }

  return data as Payment[];
}
