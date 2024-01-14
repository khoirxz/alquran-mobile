import { useContext, useEffect } from "react";

import { IoMdSearch } from "react-icons/io";

import { ItemList } from "@/components";
import Layout from "@/layout";
import LogoLight from "@/assets/Quran-logo-light.svg";

import { DataContext } from "@/Context";
import { ContextContainerProps } from "@/types/interfaces";

const Home: React.FC = () => {
  const { data, isLoading, getAllChapters, setAyah } =
    useContext<ContextContainerProps>(DataContext);

  useEffect(() => {
    getAllChapters();
    setAyah({
      verses: [],
      meta: {
        filters: {
          chapter_number: "",
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <div className="pt-28 pb-12 px-4 lg:px-14 bg-hero-light bg-center bg-no-repeat bg-cover">
        <div className="bg-hero-light"></div>
        <img src={LogoLight} alt="Logo" className="w-52 mx-auto" />

        <div className="mt-12 flex p-2 gap-2 rounded-xl w-4/5 lg:w-2/5 mx-auto bg-white shadow-lg">
          <IoMdSearch size="1.7em" color="#9CA3B7" />
          <input placeholder="Cari" className="outline-none text-xl w-full" />
        </div>
      </div>
      {/* END HERO */}
      <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
        <main className="mt-12">
          <div className="border-b">
            <p className="font-bold border-b-2 inline border-black">
              Daftar surah
            </p>
          </div>

          <div className="mt-5">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((item) => (
                  <ItemList key={item.id} data={item} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
