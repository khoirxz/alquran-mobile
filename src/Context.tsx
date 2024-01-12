import React, { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { Ayah, ContextContainerProps, ItemChapters } from "./types/interfaces";
import { BASE_URL } from "./api";

const DataContext = createContext<ContextContainerProps>({
  data: [],
  setData: () => {},
  isLoading: false,
  getScriptAyah: async () => {},
  ayah: {
    verses: [],
    meta: {
      filters: {
        chapter_number: "",
      },
    },
  },
});

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ItemChapters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ayah, setAyah] = useState<Ayah>({
    verses: [],
    meta: {
      filters: {
        chapter_number: "",
      },
    },
  });

  useEffect(() => {
    const getChapters = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/chapters?language=id`);

        setData(response.data.chapters);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getChapters();
  }, []);

  const getScriptAyah = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/quran/verses/uthmani?chapter_number=${id}`
      );

      console.log(response.data);
      setIsLoading(false);
      setAyah(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{ data, setData, isLoading, getScriptAyah, ayah }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
