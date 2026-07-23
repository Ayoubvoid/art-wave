/** Admin gate — override with ADMIN_PASSWORD in production when possible. */
export const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD?.trim() || "Samih@1992";

export const ADMIN_SESSION_COOKIE = "artwave_admin_session";

/** Must match signed session value in session.ts */
export const ADMIN_SESSION_TOKEN = "artwave-admin-authenticated-v1";
