import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="w-full flex flex-row items-center justify-between py-5 px-24 bg-primary-blue text-white max-md:px-6">
      <div className="flex flex-row w-30 items-center justify-between">
        <p>Cars</p>
        <image src={"/logo.png"} width={80} height={80} alt="logo" />
      </div>
      <div className="flex items-center flex-row justify-around w-full pl-20 max-md:pl-10">
        <div className="cursor-pointer">
          <p>About</p>
        </div>
        <div className="cursor-pointer group relative">
          <p onClick={() => setShow(!show)}>Socials</p>

          <div
            className={`absolute flex-col ${
              show ? "flex max-md:group-hover:hidden" : "hidden"
            } hidden group-hover:flex bg-primary-blue top-14 -left-7 px-5 py-3 gap-1 rounded-xl animate-fadeIn`}
          >
            <div className="flex flex-row items-center justify-start">
              <AiOutlineInstagram />
              <p>Instagram</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <BiLogoFacebookSquare />
              <p>Faceboook</p>
            </div>
            <div className="flex flex-row items-center justify-start">
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <p>Company</p>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-primary-blue border-2 border-white text-white rounded-full"
          >Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
