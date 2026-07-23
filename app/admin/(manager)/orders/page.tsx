import { OrdersManager } from "@/components/admin/orders-manager";
import { listOrders } from "@/lib/orders/service";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await listOrders();

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
          Fulfillment
        </p>
        <h1 className="font-heading mt-2 text-3xl text-zinc-900">Orders</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          Cash on Delivery requests from the public gallery. Newest requests appear
          first.
        </p>
      </div>

      <OrdersManager orders={orders} />
    </div>
  );
}
