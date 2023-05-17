<template>
    <div class="message" :class="{your:message.autor=='your'}">
       <p>{{ message.textMessage }}</p> 
    </div>
</template>
<script>
export default {
    props:{
        message:{
            type:String,
            required:true
        }
    },
    name:'message-item'
}
</script>
<style>
    .message{
        border: #311a20 solid 2px;
        color: #311a20;
        margin: 10px 0px;
        padding: 5px ;
        border-radius: 10px;
        background-color: #f0a7ae;
    }
    .your{
        color: #311a20;
        background-color: #7f93c2;
        position: relative;
        right: 0;
        margin-left: auto;
    }
    p{
        margin: 2px;
    }

</style>