import { useQuery } from "react-query";
import axios from "axios";

export const useGetBetsQuery = () => {
  const queryInfo = useQuery({
    queryKey: ["bets"],
    queryFn: async () => {
      const response = await axios.get(
        "https://nesine-case-study.onrender.com/bets"
      );

      return response.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return queryInfo;
};
