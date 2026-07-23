import type { OrderStatus } from "@/types";

export const ORDER_STATUSES: OrderStatus[] = [
  "new",
  "contacted",
  "preparing",
  "delivered",
  "cancelled",
];

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  new: "New",
  contacted: "Contacted",
  preparing: "Preparing",
  delivered: "Delivered",
  cancelled: "Cancelled",
};
