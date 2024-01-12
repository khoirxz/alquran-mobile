export interface AyahTranslation {
  translations: Translation[];
  meta: Meta;
}

interface Translation {
  resource_id: number;
  text: string;
}

interface Meta {
  translation_name: string;
  author_name: string;
  filters: Filters;
}

interface Filters {
  verse_key: string;
  resource_id: number;
}
