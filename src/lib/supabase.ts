import { createClient } from '@supabase/supabase-js';

// Configuration du client Supabase public (Anon)
// L'Anon key est uniquement dotée du rôle 'anon' (protégée par les politiques RLS)
const DEFAULT_SUPABASE_URL = 'https://wbskmuegbetlxsqmtzam.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indic2ttdWVnYmV0bHhzcW10emFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4ODc1NjcsImV4cCI6MjEwNzQ2MzU2N30.vbwwF_7xwsr_zvS4UdHMq-cYE9rdkAoko3cjp5-EYC8';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  DEFAULT_SUPABASE_URL;

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
