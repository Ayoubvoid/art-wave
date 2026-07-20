import { cookies } from "next/headers";

import {
  ADMIN_PASSWORD,
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_TOKEN,
} from "@/lib/admin/constants";

export async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return store.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_TOKEN;
}

export async function loginAdmin(password: string): Promise<boolean> {
  if (password !== ADMIN_PASSWORD) {
    return false;
  }

  const store = await cookies();
  store.set(ADMIN_SESSION_COOKIE, ADMIN_SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return true;
}

export async function logoutAdmin(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_SESSION_COOKIE);
}
