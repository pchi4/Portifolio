import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface RootObject {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const getProfile = async (): Promise<RootObject | undefined> => {
  try {
    const response = await axios.get("https://api.github.com/users/pchi4");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => await getProfile(),

    refetchOnWindowFocus: false,
  });
};
