import { NextResponse } from "next/server";

import { en } from "@/lib/i18n/locales/en";
import { createOrder } from "@/lib/orders/service";
import { getPaintingById } from "@/lib/paintings/service";
import {
  hasOrderRequestErrors,
  validateOrderRequest,
} from "@/lib/validate-order-request";
import type { OrderRequestFormValues } from "@/types";

type OrderRequestBody = OrderRequestFormValues & {
  paintingId?: string;
};

export async function POST(request: Request) {
  let body: OrderRequestBody;

  try {
    body = (await request.json()) as OrderRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const paintingId = String(body.paintingId ?? "").trim();
  if (!paintingId) {
    return NextResponse.json({ error: "Missing painting" }, { status: 400 });
  }

  const painting = await getPaintingById(paintingId);
  if (!painting) {
    return NextResponse.json({ error: "Painting not found" }, { status: 404 });
  }

  const values: OrderRequestFormValues = {
    fullName: String(body.fullName ?? ""),
    phone: String(body.phone ?? ""),
    email: String(body.email ?? ""),
    deliveryCity: String(body.deliveryCity ?? ""),
    deliveryAddress: String(body.deliveryAddress ?? ""),
    notes: String(body.notes ?? ""),
  };

  const validationErrors = validateOrderRequest(values, en.order.validation);
  if (hasOrderRequestErrors(validationErrors)) {
    return NextResponse.json(
      { error: "Validation failed", fields: validationErrors },
      { status: 400 }
    );
  }

  await createOrder({
    fullName: values.fullName,
    phone: values.phone,
    email: values.email,
    deliveryCity: values.deliveryCity,
    deliveryAddress: values.deliveryAddress,
    notes: values.notes,
    paintingId: painting.id,
    paintingTitle: painting.title,
    price: painting.price,
    currency: painting.currency,
  });

  return NextResponse.json({ ok: true });
}
