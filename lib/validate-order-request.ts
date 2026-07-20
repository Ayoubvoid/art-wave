import type { OrderRequestFieldErrors, OrderRequestFormValues } from "@/types";
import type { Translations } from "@/lib/i18n/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

export function validateOrderRequest(
  values: OrderRequestFormValues,
  messages: Translations["order"]["validation"]
): OrderRequestFieldErrors {
  const errors: OrderRequestFieldErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = messages.fullNameRequired;
  } else if (fullName.length < 2) {
    errors.fullName = messages.fullNameShort;
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = messages.phoneRequired;
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = messages.phoneInvalid;
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = messages.emailInvalid;
  }

  const deliveryCity = values.deliveryCity.trim();
  if (!deliveryCity) {
    errors.deliveryCity = messages.cityRequired;
  }

  const deliveryAddress = values.deliveryAddress.trim();
  if (!deliveryAddress) {
    errors.deliveryAddress = messages.addressRequired;
  } else if (deliveryAddress.length < 5) {
    errors.deliveryAddress = messages.addressShort;
  }

  return errors;
}

export function hasOrderRequestErrors(errors: OrderRequestFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
