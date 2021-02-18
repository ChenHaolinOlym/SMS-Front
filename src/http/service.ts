import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"

const service:AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
  // withCredentials should be true in production
  // withCredentials: true,
  // TODO: Complete transform response
  transformResponse: [
    (data:string) => {
      return JSON.parse(data)
    }
  ],
  headers: {
    "Content-Type": "application/json",
    // This line should be deleted in production
    "Access-Control-Allow-Origin": "*"
  }
})

service.interceptors.response.use(
  (res:AxiosResponse) => res,
  (err:AxiosError) => {
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    } else {
      console.log(err.message)
    }
  }
)

export default service