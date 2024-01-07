import { IoMdSettings } from "react-icons/io";

const Navbar: React.FC<{
  drawer: boolean;
  setDrawer: (value: boolean) => void;
}> = ({ drawer, setDrawer }) => {
  return (
    <nav className="flex p-3 justify-between items-center">
      <div>
        <h1 className="font-bold text-2xl">Al-Quran Kareem</h1>
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
