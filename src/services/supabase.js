import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dtckqkyeicnejfuafmwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y2txa3llaWNuZWpmdWFmbXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5OTU5NjcsImV4cCI6MjA2NzU3MTk2N30.J9P-1saNPxbtft-fK-zwWRW2scNqiZBwv3Ehn8CZpSE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
