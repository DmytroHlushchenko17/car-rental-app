import { getCarDetails } from "@/lib/carsService";
import css from "./CarDetails.module.css";
import Image from "next/image";
import Form from "@/components/Form/Form";

interface CarDetailsProps {
  params: Promise<{ carId: string }>;
}

const CarDetails = async ({ params }: CarDetailsProps) => {
  const { carId } = await params;
  const carDetails = await getCarDetails(carId);
  return (
    <section className="container">
      <div className={css.carDetailsBlock}>
        <div className={css.blockImageForm}>
          <Image
            className={css.carDetailsImg}
            src={carDetails.img}
            alt="car"
            width="640"
            height="512"
            loading="eager"
          />
          <Form />
        </div>
        <div className={css.carDetailsBlockDetails}>
          <p className={css.carDetailsBlockDetailsTitle}>
            {carDetails.brand} {carDetails.model}, {carDetails.year}
            <span className={css.carDetailsBlockDetailsId}>
              id:{carDetails.id}
            </span>
          </p>
          <p className={css.carDetailsBlockDetailsAddress}>
            <svg className={css.locationIcon} width="16" height="16">
              <use href="/Icoms.svg#Location" />
            </svg>
            {carDetails.address} Mileage:
            {carDetails.mileage.toLocaleString("ru-RU")} km
          </p>
          <p className={css.carDetailsBlockDetailsPrice}>
            ${carDetails.rentalPrice}
          </p>
          <p className={css.carDetailsBlockDetailsText}>
            {carDetails.description}
          </p>
          <ul className={css.carDetailsBlockDetailsListRent}>
            <h3 className={css.carDetailsBlockDetailsListRentTitel}>
              Rental Conditions:
            </h3>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg"></use>
              </svg>
              {carDetails.rentalConditions[0]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg"></use>
              </svg>
              {carDetails.rentalConditions[1]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg"></use>
              </svg>
              {carDetails.rentalConditions[2]}
            </li>
          </ul>
          <ul className={css.carDetailsBlockDetailsListRent}>
            <h3 className={css.carDetailsBlockDetailsListRentTitel}>
              Car Specifications:
            </h3>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/Icoms.svg#Calendar"></use>
              </svg>
              Year: {carDetails.year}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/Icoms.svg#Car"></use>
              </svg>
              Type: {carDetails.type}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/Icoms.svg#Oil"></use>
              </svg>
              Fuel Consuption: {carDetails.fuelConsumption}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/Icoms.svg#Setting"></use>
              </svg>
              Engine Size: {carDetails.engineSize}
            </li>
          </ul>
          <ul>
            <h3 className={css.carDetailsBlockDetailsListRentTitel}>
              Accessories and functionalities:
            </h3>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.accessories[0]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.accessories[1]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.accessories[2]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.functionalities[0]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.functionalities[1]}
            </li>
            <li className={css.carDetailsBlockDetailsListRentItem}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/check-circle.svg" />
              </svg>
              {carDetails.functionalities[2]}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
