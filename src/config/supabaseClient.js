import { createClient } from "@supabase/supabase-js";

// Supabase client initialized with Supabase project URL and public API key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
