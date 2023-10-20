import service from './config'

// 封装get请求
const get = (config) => {
    return service({
        ...config,
        method: 'get',
        params: config.data
    })
}

// 封装post请求
const post = (config) => {
    return service({
        ...config,
        method: 'post',
        data: config.data
    })
}

export default {
    post,
    get,
}