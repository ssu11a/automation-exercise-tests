import { fakerEN as faker } from "@faker-js/faker";
import { ContactUsData } from "../pages/ContactUsPage";

export const createContactUsData = (): ContactUsData => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const subject = faker.lorem.sentence();
  const message = faker.lorem.paragraph();

  return {
    name,
    email,
    subject,
    message,
  };
}