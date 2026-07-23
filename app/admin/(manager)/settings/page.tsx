import { ADMIN_PASSWORD } from "@/lib/admin/constants";
import { STORE_CURRENCIES } from "@/lib/admin/store-currencies";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Configuration</p>
        <h1 className="font-heading mt-1 text-3xl text-zinc-900">Settings</h1>
      </div>

      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium text-zinc-900">Store</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-zinc-500">Store name</dt>
            <dd>Art Wave</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-zinc-500">Supported currencies</dt>
            <dd>{STORE_CURRENCIES.join(", ")}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-zinc-500">Customer payments</dt>
            <dd>Cash on Delivery (COD)</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium text-zinc-900">Admin access</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Development password (replace with real authentication before production):
        </p>
        <code className="mt-3 inline-block rounded bg-zinc-100 px-3 py-1.5 text-sm">
          {ADMIN_PASSWORD}
        </code>
      </section>
    </div>
  );
}
