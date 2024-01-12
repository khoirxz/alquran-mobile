import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "@/layout";
import Logo from "@/assets/Quran-logo.svg";

import { DataContext } from "@/Context";

import { ContextContainerProps, Verse } from "@/types/interfaces";
import { BASE_URL } from "@/api";
import { AyahTranslation } from "@/types/translation";

const Surah: React.FC = () => {
  const { getScriptAyah, isLoading, ayah } =
    useContext<ContextContainerProps>(DataContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getScriptAyah(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
        {/* HERO */}
        <div className="pt-20 px-14">
          <img src={Logo} alt="Logo" className="w-52 mx-auto" />
        </div>
        {/* END HERO */}

        <main className="mt-12">
          {isLoading ? (
            <p>Loading</p>
          ) : (
            <div className="grid grid-cols-1 gap-10">
              {ayah.verses.map((item, i) => (
                <ListAyah key={i} data={item} />
              ))}
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
};

const ListAyah: React.FC<{ data: Verse }> = ({ data }) => {
  return (
    <div>
      <p className="font-uthmani text-right text-4xl">
        {data.text_uthmani}{" "}
        <ArabicNumber number={Number(data.verse_key.split(":")[1])} />
      </p>
      {data.id}
      <Translate verse_key={data.verse_key} />
    </div>
  );
};

const ArabicNumber: React.FC<{ number: number }> = ({ number }) => {
  // Fungsi untuk mengganti setiap digit dengan karakter Arab
  const convertToArabic = (digit: string) => {
    const arabicDigits = [
      "\u0660",
      "\u0661",
      "\u0662",
      "\u0663",
      "\u0664",
      "\u0665",
      "\u0666",
      "\u0667",
      "\u0668",
      "\u0669",
    ];
    return arabicDigits[parseInt(digit, 10)] || digit;
  };

  // Mengonversi setiap digit dalam angka ke karakter Arab
  const arabicNumber = String(number).split("").map(convertToArabic).join("");

  return <span className="font-uthmani">{arabicNumber}</span>;
};

const Translate: React.FC<{ verse_key: string }> = ({ verse_key }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [translateInfo, setTranslateInfo] = useState<AyahTranslation>({
    translations: [],
    meta: {
      author_name: "",
      filters: {
        verse_key: "",
        resource_id: 0,
      },
      translation_name: "",
    },
  });

  useEffect(() => {
    const getTranslation = async (verse_key: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/quran/translations/33?verse_key=${verse_key}`
        );

        setIsLoading(false);
        setTranslateInfo(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getTranslation(verse_key);
  }, [verse_key]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        translateInfo.translations.map((item, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: item.text }}
            className="mt-5"
          />
        ))
      )}
    </>
  );
};

export default Surah;
