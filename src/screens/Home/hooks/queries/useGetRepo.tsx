import { useQuery } from "@tanstack/react-query";
import { apiInstance } from "../../../../service";
import axios from "axios";

const getRepo = async (): Promise<Array<any> | undefined> => {
  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: "Bearer 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",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useGetRepo = () => {
  return useQuery({
    queryKey: ["getRepo"],
    queryFn: async () => await getRepo(),

    refetchOnWindowFocus: false,
    // onError: (error) => {
    //   // console.log(error);
    // },
  });
};
