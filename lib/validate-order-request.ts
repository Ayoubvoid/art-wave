import type { OrderRequestFieldErrors, OrderRequestFormValues } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

export function validateOrderRequest(
  values: OrderRequestFormValues
): OrderRequestFieldErrors {
  const errors: OrderRequestFieldErrors = {};

  const fullName = values.fullName.trim();
  if (!fullName) {
    errors.fullName = "Full name is required.";
  } else if (fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const deliveryCity = values.deliveryCity.trim();
  if (!deliveryCity) {
    errors.deliveryCity = "Delivery city is required.";
  }

  const deliveryAddress = values.deliveryAddress.trim();
  if (!deliveryAddress) {
    errors.deliveryAddress = "Delivery address is required.";
  } else if (deliveryAddress.length < 5) {
    errors.deliveryAddress = "Please enter a complete delivery address.";
  }

  return errors;
}

export function hasOrderRequestErrors(errors: OrderRequestFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
