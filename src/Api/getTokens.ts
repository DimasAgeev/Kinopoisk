import axios from "axios";

const apiToken = `https://studapi.teachmeskills.by/auth/jwt/create/`;

interface QuerryParamsType {
  email: string;
  password: string;
}

interface TokensType {
  access: string;
  refresh: string;
}
export enum LocalStorage {
  AccessToken = "access_Token",
  RefreshToken = "refresh_Token",
}
export async function getTokens(
  querryParams: QuerryParamsType
): Promise<TokensType> {
  const tokens: TokensType = await axios
    .post(apiToken, querryParams)
    .then((response) => response.data);
  localStorage.setItem(LocalStorage.AccessToken, tokens.access);
  localStorage.setItem(LocalStorage.RefreshToken, tokens.refresh);
  return tokens;
}
