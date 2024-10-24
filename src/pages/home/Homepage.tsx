import { useDispatch } from "react-redux";
import { logOut } from "../../redux/globalState";

const Homepage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className="text-[30px] font-medium tracking-wide">
          This is the Home Screen
        </div>
        <div className="my-3">
          <button
            className="px-6 py-3 rounded-md text-white font-medium bg-[blue]"
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
