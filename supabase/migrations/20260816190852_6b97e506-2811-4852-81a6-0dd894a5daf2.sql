CREATE OR REPLACE FUNCTION public.protect_artist_privileged_fields()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF current_setting('role', true) = 'service_role'
     OR auth.role() = 'service_role'
     OR public.has_role(auth.uid(), 'admin'::app_role) THEN
    RETURN NEW;
  END IF;

  NEW.plan := OLD.plan;
  NEW.is_featured := OLD.is_featured;
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.protect_artist_privileged_fields() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS protect_artist_privileged_fields ON public.artists;
CREATE TRIGGER protect_artist_privileged_fields
BEFORE UPDATE ON public.artists
FOR EACH ROW
EXECUTE FUNCTION public.protect_artist_privileged_fields();