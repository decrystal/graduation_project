import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class Axios {

    private axios?: AxiosInstance;

    constructor() {
        this.init()
    }

    public init() {
        const instance = axios.create({
            timeout: 60 * 1000
        })
        //全局拦截，发送拦截报错
        instance.interceptors.request.use(
            //发送拦截
            (config) => {
                
            },
            //拦截报错
            (err) => {

            }
        )
        //拦截相应
        instance.interceptors.response.use(
            this.responseSuccessHandler,
            this.responseErrorHandler
        )
        this.axios = instance;
        return instance
    }
    public responseSuccessHandler(response: AxiosResponse): () => any | void {
      const httpCode = response.status;
      if ([200, 201, 202, 204].includes(httpCode)) {
        return response.data;
      } else {
        return this.responseErrorHandler(response);
      }
    }
    public responseErrorHandler(res: AxiosError | AxiosResponse) {
      return Promise.reject(res);
    }
}

const axiosRequest = new Axios().init();

export default axiosRequest;