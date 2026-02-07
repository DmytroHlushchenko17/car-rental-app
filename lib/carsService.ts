import { Car, GetCarsResponse } from "@/types/cars";
import axios from "axios";
const api = process.env.KEY_BASE_URL;

export async function getAllCars(page: number = 1, limit: number = 12) {
  const url = `${api}/cars?page=${page}&limit=${limit}`;
  const res = await axios.get<GetCarsResponse>(url);
  return res.data;
}

export async function getCarDetails(id: string) {
  const url = `${api}/cars/${id}`;
  const res = await axios.get<Car>(url);
  return res.data;
}
