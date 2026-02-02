import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Link href="/">
        <svg width="104" height="16">
          <use href="/Icoms.svg#Logo" />
        </svg>
      </Link>

      <nav className={css.navList}>
        <Link className={css.navHome} href="/">
          Home
        </Link>
        <Link className={css.navCatalog} href="/catalog">
          Catalog
        </Link>
      </nav>
    </div>
  );
};

export default Header;
