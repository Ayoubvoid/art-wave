import type { Order, OrderStatus } from "@/types";

export type CreateOrderInput = {
  fullName: string;
  phone: string;
  email: string;
  deliveryCity: string;
  deliveryAddress: string;
  notes: string;
  paintingId: string;
  paintingTitle: string;
  price: number;
  currency: string;
};

export interface OrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  create(input: CreateOrderInput): Promise<Order>;
  updateStatus(id: string, status: OrderStatus): Promise<Order>;
  delete(id: string): Promise<Order | null>;
}
