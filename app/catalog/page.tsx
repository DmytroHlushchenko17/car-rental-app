import CarList from "@/components/CarList/CarList";
import { getAllCars } from "@/lib/carsService";

const Page = async () => {
  const data = await getAllCars();
  console.log(data);

  return (
    <div>
      <CarList cars={data.cars} />
    </div>
  );
};

export default Page;
