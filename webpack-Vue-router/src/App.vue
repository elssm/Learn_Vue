<template>
    <div>
        <h1>这是APP组件</h1>

        <mt-button type="danger" icon='more' @click="show">default</mt-button>

        <mt-button size="large">large</mt-button>
        <mt-button size="small">small</mt-button>

        <mybtn type="primary">12345</mybtn>

        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>

            <router-link to='/account'>Account</router-link>
            <router-link to='/goodslist'>goodslist</router-link>

            <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data(){
        return {}
    },
    methods:{
        show(){
            // Toast('提示信息')
            Toast({
                message:'这是消息',
                duration:1000,
                position:"top",
                iconClass:'glyphicon glyphicon-heart'
            });
        }
    }
}

</script>

<style>
    
</style>