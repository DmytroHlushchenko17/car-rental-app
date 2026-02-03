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

      <nav>
        <ul className={css.navList}>
          <li>
            <Link className={css.navHome} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navCatalog} href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
