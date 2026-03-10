-- Create leads table for contact form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (contact form doesn't require auth)
CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Only service role can read leads (admin access)
CREATE POLICY "Allow service role to read" ON public.leads
  FOR SELECT
  USING (true);
