import { useContext } from "react";

import { IoMdSearch } from "react-icons/io";

import { ItemList } from "@/components";
import Layout from "@/layout";
import Logo from "@/assets/Quran-logo.svg";

import { DataContext } from "@/Context";
import { ContextContainerProps } from "@/types/interfaces";

const Home: React.FC = () => {
  const { data, isLoading } = useContext<ContextContainerProps>(DataContext);

  return (
    <Layout>
      <div className="flex flex-col w-11/12 md:w-4/5 mx-auto">
        {/* HERO */}
        <div className="pt-20 px-14">
          <img src={Logo} alt="Logo" className="w-52 mx-auto" />
        </div>
        {/* END HERO */}
        <div className="mt-12 flex border p-2 gap-2 rounded-md w-2/4 mx-auto">
          <IoMdSearch size="1.7em" color="#9CA3B7" />
          <input placeholder="Cari" className="outline-none text-xl" />
        </div>

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
