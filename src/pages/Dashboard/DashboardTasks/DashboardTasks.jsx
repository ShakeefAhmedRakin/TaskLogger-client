import { useEffect, useState } from "react";
import useTasks from "../../../hooks/useTasks";
import Section from "./Section";
const DashboardTasks = () => {
  const { userTasks, refetch } = useTasks();

  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const statuses = ["todo", "inprogress", "completed"];

  useEffect(() => {
    const fTodos = userTasks?.filter((task) => task.status === "todo");
    const fInProgress = userTasks?.filter(
      (task) => task.status === "inprogress"
    );
    const fCompleted = userTasks?.filter((task) => task.status === "completed");
    setTodos(fTodos);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [userTasks]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {statuses.map((status, index) => (
          <Section
            key={index}
            status={status}
            tasks={userTasks}
            refetch={refetch}
            todos={todos}
            inProgress={inProgress}
            completed={completed}
          ></Section>
        ))}
      </div>
    </>
  );
};

export default DashboardTasks;
