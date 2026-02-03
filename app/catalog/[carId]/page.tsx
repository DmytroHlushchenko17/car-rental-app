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
    <section className="container">
      <div className={css.carDetailsBlock}>
        <Image
          className={css.carDetailsImg}
          src={carDetails.img}
          alt="car"
          width={640}
          height={512}
        />
        <div className={css.carDetailsBlockDetails}>
          <p className={css.carDetailsBlockDetailsTitle}>
            {carDetails.brand} {carDetails.model}, {carDetails.year}
            <span className={css.carDetailsBlockDetailsId}>
              id:{carDetails.id}
            </span>
          </p>
          <p className={css.carDetailsBlockDetailsAddress}>
            <svg>
              <use></use>
            </svg>
            {carDetails.address} Mileage:{carDetails.mileage} km
          </p>
          <p className={css.carDetailsBlockDetailsPrice}>
            ${carDetails.rentalPrice}
          </p>
          <p className={css.carDetailsBlockDetailsText}>
            {carDetails.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
