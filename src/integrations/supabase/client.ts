// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zeisopsgavjofzkurljl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplaXNvcHNnYXZqb2Z6a3VybGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0Mzk5MzYsImV4cCI6MjA1OTAxNTkzNn0.XNkVGzWB2trSwomO7-NJzlkvARpRzsf8Uu-ekQHqrkE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);