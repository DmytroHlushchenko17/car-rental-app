import CarList from "@/components/CarList/CarList";
import { getAllCars } from "@/lib/carsService";

const Page = async () => {
  const data = await getAllCars();

  return (
    <div>
      <CarList cars={data.cars} />
    </div>
  );
};

export default Page;
