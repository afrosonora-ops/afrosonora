-- Column-level privileges: authenticated users cannot write plan / is_featured on artists
REVOKE UPDATE ON public.artists FROM authenticated;
GRANT UPDATE (
  artist_name, genre, country, city, bio, portfolio_url, spotify_url,
  youtube_url, instagram_url, avatar_url, cover_url, updated_at
) ON public.artists TO authenticated;

-- Admins still need full update capability; grant privileged columns back only via service_role
GRANT ALL ON public.artists TO service_role;

-- Keep the defense-in-depth trigger authoritative
CREATE OR REPLACE FUNCTION public.protect_artist_privileged_fields()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
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
$function$;
