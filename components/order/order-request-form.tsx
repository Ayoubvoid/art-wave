"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import {
  formInputClassName,
  formTextareaClassName,
  FormField,
} from "@/components/order/form-field";
import { HowOrderingWorks } from "@/components/order/how-ordering-works";
import { PaintingOrderSummary } from "@/components/order/painting-order-summary";
import { Button } from "@/components/ui/button";
import { EMPTY_ORDER_FORM } from "@/lib/order-constants";
import { cn } from "@/lib/utils";
import {
  hasOrderRequestErrors,
  validateOrderRequest,
} from "@/lib/validate-order-request";
import type {
  OrderRequestField,
  OrderRequestFieldErrors,
  OrderRequestFormValues,
  Painting,
} from "@/types";

type OrderRequestFormProps = {
  painting: Painting;
};

export function OrderRequestForm({ painting }: OrderRequestFormProps) {
  const [values, setValues] = useState<OrderRequestFormValues>({
    ...EMPTY_ORDER_FORM,
  });
  const [errors, setErrors] = useState<OrderRequestFieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(
    field: Exclude<OrderRequestField, "notes">,
    value: string
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updateNotes(value: string) {
    setValues((current) => ({ ...current, notes: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateOrderRequest(values);
    setErrors(validationErrors);

    if (hasOrderRequestErrors(validationErrors)) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 text-center"
      >
        <CheckCircle2
          className="mx-auto size-12 text-[var(--aw-accent)]"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="font-heading mt-6 text-2xl text-[var(--aw-primary)]">
          Thank you for your order request.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed md:text-base">
          Our Art Wave team will contact you shortly to confirm your order and
          delivery details.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_70%,transparent)]">
          Payment will be made upon delivery (Cash on Delivery).
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <PaintingOrderSummary painting={painting} />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
          className="sm:col-span-2"
        >
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={cn(formInputClassName, errors.fullName && "border-[#b42318]")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone Number"
          required
          error={errors.phone}
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={cn(formInputClassName, errors.phone && "border-[#b42318]")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </FormField>

        <FormField
          id="email"
          label="Email Address"
          required
          error={errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={cn(formInputClassName, errors.email && "border-[#b42318]")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </FormField>

        <FormField
          id="deliveryCity"
          label="Delivery City"
          required
          error={errors.deliveryCity}
        >
          <input
            id="deliveryCity"
            name="deliveryCity"
            type="text"
            autoComplete="address-level2"
            value={values.deliveryCity}
            onChange={(event) =>
              updateField("deliveryCity", event.target.value)
            }
            className={cn(
              formInputClassName,
              errors.deliveryCity && "border-[#b42318]"
            )}
            aria-invalid={Boolean(errors.deliveryCity)}
            aria-describedby={
              errors.deliveryCity ? "deliveryCity-error" : undefined
            }
          />
        </FormField>

        <FormField
          id="deliveryAddress"
          label="Delivery Address"
          required
          error={errors.deliveryAddress}
          className="sm:col-span-2"
        >
          <input
            id="deliveryAddress"
            name="deliveryAddress"
            type="text"
            autoComplete="street-address"
            value={values.deliveryAddress}
            onChange={(event) =>
              updateField("deliveryAddress", event.target.value)
            }
            className={cn(
              formInputClassName,
              errors.deliveryAddress && "border-[#b42318]"
            )}
            aria-invalid={Boolean(errors.deliveryAddress)}
            aria-describedby={
              errors.deliveryAddress ? "deliveryAddress-error" : undefined
            }
          />
        </FormField>

        <FormField id="notes" label="Optional Notes" className="sm:col-span-2">
          <textarea
            id="notes"
            name="notes"
            value={values.notes}
            onChange={(event) => updateNotes(event.target.value)}
            placeholder="Delivery instructions or questions (optional)"
            className={formTextareaClassName}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        className="h-14 w-full rounded-none bg-[var(--aw-primary)] text-sm font-medium tracking-widest uppercase text-white hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))]"
      >
        Submit Order Request
      </Button>

      <HowOrderingWorks />
    </form>
  );
}
