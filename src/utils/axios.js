import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;

const errorHandler = (error) => {
  console.log(error);
  const status = error.response.status;
  if (status == 404) {
    console.log(
      "(axios errorHandler)========================== 404 Not found error",
      error.response.data
    );
    return Promise.reject({ ...error.response });
  }
  if (status == 422) {
    console.log(
      "(axios errorHandler)========================== 422 un processed entity",
      error.response.data
    );
    return Promise.reject({ error: error.response.data.errors, status: 422 });
  }
  if (status == 401) {
    console.log(
      "(axios errorHandler)========================== 401 unauthorized error",
      error.response
    );
    return Promise.reject({ ...error.response });
  }
  if (status == 400) {
    console.log(
      "(axios errorHandler)========================== 400 Bad Request error",
      error.response.statusText
    );
    return Promise.reject({ statusText: error.response.statusText });
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  console.log(
    "(axios successHandler)========================== response",
    response.data
  );
  return response.data;
};
