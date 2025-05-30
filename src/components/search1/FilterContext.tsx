import { createContext, useState, useContext, ReactNode } from "react";
interface FilterContextType {
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  setSelectedVideoDurations: (durations: string[]) => void;
  toggleCategory: (category: string) => void;
  selectedVideoDurations: string[];
  toggleVideoDuration: (duration: string) => void;
  handleClear: () => void;
  selectedLevel: string[];
  setSelectedLevel: (level: string[]) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedVideoDurations, setSelectedVideoDurations] = useState<
    string[]
  >([]);
  const [selectedLevel, setSelectedLevel] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleVideoDuration = (duration: string) => {
    setSelectedVideoDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration]
    );
  };

  const handleClear = () => {
    setSelectedRating(null);
    setSelectedCategories([]);
    setSelectedVideoDurations([]);
  };
  return (
    <FilterContext.Provider
      value={{
        selectedRating,
        setSelectedRating,
        selectedCategories,
        setSelectedCategories,
        selectedVideoDurations,
        setSelectedVideoDurations,
        selectedLevel,
        setSelectedLevel,
        toggleCategory,
        toggleVideoDuration,
        handleClear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
