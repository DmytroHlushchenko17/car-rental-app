import { Car, GetCarsResponse } from "@/types/cars";
import axios from "axios";

export async function getAllCars(page: number = 1, limit: number = 12) {
  const url = `https://car-rental-api.goit.global/cars?page=${page}&limit=${limit}`;
  const res = await axios.get<GetCarsResponse>(url);
  return res.data;
}

export async function getCarDetails(id: string) {
  const url = `https://car-rental-api.goit.global/cars/${id}`;
  const res = await axios.get<Car>(url);
  return res.data;
}

export async function getFilteredCars(
  filters: {
    brand?: string | null;
    price?: string | null;
    mileageFrom?: string;
    mileageTo?: string;
  },
  page: number = 1,
  limit: number = 12
) {
  const params = new URLSearchParams();

  if (filters.brand) params.append("brand", filters.brand);
  if (filters.price) params.append("rentalPrice", filters.price);
  if (filters.mileageFrom) params.append("mileageFrom", filters.mileageFrom);
  if (filters.mileageTo) params.append("mileageTo", filters.mileageTo);

  params.append("page", page.toString());
  params.append("limit", limit.toString());

  const url = `https://car-rental-api.goit.global/cars?${params.toString()}`;
  const res = await axios.get<GetCarsResponse>(url);
  return res.data;
}
