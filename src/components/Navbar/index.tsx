import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

const Navbar: React.FC<{
  drawer: boolean;
  setDrawer: (value: boolean) => void;
}> = ({ drawer, setDrawer }) => {
  return (
    <nav className="flex py-3 px-5 justify-between items-center shadow-md">
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
    </nav>
  );
};

export default Navbar;
