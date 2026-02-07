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
export const removeSpaces = (value: string): string => {
  return value.replace(/\s/g, "");
};

export const formatMileage = (mileage: number): string => {
  return `${mileage.toLocaleString("ru-RU")} km`;
};
