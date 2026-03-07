
-- Allow admins to update any artist
CREATE POLICY "Admins can update any artist"
ON public.artists FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to delete any artist
CREATE POLICY "Admins can delete any artist"
ON public.artists FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to update any event
CREATE POLICY "Admins can update any event"
ON public.events FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to delete any event
CREATE POLICY "Admins can delete any event"
ON public.events FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to insert events
CREATE POLICY "Admins can insert events"
ON public.events FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));
