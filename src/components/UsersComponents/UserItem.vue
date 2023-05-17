<template>
    <div class="user">
        <h4>{{user.name}}</h4>    
     </div> 
</template>
<script>
export default {
    props:{
        user:{
            type:Object,
            required:true
        }
    },
    name:'user-item'
}
</script>
<style scoped>
.user{
    border: 1px black solid;
    margin: 5px 0px;
}
</style>