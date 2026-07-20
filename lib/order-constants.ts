export const ORDER_STEPS = [
  "Submit your order request.",
  "Our team contacts you.",
  "We confirm your delivery details.",
  "Your painting is securely packaged.",
  "You pay when the painting is delivered.",
] as const;

export const EMPTY_ORDER_FORM = {
  fullName: "",
  phone: "",
  email: "",
  deliveryCity: "",
  deliveryAddress: "",
  notes: "",
} as const;
