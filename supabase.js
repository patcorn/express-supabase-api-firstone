import { createClient } from '@supabase/supabase-js'

// Instantiate Supabase
const supabaseUrl = 'https://mavrpeeqbtugxxxdnthp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
