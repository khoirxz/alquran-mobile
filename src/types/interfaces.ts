export interface ContextContainerProps {
  data: ItemChapters[];
  setData: React.Dispatch<React.SetStateAction<ItemChapters[]>>;
  isLoading: boolean;
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