import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fzerqmgbltpfuznvrulo.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZXJxbWdibHRwZnV6bnZydWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNjA5ODgsImV4cCI6MjA1ODgzNjk4OH0.7ePZP_MDSO-pq6ICkm2Zn66SeAgHsO7Z4Dzhmwv6AkQ";
export const supabase = createClient(supabaseUrl, supabaseKey);