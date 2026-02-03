import { Car, GetCarsResponse } from "@/types/cars";
import axios from "axios";

export async function getAllCars() {
  const url = "https://car-rental-api.goit.global/cars";
  const res = await axios.get<GetCarsResponse>(url);
  return res.data;
}

export async function getCarDetails(id: string) {
  const url = `https://car-rental-api.goit.global/cars/${id}`;
  const res = await axios.get<Car>(url);
  return res.data;
}
