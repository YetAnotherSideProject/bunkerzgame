import { createClient } from "@supabase/supabase-js";

export const REACT_APP_SUPABASE_URL =
  "https://vxsdstulbhooisnsjagb.supabase.co";
export const REACT_APP_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4c2RzdHVsYmhvb2lzbnNqYWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAwOTg4MTcsImV4cCI6MTk2NTY3NDgxN30.JySTXBppIXqTtpbJ0MSi3tudQ7fWDukC0yFjkdn0oNM";

export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY
);
