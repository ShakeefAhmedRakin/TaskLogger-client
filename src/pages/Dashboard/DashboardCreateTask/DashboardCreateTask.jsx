import { FaTasks } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  MdDateRange,
  MdDescription,
  MdPriorityHigh,
  MdTitle,
} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardCreateTask = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const status = "todo";
    const task = { email, status, ...data };
    console.log(task);
  };
  return (
    <>
      <div className="space-y-2 font-heading">
        <h1 className="text-2xl md:text-3xl font-bold">Task Information</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
          <div className="flex items-center my-6 gap-2 ">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdTitle />
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Title"
                required
                {...register("title", { required: true })}
              ></input>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdPriorityHigh />
              </div>
              <select
                {...register("priority", { required: true })}
                defaultValue={"default"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-[11.5px] ps-10"
                required
              >
                <option disabled value={"default"}>
                  Priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="relative my-6">
            <div className="absolute inset-y-[14px] start-0 flex items-start ps-3.5 pointer-events-none">
              <MdDescription />
            </div>
            <textarea
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
              placeholder="Description"
              rows={5}
              required
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Deadline
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdDateRange />
              </div>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Your Name"
                required
                {...register("deadline", { required: true })}
              ></input>
            </div>
          </div>
          <button
            className="btn text-white bg-accent hover:bg-accent border-none"
            type="submit"
          >
            Create New Task <FaTasks className="text-xl"></FaTasks>
          </button>
        </form>
      </div>
    </>
  );
};

export default DashboardCreateTask;
