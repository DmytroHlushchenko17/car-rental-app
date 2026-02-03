import Link from "next/link";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.heroTitle}>Find your perfect rental car</h1>
      <p className={css.heroText}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link href="/catalog">
        <button className={css.heroButton} type="button">
          View Catalog
        </button>
      </Link>
    </div>
  );
};

export default Hero;
