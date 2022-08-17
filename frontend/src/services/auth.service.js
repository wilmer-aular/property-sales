import { post } from "./api-connector";

export const login = (data) => {
  return post("/auth/signin", data);
};

export const signUp = (data) => {
  return post("/auth/signup", data);
};

