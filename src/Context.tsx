import React, { createContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { ContextContainerProps, ItemChapters } from "./types/interfaces";
import { BASE_URL } from "./api";

const DataContext = createContext<ContextContainerProps>({
  data: [],
  setData: () => {},
  isLoading: false,
});

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ItemChapters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return (
    <DataContext.Provider value={{ data, setData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
