import { fakerEN as faker, } from "@faker-js/faker";
import type { ReviewData } from "../pages/ProductDetailsPage";

export const createReviewData = (): ReviewData => {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    reviewText: faker.lorem.text()
  }
}