import { apiInstace } from "constant";
import {  LoginType } from "schema";
import { User, signUp } from "types";

const api = apiInstace({
  baseURL: import.meta.env.VITE_ADMINISTER_API,
});


export const administerUser = {
  signUp: (data: User) => api.post("/signup", data),
  signIn: (data: LoginType) =>
    api.post<ApiResponse<signUp<User>>>("/signin", data),
};
