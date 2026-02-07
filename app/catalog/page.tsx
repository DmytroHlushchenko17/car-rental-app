import CarList from "@/components/CarList/CarList";
import { getAllCars } from "@/lib/carsService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Catalog | Wide Selection of Vehicles | RentDrive",
  description:
    "Browse our extensive catalog of rental cars. From economy to luxury, find the perfect vehicle for any occasion and budget.",
};

const Page = async () => {
  const data = await getAllCars();

  return (
    <div>
      <CarList cars={data.cars} />
    </div>
  );
};

export default Page;
