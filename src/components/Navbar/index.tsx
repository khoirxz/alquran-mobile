import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

import { IoMdSettings } from "react-icons/io";

import { DataContext } from "@/Context";
import { ContextContainerProps } from "@/types/interfaces";
import "./loader.css";

const Navbar: React.FC<{
  drawer: boolean;
  setDrawer: (value: boolean) => void;
}> = ({ drawer, setDrawer }) => {
  const { isLoading, getSigleChapter, infoChapter } =
    useContext<ContextContainerProps>(DataContext);
  const { id } = useParams<{ id: string }>();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (id) {
      getSigleChapter(Number(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <nav className={`fixed w-full bg-white z-10 ${id ? "shadow" : ""}`}>
        <div className="flex justify-between items-center mb-3 pt-3 px-5 pb-1">
          <div>
            <Link to="/">
              <h1 className="font-bold text-2xl font-title">Al-Quran Kareem</h1>
            </Link>
          </div>
          <div>
            <button
              className="flex flex-row justify-center items-center rounded-full p-1"
              onClick={() => setDrawer(!drawer)}
            >
              <IoMdSettings size="1.7em" />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="pb-1">
            {id ? (
              isLoading ? (
                <p>Loading</p>
              ) : (
                <p className="inline font-bold px-5 border-b-[4px] pb-[0.4rem] border-sky-500">
                  {infoChapter.chapter.name_simple}
                </p>
              )
            ) : null}
          </div>
          {id ? (
            !isLoading ? (
              <motion.div
                className="progress"
                style={{ scaleX: scrollYProgress }}
              ></motion.div>
            ) : null
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
