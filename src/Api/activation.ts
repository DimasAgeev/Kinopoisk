import axios, { AxiosResponse } from "axios";
const apiPath = `https://studapi.teachmeskills.by/auth/users/activation/`;

interface ActivateUsertype {
  uid: string;
  token: string;
}

export async function ActivateUser(
  querryParams: ActivateUsertype
): Promise<AxiosResponse> {
  console.log(querryParams);
  return await axios.post(apiPath, querryParams);
}
