import useTasks from "../../../hooks/useTasks";

const DashboardHome = () => {
  const { userTasks } = useTasks();

  const todoCount = userTasks.filter((task) => task.status === "todo").length;

  const inProgressCount = userTasks.filter(
    (task) => task.status === "inprogress"
  ).length;

  const highPriorityCount = userTasks.filter(
    (task) =>
      task.priority === "high" &&
      (task.status === "todo" || task.status === "inprogress")
  ).length;

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-white font-heading p-5">
        <div
          className="bg-secondary py-10 flex justify-around items-center rounded-lg shadow-xl"
          data-aos="fade-up"
        >
          <div className="text-center">
            <p className="text-3xl font-bold">{todoCount}</p>
            <p>Todos</p>
          </div>
        </div>
        <div
          className="bg-[#02BCE9] py-10 flex justify-around items-center rounded-lg shadow-xl"
          data-aos="fade-up"
        >
          <div className="text-center">
            <p className="text-3xl font-bold">{inProgressCount}</p>
            <p>Tasks In Progress</p>
          </div>
        </div>
        <div
          className="bg-red-500 py-10 flex justify-around items-center rounded-lg shadow-xl"
          data-aos="fade-up"
        >
          <div className="text-center">
            <p className="text-3xl font-bold">{highPriorityCount}</p>
            <p>High Priority</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
