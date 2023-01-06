<template>
    <div>
        <h1>数据：{{msg}}</h1>
        <button @click="logout">注销</button>
    </div>
</template>

<script>
// import axios from "axios"
import request from "@/utils/request"
export default{
    name: 'Home',
    data(){
        return{
            msg:''
        }
    },
    methods:{
        logout(){
            // 将token变为空字符串
            localStorage.setItem("token","");
            // 自动重新刷新页面
            location.reload();
        },
        getMessage(){
            // 设置拿到token
            // let token=localStorage.getItem("token");
            // 在请求头设置token,
            // get的第二个参数可设置header,
            // post的第三个参数设置header，第二个参数在body中传参
            // axios.get("http://127.0.0.1:7001/hello",{headers:{token:token}})
            // axios.get(`${process.env.VUE_APP_BASE_API}/hello`,{headers:{token:token}})
            // request.get("/hello",{headers:{token:token}})
            request.get("/hello")
            .then((res)=>{
                console.log(res); 
                this.msg=res.data[0].msg;
            })
        }
    },
    created(){
        this.getMessage();
    }
}
</script>
