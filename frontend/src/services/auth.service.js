import { get, post, remove } from "./api-connector";

export const login = (data) => {
  return post("/auth/signin", data);
};

export const signUp = (data) => {
  return post("/auth/signup", data);
};
export const me = () => {
  return get("/auth/me");
};
export const logout = () => {
  return remove("/auth");
};
