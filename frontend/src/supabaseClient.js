// frontend/src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ijiuyasugfcmppsgfikh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaXV5YXN1Z2ZjbXBwc2dmaWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mjg3NDUsImV4cCI6MjA2MzMwNDc0NX0.dzIzEIXFz04LrA87_pGbRoD1UZA4Jig7VLmxQMEx_IA';

export const supabase = createClient(supabaseUrl, supabaseKey);
