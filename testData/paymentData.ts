import { fakerEN as faker } from "@faker-js/faker";

export interface PaymentData {
  nameOnCard: string;
  cardNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
}

interface PaymentOwner {
  firstName: string;
  lastName: string;
}

export const createPaymentData = ({ firstName, lastName }: PaymentOwner): PaymentData => ({
  nameOnCard: `${firstName} ${lastName}`,
  cardNumber: faker.finance.creditCardNumber('visa'),
  cvv: faker.finance.creditCardCVV(),
  expiryMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'),
  expiryYear: String(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 }))
});
