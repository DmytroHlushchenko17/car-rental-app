import css from "./CarsFilter.module.css";
import { useState, useMemo } from "react";
import Select, { AriaOnFocus } from "react-select";
import { useCarStore } from "@/store/useCarStore";

interface BrandOption {
  value: string;
  label: string;
}

export default function CustomAriaLive() {
  const [ariaFocusMessage, setAriaFocusMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { allCars } = useCarStore();

  const brandOptions = useMemo(() => {
    const brands = Array.from(new Set(allCars.map((car) => car.brand)));
    return brands.map((brand) => ({ value: brand, label: brand }));
  }, [allCars]);

  //   const onFocus: AriaOnFocus<BrandOption> = ({ focused, isDisabled }) => {
  //     const msg = `You are currently focused on option ${focused.label}${
  //       isDisabled ? ", disabled" : ""
  //     }`;
  //     setAriaFocusMessage(msg);
  //     return msg;
  //   };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <form>
      <label className={css.label} id="aria-label" htmlFor="aria-example-input">
        Car brand
      </label>

      {/* {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote>&quot;{ariaFocusMessage}&quot;</blockquote>
      )} */}

      <Select<BrandOption>
        aria-labelledby="aria-label"
        // ariaLiveMessages={{
        //   onFocus,
        // }}
        className={css.blockquote}
        inputId="aria-example-input"
        name="brand"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={brandOptions}
        placeholder="Select brand..."
        isClearable
      />
    </form>
  );
}
