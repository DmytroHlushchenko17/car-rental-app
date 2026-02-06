import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car } from "@/types/cars";

interface FilterState {
  brand: string | null;
  price: string | null;
  mileageFrom: string;
  mileageTo: string;
}

interface CarState {
  allCars: Car[];
  filteredCars: Car[];
  favorites: string[];
  rehydrated: boolean;
  page: number;
  hasMore: boolean;
  filters: FilterState;
  setAllCars: (cars: Car[]) => void;
  addCars: (newCars: Car[]) => void;
  onFavorite: (id: string) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setFilters: (filters: FilterState) => void;
  setRehydrated: (v: boolean) => void;
}

export const useCarStore = create<CarState>()(
  persist(
    (set) => ({
      allCars: [],
      filteredCars: [],
      favorites: [],
      rehydrated: false,
      page: 1,
      hasMore: true,
      filters: {
        brand: null,
        price: null,
        mileageFrom: "",
        mileageTo: "",
      },

      setRehydrated: (v: boolean) => set({ rehydrated: v }),

      setAllCars: (cars) => set({ allCars: cars, filteredCars: cars }),

      addCars: (newCars) =>
        set((state) => {
          const updatedCars = [...state.allCars, ...newCars];
          return { allCars: updatedCars, filteredCars: updatedCars };
        }),

      onFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),

      setPage: (page) => set({ page }),

      setHasMore: (hasMore) => set({ hasMore }),

      setFilters: (filters) =>
        set((state) => {
          const { brand, price, mileageFrom, mileageTo } = filters;

          const filtered = state.allCars.filter((car) => {
            const matchesBrand = brand ? car.brand === brand : true;
            const matchesPrice = price
              ? Number(car.rentalPrice.replace("$", "")) <= Number(price)
              : true;
            const matchesFrom = mileageFrom
              ? car.mileage >= Number(mileageFrom)
              : true;
            const matchesTo = mileageTo
              ? car.mileage <= Number(mileageTo)
              : true;

            return matchesBrand && matchesPrice && matchesFrom && matchesTo;
          });

          return {
            filters,
            filteredCars: filtered,
          };
        }),
    }),
    {
      name: "car-storage",
      partialize: (state) => ({ favorites: state.favorites }),
      onRehydrateStorage: () => (state, error) => {
        if (error) return;
        if (state && typeof state.setRehydrated === "function") {
          state.setRehydrated(true);
        }
      },
    }
  )
);
