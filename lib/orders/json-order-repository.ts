import { promises as fs } from "fs";
import path from "path";

import type { Order, OrderStatus } from "@/types";

import type { CreateOrderInput, OrderRepository } from "@/lib/orders/repository";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "orders.json");

function nowIso(): string {
  return new Date().toISOString();
}

async function readStore(): Promise<Order[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(content) as Order[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, "[]\n", "utf8");
      return [];
    }
    throw error;
  }
}

async function writeStore(orders: Order[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, `${JSON.stringify(orders, null, 2)}\n`, "utf8");
}

function nextId(orders: Order[]): string {
  const max = orders.reduce((acc, item) => {
    const numeric = Number.parseInt(item.id, 10);
    return Number.isFinite(numeric) ? Math.max(acc, numeric) : acc;
  }, 0);
  return String(max + 1);
}

export class JsonOrderRepository implements OrderRepository {
  async findAll(): Promise<Order[]> {
    const orders = await readStore();
    return orders.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async findById(id: string): Promise<Order | null> {
    const orders = await readStore();
    return orders.find((order) => order.id === id) ?? null;
  }

  async create(input: CreateOrderInput): Promise<Order> {
    const orders = await readStore();
    const order: Order = {
      id: nextId(orders),
      fullName: input.fullName.trim(),
      phone: input.phone.trim(),
      email: input.email.trim(),
      deliveryCity: input.deliveryCity.trim(),
      deliveryAddress: input.deliveryAddress.trim(),
      notes: input.notes.trim(),
      paintingId: input.paintingId,
      paintingTitle: input.paintingTitle.trim(),
      price: input.price,
      currency: input.currency.trim() || "USD",
      status: "new",
      createdAt: nowIso(),
    };

    orders.push(order);
    await writeStore(orders);
    return order;
  }

  async updateStatus(id: string, status: OrderStatus): Promise<Order> {
    const orders = await readStore();
    const index = orders.findIndex((order) => order.id === id);

    if (index === -1) {
      throw new Error("Order not found");
    }

    orders[index] = { ...orders[index], status };
    await writeStore(orders);
    return orders[index];
  }

  async delete(id: string): Promise<Order | null> {
    const orders = await readStore();
    const index = orders.findIndex((order) => order.id === id);

    if (index === -1) {
      return null;
    }

    const [removed] = orders.splice(index, 1);
    await writeStore(orders);
    return removed;
  }
}

let repositoryInstance: JsonOrderRepository | null = null;

export function getOrderRepository(): OrderRepository {
  if (!repositoryInstance) {
    repositoryInstance = new JsonOrderRepository();
  }
  return repositoryInstance;
}
