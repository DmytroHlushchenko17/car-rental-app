import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car } from "@/types/cars";

interface CarState {
  allCars: Car[];
  favorites: string[];
  page: number;
  hasMore: boolean;
  setAllCars: (cars: Car[]) => void;
  addCars: (newCars: Car[]) => void;
  onFavorite: (id: string) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
}

export const useCarStore = create<CarState>()(
  persist(
    (set) => ({
      allCars: [],
      favorites: [],
      page: 1,
      hasMore: true,

      setAllCars: (cars) => set({ allCars: cars }),

      addCars: (newCars) =>
        set((state) => ({ allCars: [...state.allCars, ...newCars] })),

      onFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),

      setPage: (page) => set({ page }),

      setHasMore: (hasMore) => set({ hasMore }),
    }),
    {
      name: "car-storage",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
