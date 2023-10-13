import { apiInstace } from "constant";
import { User2, signUp } from "types";

const api2 = apiInstace({
  baseURL: import.meta.env.VITE_NGUOIDUNG_API,
});

export const updateUser = {
  getUserByToken: (query: number) =>
    api2.get<ApiResponse<signUp<User2>>>(`/users/${query}`),
  updateUser: (data: User2) =>
    api2.put<ApiResponse<signUp<User2>>>(`/users/${data.id}`, data),
  getListUser: () => api2.get<ApiResponse<User2[]>>("/users")
};
