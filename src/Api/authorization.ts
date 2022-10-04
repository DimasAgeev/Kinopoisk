import axios, { AxiosResponse } from "axios";
export interface RegisteredUser {
  username: string;
  email: string;
  id: number;
}
export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}
const apiPath = `https://studapi.teachmeskills.by/auth/users/`;
export async function registerUser({
  ...querryParams
}: UserRegistration): Promise<RegisteredUser> {
  const { data } = await axios.post<
    UserRegistration,
    AxiosResponse<RegisteredUser>
  >(apiPath, querryParams);
  return data;
}
