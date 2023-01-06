<template>
    <div>
        <h1>登陆</h1>
        <form @submit.prevent="login">
            <input type="text" v-model="username">
            <button>登陆</button>
        </form>
    </div>
</template>

<script>
// import axios from "axios"
import request from '@/utils/request'
export default{
    name:'Login',
    data(){
        return {
            username:''
        }
    },
    methods: {
        login(){
            // axios.post("http://127.0.0.1:7001/login",{username:this.username})
            request.post(`${process.env.VUE_APP_BASE_API}/login`,{username:this.username})
            // axios.post("/login",{username:this.username})
            
            .then((res)=>{
                if(res.code===20000){
                    console.log(res.token)
                    localStorage.setItem("token",res.token);
                    this.$router.push("/");
                }
            })
        }
    },
}
</script>
