export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: [string, string?, string?];
  functionalities: [string, string?, string?];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: [string, string?, string?];
  mileage: number;
}

export interface GetCarsResponse {
  totalCars: number;
  page: number;
  totalPages: number;
  cars: Car[];
}
