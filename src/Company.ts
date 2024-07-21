import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    // we have to initialize the full location object in the constructor
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
