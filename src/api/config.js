import axios from "axios";
// import { ElMessage } from "element-plus";
// import qs from "qs"

const service = axios.create({
    baseURL: "http://127.0.0.1:8080",
    // 定义统一的请求头
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    },
    // 配置超时
    timeout: 10000,
})
// 请求拦截器
service.interceptors.request.use(config => {
    // config.headers.common['Authorization'] = window.sessionStorage.getItem('token') === null ? null : window.sessionStorage.getItem('token')
    if (localStorage.getItem("Authorization") != null) {
        config.headers["Authorization"] = localStorage.getItem("token");
    }
    return config
})

// 响应拦截器
service.interceptors.response.use((response) => {
    // 获取接口返回结果
    const res = response.data
    if (res.ok) {
        return res
    }
    else {
        ElMessage.error("错误")
        return res
    }
})
export default service