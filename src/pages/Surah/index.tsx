import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IoMdBook } from "react-icons/io";

import Layout from "@/layout";

import { DataContext } from "@/Context";

import { ContextContainerProps, Verse } from "@/types/interfaces";
import { BASE_URL } from "@/api";
import { AyahTranslation } from "@/types/translation";
import { formatIconSurah } from "@/utils/formatSurah";
import { Skeleton } from "@/components";

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
        <div className="pt-28 px-14">
          <p className="font-surahname text-6xl text-center">
            {formatIconSurah(Number(id))}surah
          </p>
        </div>
        {/* END HERO */}

        <main className="mt-12">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-10">
              <Skeleton height="150px" />
              <Skeleton height="150px" />
            </div>
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
    <div className="flex justify-between gap-3 lg:gap-8 border-b pb-9">
      <div className="flex flex-col justify-end me-0 lg:me-6">
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-400 text-sm">{data.verse_key}</p>
          <button className="rounded-full group active:bg-sky-300 hover:bg-sky-200 p-1">
            <IoMdBook
              size="1.3rem"
              className="group-hover:text-sky-500 text-gray-400"
            />
          </button>
        </div>
      </div>
      <div className="flex-1">
        <p
          className="font-uthmani text-right text-4xl leading-relaxed"
          dir="rtl"
          lang="ar"
          dangerouslySetInnerHTML={{ __html: data.text_uthmani_tajweed }}
        ></p>

        <Translate verse_key={data.verse_key} />
      </div>
    </div>
  );
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
        <div className="flex flex-col justify-between gap-8 w-full">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className={`h-5 bg-gray-300 rounded w-full`}></div>
            </div>
          </div>
        </div>
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
