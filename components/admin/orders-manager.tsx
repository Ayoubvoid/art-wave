"use client";

import { useMemo, useState, useTransition } from "react";
import { Eye, Search, Trash2 } from "lucide-react";

import {
  deleteOrderAction,
  updateOrderStatusAction,
} from "@/lib/admin/actions";
import { formatPrice } from "@/lib/format-price";
import {
  ORDER_STATUSES,
  ORDER_STATUS_LABELS,
} from "@/lib/orders/constants";
import type { Order, OrderStatus } from "@/types";
import { cn } from "@/lib/utils";

type OrdersManagerProps = {
  orders: Order[];
};

function formatOrderDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function statusBadgeClass(status: OrderStatus) {
  switch (status) {
    case "new":
      return "bg-blue-50 text-blue-800 border-blue-200";
    case "contacted":
      return "bg-amber-50 text-amber-900 border-amber-200";
    case "preparing":
      return "bg-violet-50 text-violet-900 border-violet-200";
    case "delivered":
      return "bg-emerald-50 text-emerald-900 border-emerald-200";
    case "cancelled":
      return "bg-zinc-100 text-zinc-600 border-zinc-200";
    default:
      return "bg-zinc-100 text-zinc-700 border-zinc-200";
  }
}

export function OrdersManager({ orders }: OrdersManagerProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orders.filter((order) => {
      if (statusFilter !== "all" && order.status !== statusFilter) {
        return false;
      }
      if (!q) {
        return true;
      }
      return (
        order.fullName.toLowerCase().includes(q) ||
        order.email.toLowerCase().includes(q) ||
        order.phone.toLowerCase().includes(q) ||
        order.paintingTitle.toLowerCase().includes(q) ||
        order.deliveryCity.toLowerCase().includes(q)
      );
    });
  }, [orders, query, statusFilter]);

  const selected = selectedId
    ? orders.find((order) => order.id === selectedId) ?? null
    : null;

  function handleStatusChange(orderId: string, status: OrderStatus) {
    startTransition(async () => {
      await updateOrderStatusAction(orderId, status);
    });
  }

  function handleDelete(orderId: string) {
    if (!window.confirm("Delete this order request permanently?")) {
      return;
    }
    startTransition(async () => {
      await deleteOrderAction(orderId);
      if (selectedId === orderId) {
        setSelectedId(null);
      }
    });
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <label className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Search
            </label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Name, email, phone, painting, city…"
                className="h-11 w-full border border-zinc-300 ps-10 pe-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="mt-2 h-11 w-full min-w-[11rem] border border-zinc-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 lg:w-auto"
            >
              <option value="all">All statuses</option>
              {ORDER_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {ORDER_STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          {filtered.length} of {orders.length} orders
          {pending ? " · Saving…" : null}
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-left text-sm">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-xs tracking-wide text-zinc-500 uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Painting</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-end">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-zinc-500"
                  >
                    No order requests yet.
                  </td>
                </tr>
              ) : (
                filtered.map((order) => (
                  <tr
                    key={order.id}
                    className={cn(
                      "transition-colors hover:bg-zinc-50/80",
                      selectedId === order.id && "bg-zinc-50"
                    )}
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-zinc-600">
                      {formatOrderDate(order.createdAt)}
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-zinc-900">{order.fullName}</p>
                      <p className="text-xs text-zinc-500">{order.phone}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-zinc-900">
                        {order.paintingTitle}
                      </p>
                      <p className="text-xs text-zinc-500">ID {order.paintingId}</p>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-zinc-800">
                      {formatPrice(order.price, order.currency)}
                    </td>
                    <td className="px-4 py-4">
                      <select
                        value={order.status}
                        onChange={(event) =>
                          handleStatusChange(
                            order.id,
                            event.target.value as OrderStatus
                          )
                        }
                        disabled={pending}
                        className={cn(
                          "rounded border px-2 py-1.5 text-xs font-medium capitalize outline-none focus:ring-2 focus:ring-zinc-900",
                          statusBadgeClass(order.status)
                        )}
                      >
                        {ORDER_STATUSES.map((status) => (
                          <option key={status} value={status}>
                            {ORDER_STATUS_LABELS[status]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedId((current) =>
                              current === order.id ? null : order.id
                            )
                          }
                          className="inline-flex size-9 items-center justify-center border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-100"
                          aria-label="View order details"
                        >
                          <Eye className="size-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(order.id)}
                          disabled={pending}
                          className="inline-flex size-9 items-center justify-center border border-red-200 text-red-700 transition-colors hover:bg-red-50 disabled:opacity-50"
                          aria-label="Delete order"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected ? (
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                Order #{selected.id}
              </p>
              <h2 className="font-heading mt-1 text-2xl text-zinc-900">
                {selected.fullName}
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                {formatOrderDate(selected.createdAt)}
              </p>
            </div>
            <span
              className={cn(
                "rounded border px-3 py-1 text-xs font-medium",
                statusBadgeClass(selected.status)
              )}
            >
              {ORDER_STATUS_LABELS[selected.status]}
            </span>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DetailItem label="Phone" value={selected.phone} />
            <DetailItem label="Email" value={selected.email} />
            <DetailItem label="Delivery city" value={selected.deliveryCity} />
            <DetailItem
              label="Delivery address"
              value={selected.deliveryAddress}
              className="sm:col-span-2 lg:col-span-3"
            />
            <DetailItem label="Painting title" value={selected.paintingTitle} />
            <DetailItem label="Painting ID" value={selected.paintingId} />
            <DetailItem
              label="Price"
              value={formatPrice(selected.price, selected.currency)}
            />
            <DetailItem
              label="Notes"
              value={selected.notes || "—"}
              className="sm:col-span-2 lg:col-span-3"
            />
          </dl>
        </section>
      ) : null}
    </div>
  );
}

function DetailItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-zinc-900">{value}</dd>
    </div>
  );
}
