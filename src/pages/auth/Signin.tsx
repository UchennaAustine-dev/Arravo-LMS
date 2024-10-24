import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeToggle, mainUser, onSign } from "../../redux/globalState";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccount } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  const onHandleNavigation = () => {
    dispatch(closeToggle());
    dispatch(onSign());
  };

  const [loading, setLoading] = useState<boolean>(false);

  const Schema = yup.object({
    emailAddress: yup.string().required(),
    password: yup.string().required().min(7),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    try {
      setLoading(true);
      const { emailAddress, password } = data;
      await loginAccount({ emailAddress, password }).then((res: any) => {
        dispatch(mainUser(res));
        toast.success("Login successfull");
        setInterval(() => {
          navigate("/auth");
        }, 2000);
      });
    } catch (error: any) {
      toast.error(`${toast.error} || "Error occured`);
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Toaster />
      <div className="w-full font-[poppins] fixed top-0 bg-black bg-opacity-90 z-[300] h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={onHandleSubmit}
          className="w-[500px] bg-white h-[600px] overflow-y-auto rounded-md relative flex flex-col items-center"
        >
          <div className="w-[95%] flex justify-end mt-2">
            <p>
              <IoCloseOutline
                size={30}
                className="hover:cursor-pointer"
                onClick={() => {
                  dispatch(closeToggle());
                }}
              />
            </p>
          </div>
          <div className="text-[20px] ">Welcome back</div>
          <div className="my-1" />
          {(errors.emailAddress || errors.password) && (
            <div className="w-[80%] bg-[#ffc6ff] h-[60px] my-2 rounded-md flex items-center justify-center">
              <div className="w-[90%] flex items-center">
                <div className="mr-2">
                  <MdErrorOutline size={25} color="red" />
                </div>
                <div className="text-[12px]">
                  We don't recognize that username or password. You can try
                  again or use another login option.
                </div>
              </div>
            </div>
          )}
          <div className="w-[80%] h-[45px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              {...register("emailAddress")}
              id="email"
              placeholder="name@gmail.com"
              className="mt-1 h-full border border-[gray] outline-none pl-3 w-full rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="w-[80%] h-[45px] mt-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Password{" "}
            </label>

            <div className="w-full h-[45px] relative flex items-center">
              <div
                className="absolute right-2"
                onClick={() => {
                  onEye;
                }}
              >
                {!eye ? (
                  <FiEye
                    onClick={() => {
                      setEye(true);
                    }}
                    size={20}
                    className="text-[gray] hover:cursor-pointer"
                  />
                ) : (
                  <FiEyeOff
                    onClick={() => setEye(false)}
                    size={20}
                    className="text-[gray] hover:cursor-pointer"
                  />
                )}
              </div>
              <input
                type={`${eye ? "text" : "password"}`}
                id="password"
                {...register("password")}
                placeholder="Enter your password"
                className="mt-1 h-full border border-[gray] outline-none pl-3 w-full rounded-md shadow-sm sm:text-sm"
              />
            </div>
            <div className="w-[95%] mt-2">
              <p className="w-fit underline text-[blue] text-[13px] hover:cursor-pointer">
                Forgot password?
              </p>{" "}
            </div>
            <div className="my-4">
              <button
                className="w-full h-[50px] rounded-md bg-[blue] text-white text-[14px]"
                type="submit"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="w-full flex items-center">
              <hr className="w-[50%]" />{" "}
              <span className="px-3 bg-white text-[13px]">or</span>{" "}
              <hr className="w-[50%]" />
            </div>
            <div className="w-full rounded-md border mt-2 border-[gray] h-[50px] flex items-center">
              <div className="w-[30px] h-[30px] border-[gray] ml-4">
                <FcGoogle size={30} />
              </div>
              <div className="text-[14px] tracking-wide font-medium ml-16">
                Continue with Google{" "}
              </div>
            </div>
            <div className="w-full rounded-md border mt-4 border-[gray] h-[50px] flex items-center">
              <div className="w-[30px] h-[30px] border-[gray] ml-4">
                <FaFacebookSquare size={30} color="blue" />
              </div>
              <div className="text-[14px] tracking-wide font-medium ml-16">
                Continue with Facebook{" "}
              </div>
            </div>
            <div className="w-full rounded-md border mt-4 border-[gray] h-[50px] flex items-center">
              <div className="w-[30px] h-[30px] border-[gray] ml-4">
                <FaApple color="gray" size={30} />
              </div>
              <div className="text-[14px] tracking-wide font-medium ml-16">
                Continue with Apple{" "}
              </div>
            </div>
            <div className="w-[95%] flex items-center justify-center">
              <div className="mt-4 text-[14px]">
                New to Coursera?{" "}
                <span
                  className="text-[blue] underline hover:cursor-pointer"
                  onClick={() => {
                    onHandleNavigation();
                  }}
                >
                  Sign up
                </span>
              </div>
            </div>
            <div className="my-3" />
            <hr className="w-full" />
            <div className="my-3" />
            <div className="w-[95%] text-[14px] underline text-[blue] flex items-center justify-center">
              Login with your organization
            </div>
            <div className="my-6" />
            <div className="w-[95%] flex items-center justify-center">
              <div className="text-[13px] text-[gray]">
                Having trouble loggin in?{" "}
                <span className="underline">Learner help center</span>
              </div>
            </div>
            <div className="my-6" />
            <div className="w-[95%] flex items-center justify-center ">
              <div className="text-[13px] text-[gray] text-center mb-7">
                This site is protected by reCAPTCHA Enterprise and the Google{" "}
                <span className="underline">Privacy</span> and{" "}
                <span>Terms of Service</span> apply.
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
