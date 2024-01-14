import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { Ayah, ContextContainerProps, ItemChapters } from "./types/interfaces";
import { BASE_URL } from "./api";
import { InfoChapter } from "./types/infoChapter";

const DataContext = createContext<ContextContainerProps>({
  data: [],
  setData: () => {},
  isLoading: false,
  getAllChapters: async () => {},
  getScriptAyah: async () => {},
  ayah: {
    verses: [],
    meta: {
      filters: {
        chapter_number: "",
      },
    },
  },
  setAyah: () => {},
  getSigleChapter: async () => {},
  infoChapter: {
    chapter: {
      id: 0,
      revelation_place: "",
      revelation_order: 0,
      bismillah_pre: false,
      name_simple: "",
      name_complex: "",
      name_arabic: "",
      verses_count: 0,
      pages: [],
      translated_name: { language_name: "", name: "" },
    },
  },
});

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ItemChapters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [infoChapter, setInfoChapter] = useState<InfoChapter>({
    chapter: {
      id: 0,
      revelation_place: "",
      revelation_order: 0,
      bismillah_pre: false,
      name_simple: "",
      name_complex: "",
      name_arabic: "",
      verses_count: 0,
      pages: [],
      translated_name: { language_name: "", name: "" },
    },
  });
  const [ayah, setAyah] = useState<Ayah>({
    verses: [],
    meta: {
      filters: {
        chapter_number: "",
      },
    },
  });

  const getAllChapters = async () => {
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

  const getScriptAyah = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/quran/verses/uthmani_tajweed?chapter_number=${id}`
      );

      console.log(response.data);
      setIsLoading(false);
      setAyah(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSigleChapter = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/chapters/${id}`);

      setIsLoading(false);
      setInfoChapter(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
        getAllChapters,
        getScriptAyah,
        ayah,
        setAyah,
        getSigleChapter,
        infoChapter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
