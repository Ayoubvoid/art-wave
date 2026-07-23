import Link from "next/link";

import { ADMIN_PASSWORD } from "@/lib/admin/constants";
import { Button } from "@/components/ui/button";

type AdminLoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="font-heading text-3xl text-zinc-900">Admin sign in</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Private area for Art Wave administrators.
        </p>

        <form method="POST" action="/api/admin/login" className="mt-8 space-y-4">
          {error ? (
            <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              Invalid password. Try again.
            </p>
          ) : null}
          <div>
            <label
              htmlFor="password"
              className="text-xs font-medium tracking-wide text-zinc-700 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 w-full border border-zinc-300 px-3 py-2.5 text-sm outline-none ring-zinc-900 focus:ring-2"
            />
          </div>
          <Button type="submit" className="h-11 w-full rounded-none">
            Enter admin
          </Button>
        </form>

        <p className="mt-6 text-xs text-zinc-500">
          Development password:{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5">{ADMIN_PASSWORD}</code>
        </p>
        <p className="mt-4 text-center text-xs">
          <Link href="/" className="text-zinc-600 underline-offset-4 hover:underline">
            Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
