import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { openToggle, onSign } from "../../redux/globalState";
import Signin from "../../pages/auth/Signin";
import Signup from "../../pages/auth/Signup";
import Logo from "../../assets/arravo_logo_academy_red.png";

const AuthHeader = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const sign = useSelector((state: any) => state.sign);
  return (
    <>
      {toggle && <Signin />}
      {sign && <Signup />}
      <div className="w-full h-[70px] flex items-center justify-center font-[poppins]  ">
        <div className="w-full z-50 flex items-center h-[70px] justify-center fixed border-b-2 bg-blue-600">
          <div className="w-[95%] flex h-full items-center justify-between">
            <div className="flex items-center">
              <div className="hidden max-md:block mr-4">
                <RxHamburgerMenu
                  size={20}
                  className="hover:cursor-pointer transition-all duration-300 hover:text-[gray]"
                />
              </div>
              <div className="font-[extra] flex items-center text-[30px] text-white ">
                <img src={Logo} alt="" className="mr-[5px]" />
                LMS
              </div>
              <div className="mx-3 max-md:hidden px-4 py-2 text-[14px] rounded-md border-[1.5px] border-white  flex items-center">
                <div className="text-white ">Explore</div>
                <div className="ml-1">
                  <FaAngleDown />
                </div>
              </div>
              <div className="flex items-center relative max-md:hidden">
                <div className="w-[600px] max-xl:w-[300px] h-[40px] flex items-center rounded-full border overflow-hidden ">
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    className="outline-none pl-4 caret-blue-600 placeholder:text-[13px] relative w-full h-full"
                  />
                  <div className="absolute right-3">
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[blue] text-white">
                      <CiSearch size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-[14px] max-md:hidden">
              <div className="mr-4 hover:cursor-pointer transition-all duration-300 hover:text-[#797979]">
                Online Degrees
              </div>
              <div className="mr-4 hover:cursor-pointer transition-all duration-300 hover:text-[#797979]">
                Careers
              </div>
              <div
                className="mr-4 hover:cursor-pointer transition-all duration-300 text-white font-semibold"
                onClick={() => {
                  dispatch(openToggle());
                }}
              >
                Login
              </div>
              <div
                className="py-2 px-3 rounded-md border-[2px] border-white text-white hover:bg-blue-100 transition-all duration-300 hover:cursor-pointer font-semibold"
                onClick={() => {
                  dispatch(onSign());
                }}
              >
                Join for Free
              </div>
            </div>
            <div className="hidden max-md:block">
              <CiSearch
                size={20}
                className="hover:cursor-pointer transition-all duration-300 hover:text-[gray]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
