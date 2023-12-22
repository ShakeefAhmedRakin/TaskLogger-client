import { BiTaskX } from "react-icons/bi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { CgGoogleTasks } from "react-icons/cg";

const Tasks = ({ task, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Task has been deleted!");
          } else {
            toast.error("Task does note exist");
          }
        });
      }
    });
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { _id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div
        ref={drag}
        className={`font-heading p-4 border-2 rounded-xl shadow-md hover:cursor-grab ${
          isDragging ? "opacity-25" : "opacity-100"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-medium">{task.title}</h1>
            <p className="text-sm">{task.deadline}</p>
          </div>
          <div className="flex gap-2 items-center justify-end">
            <Link to={`/dashboard/update-task/${task._id}`}>
              <button className="btn btn-sm btn-circle text-xl bg-yellow-500 text-white hover:bg-yellow-500 border-none">
                <CgGoogleTasks />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(task._id)}
              className="btn btn-sm btn-circle text-xl bg-red-500 text-white hover:bg-red-500 border-none"
            >
              <BiTaskX />
            </button>
          </div>
        </div>
        <hr className="my-2" />
        <p className="text-sm font-heading mb-8">{task.description}</p>
        <p
          className={`uppercase text-xs text-end font-bold ${
            task.priority === "low" ? "text-green-600" : ""
          } ${task.priority === "moderate" ? "text-yellow-600" : ""} ${
            task.priority === "high" ? "text-red-600" : ""
          }`}
        >
          {task.priority}
        </p>
      </div>
    </>
  );
};

export default Tasks;
