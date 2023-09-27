import { IoIosArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dropShow, setDropShow] = useState(false);
  console.log(show);
  console.log(dropShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShow(false);
        setDropShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full py-5 flex max-md:justify-end bg-gega-dark-blue text-white font-inter">
      <div
        className={` ${
          show
            ? "max-md:flex absolute bg-gega-dark-blue top-14 animate-fadeIn gap-5 p-5 flex-col w-[200px]"
            : "max-md:hidden flex justify-around w-full"
        }`}
      >
        <div className="relative group">
          <p className="cursor-pointer group">
            <span>Otellər</span>{" "}
            <IoIosArrowDropdown
              className={`${
                show ? "" : "group-hover:rotate-180 duration-300"
              } inline ${dropShow ? "rotate-180" : ""} text-xl`}
              onClick={() => setDropShow(!dropShow)}
            />
          </p>
          <div
            className={`${
              dropShow
                ? "bg-gega-white text-gega-dark-blue flex pt-3 mt-3"
                : "hidden"
            } ${
              show
                ? ""
                : "hidden group-hover:flex z-20 absolute bg-gega-dark-blue pt-7"
            } w-[150px] p-2 animate-fadeIn flex-col gap-4 `}
          >
            <p className="cursor-pointer text-sm">Butik otellər</p>
            <p className="cursor-pointer text-sm">5 ulduzlu otellər</p>
          </div>
        </div>
        <div>
          <p className="cursor-pointer">Restoranlar</p>
        </div>
        <div>
          <p className="cursor-pointer">Gözəllik</p>
        </div>
        <div>
          <p className="cursor-pointer">Masaj və Spa</p>
        </div>
        <div>
          <p className="cursor-pointer">Kurs və Təhsil</p>
        </div>
        <div>
          <p className="cursor-pointer">İdman və Əyləncə</p>
        </div>
      </div>
      <div
        className="hidden max-md:block pr-5 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        {
            show ? <span className="">X</span> : <HiOutlineMenuAlt1 className="text-xl rotate-180" />
        }
        
      </div>
    </div>
  );
};

export default Navbar;
