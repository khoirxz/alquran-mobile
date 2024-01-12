import { IoLogoGithub } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="border-t pt-6">
      <div className="w-4/5 mx-auto">
        <div className="mx-auto flex flex-row justify-between">
          <div>
            <h2 className="font-title font-bold text-2xl mb-2">
              Al-Quran Kareem
            </h2>
            <p>
              <span className="font-title">Al-Quran Kareem</span> adalah
              Al-Quran online yang dapat di akses dimana saja.
            </p>
          </div>
          <div>
            <IoLogoGithub size="1.7em" />
          </div>
        </div>

        <div className="my-5">
          <p className="text-center text-sm">
            {new Date().getFullYear()} - Rizqi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
