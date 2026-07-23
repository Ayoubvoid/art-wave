import type { Order, OrderStatus } from "@/types";

import { getOrderRepository } from "@/lib/orders/json-order-repository";
import type { CreateOrderInput } from "@/lib/orders/repository";

export async function listOrders(): Promise<Order[]> {
  return getOrderRepository().findAll();
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  const order = await getOrderRepository().findById(id);
  return order ?? undefined;
}

export async function createOrder(input: CreateOrderInput): Promise<Order> {
  return getOrderRepository().create(input);
}

export async function updateOrderStatus(
  id: string,
  status: OrderStatus
): Promise<Order> {
  return getOrderRepository().updateStatus(id, status);
}

export async function deleteOrder(id: string): Promise<Order | null> {
  return getOrderRepository().delete(id);
}

export async function getOrderStats() {
  const all = await listOrders();
  return {
    total: all.length,
    new: all.filter((order) => order.status === "new").length,
    delivered: all.filter((order) => order.status === "delivered").length,
    cancelled: all.filter((order) => order.status === "cancelled").length,
  };
}
