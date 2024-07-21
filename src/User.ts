import { faker } from "@faker-js/faker";

// in order to use this class elsewhere, you must export it
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // we have to initialize the full location object in the constructor
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
