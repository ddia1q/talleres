-- DOMI: configuración inicial de roles.
-- 1) Primero crea cada cuenta en Supabase > Authentication > Users.
-- 2) Sustituye los correos de ejemplo por los correos reales.
-- 3) Ejecuta este archivo en Supabase > SQL Editor.
-- Nunca agregues contraseñas a este archivo.

update public.domi_profiles
set role = 'ADMIN', display_name = 'Administración'
where lower(email) = lower('digitalref2@nissaniztacalco.com.mx');

update public.domi_profiles
set role = 'CHOFER', display_name = 'Chofer 1'
where lower(email) = lower('digitalref2@nissaniztacalco.com.mx');

-- Copia otro bloque UPDATE para cada chofer adicional.
