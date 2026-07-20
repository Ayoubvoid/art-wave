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
import { useLanguage } from "@/components/providers/language-provider";
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
  const { t } = useLanguage();
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

    const validationErrors = validateOrderRequest(values, t.order.validation);
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
        className="py-4 text-center sm:py-6"
      >
        <CheckCircle2
          className="mx-auto size-12 text-[var(--aw-accent)]"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="font-heading mt-6 text-xl text-[var(--aw-primary)] sm:text-2xl">
          {t.order.form.successTitle}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed md:text-base">
          {t.order.form.successP1}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_70%,transparent)]">
          {t.order.form.successP2}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <PaintingOrderSummary painting={painting} />

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField
          id="fullName"
          label={t.order.form.fullName}
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
          />
        </FormField>

        <FormField
          id="phone"
          label={t.order.form.phone}
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
          />
        </FormField>

        <FormField
          id="email"
          label={t.order.form.email}
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
          />
        </FormField>

        <FormField
          id="deliveryCity"
          label={t.order.form.deliveryCity}
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
          />
        </FormField>

        <FormField
          id="deliveryAddress"
          label={t.order.form.deliveryAddress}
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
          />
        </FormField>

        <FormField
          id="notes"
          label={t.order.form.notes}
          className="sm:col-span-2"
        >
          <textarea
            id="notes"
            name="notes"
            value={values.notes}
            onChange={(event) => updateNotes(event.target.value)}
            placeholder={t.order.form.notesPlaceholder}
            className={formTextareaClassName}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        className="h-14 min-h-[44px] w-full rounded-none bg-[var(--aw-primary)] text-sm font-medium tracking-widest uppercase text-white hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))]"
      >
        {t.order.form.submit}
      </Button>

      <HowOrderingWorks />
    </form>
  );
}
