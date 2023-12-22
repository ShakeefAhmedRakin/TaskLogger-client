import { useDrop } from "react-dnd";
import Tasks from "./Tasks";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "sonner";

const Section = ({ status, tasks, refetch, todos, inProgress, completed }) => {
  const axiosPublic = useAxiosPublic();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item._id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "todo";
  let bg = "bg-primary";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "in progress";
    bg = "bg-accent";
    tasksToMap = inProgress;
  }

  if (status === "completed") {
    text = "completed";
    bg = "bg-green-600";
    tasksToMap = completed;
  }

  const addItemToSection = (id) => {
    axiosPublic
      .patch(`/tasks/status/${id}/${status}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          toast.success("Task status has been updated");
        }
      })
      .catch((error) => {
        console.error("Error updating task status:", error);
        toast.error("Task status update failed");
      });
  };
  return (
    <>
      <div ref={drop} className="flex flex-col h-full">
        <div
          className={`${bg} text-white rounded-t-xl font-bold p-4 justify-center flex items-center gap-2 font-heading`}
        >
          <h2 className="uppercase">{text}</h2>{" "}
          <p className="text-black bg-white rounded-full aspect-square w-8 flex items-center justify-center">
            {tasksToMap.length}
          </p>
        </div>
        <div
          className={`w-full flex flex-col gap-4 p-2 pt-5 border-2 border-t-0 rounded-b-xl flex-1 ${
            isOver ? "bg-base-300" : ""
          }`}
        >
          {tasksToMap.length > 0 &&
            tasksToMap.map((task) => (
              <Tasks key={task._id} task={task} refetch={refetch}></Tasks>
            ))}
        </div>
      </div>
    </>
  );
};

export default Section;
