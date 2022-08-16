import { get, post, put, remove } from "./api-connector";

const connector = (model) => {
  const path = `/${model}`;
  return {
    get: (endpoint, params = {}) => get(`${path}${endpoint}`, params),
    put: (endpoint, body) => put(`${path}${endpoint}`, body),
    all: (params = {}) => get(path, params),
    filter: (params = {}) => get(`${path}/filter`, params),
    find: (id) => get(`${path}/${id}`),
    create: (body) => post(path, body),
    update: (id, body) => put(`${path}/${id}`, body),
    addStaff: (id, body) => put(`${path}/${id}`, body),
    remove: (id) => remove(`${path}/${id}`),
  };
};
export default connector;
