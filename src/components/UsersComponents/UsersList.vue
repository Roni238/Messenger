<template>
    <div>
        <user-item v-for="user in users" :key="user.id" :user="user"/>
    </div>
</template>
<script>
export default {
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    name:'users-list'
}
</script>
<style lang="">
    
</style>