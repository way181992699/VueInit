import AxiosFactory from "../utils/ajax/axios-factory";
import dataInit from "./data-init";

let axiosFactory = new AxiosFactory(dataInit.base);
let axios = axiosFactory.getInstance();

export default axios;