import { getCarDetails } from "@/lib/carsService";
import css from "./CarDetails.module.css";
import Image from "next/image";

interface CarDetailsProps {
  params: Promise<{ carId: string }>;
}

const CarDetails = async ({ params }: CarDetailsProps) => {
  const { carId } = await params;
  const carDetails = await getCarDetails(carId);
  return (
    <div className="container">
      <Image
        className={css.carDetailsImg}
        src={carDetails.img}
        alt="car"
        width={640}
        height={512}
      />
    </div>
  );
};

export default CarDetails;
