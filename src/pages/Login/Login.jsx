import useAuth from "../../hooks/useAuth";
import { useState } from "react";

import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { signInUser, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="custom-min-height flex justify-center items-center gap-5 py-0 md:py-16">
        {/* FORM */}
        <div className="flex-1 font-heading" data-aos="fade-right">
          <div className="max-w-sm mx-auto px-5">
            <h1 className="text-center text-2xl font-semibold">Login</h1>
            {/* FORM BEGINS */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* EMAIL INPUT */}
              <div className="relative my-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Your Email"
                  required
                  {...register("email", { required: true })}
                ></input>
              </div>
              {/* PASSWORD INPUT */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordFill />
                </div>
                <input
                  type={seePassword ? "text" : "password"}
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Your Password"
                  required
                  {...register("password", { required: true })}
                ></input>
                <button
                  type="button"
                  className="absolute right-3 inset-y-0 text-xl text-gray-600"
                  onClick={() => {
                    setSeePassword(!seePassword);
                  }}
                >
                  {seePassword ? (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  ) : (
                    <AiFillEye></AiFillEye>
                  )}
                </button>
              </div>
              <button className="btn bg-accent text-white w-full hover:bg-accent border-none mb-3">
                Login
              </button>
              <p className="mb-6 text-center text-sm font-medium">
                {"Don't have an account?"}{" "}
                <Link className="link text-accent" to={"/register"}>
                  Sign up
                </Link>
              </p>
            </form>
            {/* FORM ENDS */}
            <div className="divider divider-vertical">OR</div>
            <button
              onClick={handleFacebookSignIn}
              className="w-full btn mb-4 border-none bg-[#0866FF] hover:bg-[#0f55c7] text-white"
            >
              <FaFacebook className="text-xl"></FaFacebook>Continue with
              Facebook
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="w-full btn mb-4 bg-base-100 hover:bg-base-200"
            >
              <FcGoogle className="text-xl"></FcGoogle>
              Continue with Google
            </button>
          </div>
        </div>
        {/* IMAGE */}
        <div className="flex-1 hidden md:flex" data-aos="fade-left">
          <img src="/form-image.png" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Login;
