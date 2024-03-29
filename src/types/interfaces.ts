import { InfoChapter } from "./infoChapter";

export interface ContextContainerProps {
  data: ItemChapters[];
  setData: React.Dispatch<React.SetStateAction<ItemChapters[]>>;
  isLoading: boolean;
  getAllChapters: () => Promise<void>;
  getScriptAyah: (id: number) => Promise<void>;
  ayah: Ayah;
  setAyah: React.Dispatch<React.SetStateAction<Ayah>>;
  getSigleChapter: (id: number) => Promise<void>;
  infoChapter: InfoChapter;
}

export interface ItemChapters {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  translated_name: TranslatedName;
}

export interface TranslatedName {
  language_name: string;
  name: string;
}

// get sigle ayah
export interface Ayah {
  verses: Verse[];
  meta: Meta;
}

export interface Verse {
  id: number;
  verse_key: string;
  text_uthmani_tajweed: string;
}

export interface Meta {
  filters: Filters;
}

export interface Filters {
  chapter_number: string;
}
