export type PaymentMethod = "cash" | "pix" | "card";

export type CheckoutItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Customer = {
  name: string;
  email: string;
};
