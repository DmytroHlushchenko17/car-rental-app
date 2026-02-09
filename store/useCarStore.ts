import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car } from "@/types/cars";
import { getFilteredCars } from "@/lib/carsService";

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
  isLoading: boolean;
  setAllCars: (cars: Car[]) => void;
  addCars: (newCars: Car[]) => void;
  onFavorite: (id: string) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setFilters: (filters: FilterState) => Promise<void>;
  setRehydrated: (v: boolean) => void;
  setIsLoading: (loading: boolean) => void;
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
      isLoading: false,
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

      setIsLoading: (loading) => set({ isLoading: loading }),

      setFilters: async (filters) => {
        set({ isLoading: true, filters });
        try {
          const response = await getFilteredCars(filters, 1, 12);
          set({
            filteredCars: response.cars,
            hasMore: response.cars.length === 12,
            page: 1,
            isLoading: false,
          });
        } catch (error) {
          console.error("Error fetching filtered cars:", error);
          set({ isLoading: false });
        }
      },
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
