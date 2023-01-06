import axios from "axios";
// axios的create方法可以创建一个新的axios对象即request，
// 即创建一个自己，可以为自己进行一些配置，
// 配置完成之后可以提取一些请求的公共部分
const request = axios.create({
        // 进行一些配置
        baseURL: process.env.VUE_APP_BASE_API
    })
    // 请求拦截器
    // 将请求头的token属性设置token值，这样不用每次都带token，
request.interceptors.request.use((req) => {
        let token = localStorage.getItem("token");
        if (token) {
            // 在请求头中token属性直接设置token
            req.headers.token = token;
        }
        return req
    })
    // 响应拦截器
    // 如何配置axios才能让返回值直接能获取到data，在响应拦截器中解决
request.interceptors.response.use((res) => {
    return res.data
})

export default request;