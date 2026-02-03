import { Car } from "@/types/cars";
import css from "./CarList.module.css";
import Image from "next/image";
import Link from "next/link";

interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => {
  return (
    <section className="container">
      <div className={css.section}>
        <ul className={css.carList}>
          {cars.map((el) => {
            return (
              <li className={css.carListItem} key={el.id}>
                <Image
                  className={css.carListItemImage}
                  src={el.img}
                  alt="car"
                  width={276}
                  height={268}
                />
                <div className={css.carListItemBlock}>
                  <p className={css.carListItemBrand}>
                    {el.brand}
                    <use className={css.carListItemModel}>
                      {" "}
                      {el.model}
                    </use>, {el.year}
                  </p>
                  <p className={css.carListItemPrice}>${el.rentalPrice}</p>
                  <p className={css.carListItemText}>
                    {el.address} | {el.rentalCompany} | {el.type} | {el.mileage}{" "}
                    km
                  </p>
                </div>
                <Link href={`/catalog/${el.id}`}>
                  <button className={css.carListItemBtn} type="button">
                    Read more
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CarList;
