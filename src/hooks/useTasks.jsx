import { useQuery } from "@tanstack/react-query";
import useAxiosPubic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useTasks = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPubic();

  const {
    data: userTasks = [],
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],

    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/user?email=${user?.email}`);
      return res.data;
    },
  });

  return { userTasks, isLoading, refetch };
};

export default useTasks;
