"use client";
import { Car } from "@/types/cars";
import css from "./CarList.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { getAllCars } from "@/lib/carsService";
import { useCarStore } from "@/store/useCarStore";
import CustomAriaLive from "../CarsFilter/CarsFilter";

interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => {
  const {
    allCars,
    favorites,
    page,
    hasMore,
    setAllCars,
    addCars,
    onFavorite,
    setPage,
    setHasMore,
  } = useCarStore();

  useEffect(() => {
    if (allCars.length === 0) {
      setAllCars(cars);
    }
  }, [cars, allCars.length, setAllCars]);

  const handleLoad = async () => {
    const nextPage = page + 1;
    const data = await getAllCars(nextPage);

    if (data.cars.length > 0) {
      addCars(data.cars);
      setPage(nextPage);
    }

    if (nextPage >= data.totalPages) {
      setHasMore(false);
    }
  };

  return (
    <section className="container">
      <div className={css.section}>
        <div className={css.carListFilter}>
          <CustomAriaLive />
        </div>
        <ul className={css.carList}>
          {allCars.map((el) => {
            const isFavorite = favorites.includes(el.id);
            return (
              <li className={css.carListItem} key={el.id}>
                <div className={css.imageBlock}>
                  <Image
                    className={css.carListItemImage}
                    src={el.img}
                    alt="car"
                    width="276"
                    height="268"
                  />
                  <svg
                    className={css.iconHeart}
                    width="16"
                    height="16"
                    onClick={() => onFavorite(el.id)}
                  >
                    <use
                      href={`/Icoms.svg#${isFavorite ? "Love-blue" : "Love"}`}
                    />
                  </svg>
                </div>
                <div className={css.carListItemBlock}>
                  <p className={css.carListItemBrand}>
                    {el.brand}
                    <span className={css.carListItemModel}>
                      {" "}
                      {el.model}
                    </span>, {el.year}
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
        {hasMore && (
          <button className={css.carListBtn} type="button" onClick={handleLoad}>
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default CarList;
