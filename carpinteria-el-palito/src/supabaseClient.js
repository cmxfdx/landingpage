import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jvyxfxeuewcpvcxsohnz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2eXhmeGV1ZXdjcHZjeHNvaG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTc5MTksImV4cCI6MjA5MDQ5MzkxOX0.0m72wDtZ9yfaBH0TrtwUpC4OlianUAbCxX_T40O1B5M'
export const supabase = createClient(supabaseUrl, supabaseKey)