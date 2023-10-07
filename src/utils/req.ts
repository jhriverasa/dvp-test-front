import axios, { AxiosResponse, AxiosError, Method } from "axios";

/**
 * Allows to perform an http request using axios
 *
 * @see https://www.npmjs.com/package/axios
 *
 * Receives an Object cointaning following attributes: 
 * 
 * @param reqOption Specifies Http Req method | Any String from: ['get', 'post', 'put', 'delete', 'options']
 * @param path Specifies the path | String path
 * @param params (Optional) Parameters to be used | Object. {id: 123}
 * @param onSuccess Callback for a sucessful request  | Function. (response)=>{doStuffWithRes(response) }
 * @param onError Callback for a failed request | Function. Function. (error)=>{doStuffWithRes(response) }
 * @param callback (Optional) Callback always executed | Function. ()=>{ alwaysExecuteThis() }
 * 
 * TS Axios Wrapper by Jh.Rivera.Sa
 */

const axiosReq = ({ reqOption,
  path, params = {}, onSuccess, onError, callback = () => { } }: axiosReqType) => {
  //GET and POST but there are many others, including HEAD, PUT, DELETE, CONNECT, and OPTIONS.

  // Assigns with appropriated method
  let axiosMethod;
  switch (reqOption) {
    case "get":
      axiosMethod = axios.get;
      break;
    case "post":
      axiosMethod = axios.post;
      break;
    case "put":
      axiosMethod = axios.put;
      break;
    case "delete":
      axiosMethod = axios.delete;
      break;

    case "options":
      axiosMethod = axios.options;
      break;
    default:
      throw new Error(`Invalid reqOption: ${reqOption}`);
  }

  axiosMethod(path, {
    params,
  })
    .then((response: AxiosResponse) => {
      onSuccess(response);
    })
    .catch((error: AxiosError) => {
      onError(error);
    })
    .finally(callback);
};

export { axiosReq };


type axiosReqType = {
  reqOption: "get" | "post" | "put" | "delete" | "connect" | "options",
  path: string,
  params?: Record<string, any>,
  onSuccess: (Response: AxiosResponse) => void,
  onError: (error: AxiosError) => void,
  callback?: () => void,
}