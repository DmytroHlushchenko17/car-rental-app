"use client";
import css from "./CarsFilter.module.css";
import { useState, useMemo, useId } from "react";
import Select, { ClearIndicatorProps } from "react-select";
import { useCarStore } from "@/store/useCarStore";

interface BrandOption {
  value: string;
  label: string;
}

interface PriceOption {
  value: string;
  label: string;
}

const CustomClearIndicator = (
  props: ClearIndicatorProps<BrandOption | PriceOption, false>
) => {
  return (
    <div {...props.innerProps} className={css.clearIndicator}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L4.5 13.5"
          stroke="#121417"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 4.5L13.5 13.5"
          stroke="#121417"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default function CarsFilter() {
  const brandId = useId();
  const priceId = useId();
  const [brand, setBrand] = useState<BrandOption | null>(null);
  const [price, setPrice] = useState<{ value: string; label: string } | null>(
    null
  );
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const { allCars, setFilters, isLoading } = useCarStore();

  const brandOptions = useMemo(() => {
    const brands = Array.from(new Set(allCars.map((car) => car.brand)));
    return brands
      .map((brand) => ({ value: brand, label: brand }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [allCars]);

  const priceOptions = useMemo(() => {
    const prices: PriceOption[] = [];
    for (let i = 30; i <= 100; i += 10) {
      prices.push({ value: i.toString(), label: i.toString() });
    }
    return prices;
  }, []);

  const formatNumber = (value: string) => {
    const raw = value.replace(/\D/g, "");
    return raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    await setFilters({
      brand: brand?.value || null,
      price: price?.value || null,
      mileageFrom: mileageFrom.replace(/,/g, ""),
      mileageTo: mileageTo.replace(/,/g, ""),
    });
  };

  const handleBrandChange = (newValue: BrandOption | null) => {
    setBrand(newValue);
    if (newValue === null) {
      setFilters({
        brand: null,
        price: price?.value || null,
        mileageFrom: mileageFrom.replace(/,/g, ""),
        mileageTo: mileageTo.replace(/,/g, ""),
      });
    }
  };

  const handlePriceChange = (
    newValue: { value: string; label: string } | null
  ) => {
    setPrice(newValue);
    if (newValue === null) {
      setFilters({
        brand: brand?.value || null,
        price: null,
        mileageFrom: mileageFrom.replace(/,/g, ""),
        mileageTo: mileageTo.replace(/,/g, ""),
      });
    }
  };

  const commonSelectProps = {
    unstyled: true,
    noOptionsMessage: () => "This car is not on the list",
    isClearable: true,
    isDisabled: isLoading,
    components: {
      ClearIndicator: CustomClearIndicator,
    },
    classNames: {
      control: () => css.selectControl,
      placeholder: () => css.placeholder,
      singleValue: () => css.singleValue,
      menu: () => css.menu,
      option: ({
        isFocused,
        isSelected,
      }: {
        isFocused: boolean;
        isSelected: boolean;
      }) =>
        `${css.option} ${isFocused ? css.optionFocused : ""} ${
          isSelected ? css.optionSelected : ""
        }`,
      dropdownIndicator: ({
        selectProps,
      }: {
        selectProps: { menuIsOpen: boolean };
      }) =>
        `${css.dropdownIndicator} ${
          selectProps.menuIsOpen ? css.dropdownIndicatorOpen : ""
        }`,
      indicatorSeparator: () => css.indicatorSeparator,
      noOptionsMessage: () => css.noOptionsMessage,
    },
  };

  return (
    <form className={css.filterContainer} onSubmit={handleSearch}>
      <div className={css.fieldWrapper} style={{ width: "204px" }}>
        <label className={css.label} id="brand-label">
          Car brand
        </label>
        <Select<BrandOption>
          {...commonSelectProps}
          instanceId={brandId}
          aria-labelledby="brand-label"
          name="brand"
          options={brandOptions}
          placeholder="Choose a brand"
          value={brand}
          onChange={handleBrandChange}
        />
      </div>

      <div className={css.fieldWrapper} style={{ width: "196px" }}>
        <label className={css.label} id="price-label">
          Price/ 1 hour
        </label>
        <Select<PriceOption>
          {...commonSelectProps}
          instanceId={priceId}
          aria-labelledby="price-label"
          name="price"
          options={priceOptions}
          placeholder="Choose a price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <div className={css.fieldWrapper}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageWrapper}>
          <div className={css.mileageInputContainer}>
            <span className={css.inputLabel}>From</span>
            <input
              type="text"
              className={css.mileageInputLeft}
              value={mileageFrom}
              onChange={(e) => setMileageFrom(formatNumber(e.target.value))}
              disabled={isLoading}
            />
          </div>
          <div className={css.mileageInputContainer}>
            <span className={css.inputLabel}>To</span>
            <input
              type="text"
              className={css.mileageInputRight}
              value={mileageTo}
              onChange={(e) => setMileageTo(formatNumber(e.target.value))}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>

      <button type="submit" className={css.searchButton} disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
