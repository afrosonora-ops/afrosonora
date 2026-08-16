CREATE OR REPLACE FUNCTION public.admin_set_artist_flags(
  _artist_id uuid,
  _is_featured boolean DEFAULT NULL,
  _plan text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'not authorized';
  END IF;

  UPDATE public.artists
  SET is_featured = COALESCE(_is_featured, is_featured),
      plan = COALESCE(_plan, plan)
  WHERE id = _artist_id;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_set_artist_flags(uuid, boolean, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_set_artist_flags(uuid, boolean, text) TO authenticated;
