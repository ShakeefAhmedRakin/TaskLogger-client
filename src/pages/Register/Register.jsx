import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { createUser, addUsernamePhoto, logOut, signInUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      toast.error("Password must have an upper case letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(data.password)) {
      toast.error("Password must have a special character");
      return;
    }

    if (data.password !== data.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      data["image"] = res.data.data.display_url;
      const user_info = { ...data };
      createUser(user_info.email, user_info.password)
        .then(() => {
          addUsernamePhoto(data.name, data.image).then(() => {
            delete user_info.password;
            delete user_info.confirm_password;
            logOut().then(() => {
              toast.success("Successfully registered. You can log in now!");
              setTimeout(() => {
                navigate("/login");
              }, 1000);
            });
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      <div className="custom-min-height flex justify-center items-center gap-5 py-0 md:py-16">
        {/* FORM */}
        <div className="flex-1 font-heading" data-aos="fade-right">
          <div className="max-w-sm mx-auto px-5">
            <h1 className="text-center text-2xl font-semibold">Sign Up</h1>
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
              {/* NAME INPUT */}
              <div>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <IoPersonSharp />
                  </div>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                    placeholder="Your Name"
                    required
                  ></input>
                </div>
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
              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <RiLockPasswordFill />
                </div>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Confirm Password"
                  required
                  {...register("confirm_password", { required: true })}
                ></input>
              </div>
              <div className="divider divider-vertical"></div>
              {/* IMAGE INPUT */}
              <div className="mb-6">
                <label className="ml-1 mb-2 text-sm text-gray-900">
                  Profile Picture
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                  accept="image/*"
                  required
                />
              </div>

              <button className="btn bg-accent text-white w-full hover:bg-accent border-none mb-3">
                Sign Up
              </button>
              <p className="mb-6 text-center text-sm font-medium">
                {"Don't have an account?"}{" "}
                <Link className="link text-accent" to={"/register"}>
                  Sign up
                </Link>
              </p>
            </form>
            {/* FORM ENDS */}
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

export default Register;
