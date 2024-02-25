export interface Verse {
  verse: {
    id: number;
    verse_number: number;
    verse_key: string;
    hizb_number: number;
    rub_el_hizb_number: number;
    ruku_number: number;
    manzil_number: number;
    page_number: number;
    juz_number: number;
    words: Word[];
  };
}

export interface Word {
  id: number;
  position: number;
  audio_url?: string;
  char_type_name: string;
  code_v1: string;
  page_number: number;
  line_number: number;
  text: string;
  translation: Translation;
  transliteration: Transliteration;
}

export interface Translation {
  text: string;
  language_name: string;
}

export interface Transliteration {
  text?: string;
  language_name: string;
}
