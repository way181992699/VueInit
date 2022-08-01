import axios from "axios"
// import EventBus from "./utils/event/event-bus.js"
import EventBus from "../event/event-bus"

class AxiosFactory {
  constructor(baseURL) {
    this.axios = axios;
    axios.defaults.baseURL = baseURL;

    axios.interceptors.request.use(config => {
      console.log('请求配置：', config)
      return config;
    });
    axios.interceptors.response.use(
      response => {
        console.log('响应数据：', response)
        if (response.status==200) {
          return response.data;
        } else {
          return Promise.reject(response.data);
        }
      },
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 402:
              // 登录信息过期
              EventBus.$emit("onAuthFailed");
              break;
          }
        }
        return Promise.reject(error.response.data.data);
      }
    );
  }
  getInstance() {
    return this.axios
  }
}

export default AxiosFactory;
