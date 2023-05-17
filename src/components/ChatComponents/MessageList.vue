<template> 
    <div class="messages">

        <transition-group name="massages-list">
          <message-item v-for="message in messages" :message="message" :key="message"/> 
        </transition-group>

         <slot/>
    </div>
</template>
<script>
export default {
    props:{
        messages:{
            type:Array,
        }
    },
    name:'message-list',
}
</script>
<style scoped>
.messages::-webkit-scrollbar {
    width: 7px;               
}
.messages::-webkit-scrollbar-track {
    background: rgba(128, 128, 128, 0.433); 
    border-radius: 40px;        
}
.messages::-webkit-scrollbar-thumb {
    background-color: rgb(128, 128, 128);   
    border-radius: 20px;       
  }
.messages{
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    height: 100%;
    padding: 5px;
}

.list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .massages-list-enter-active,
  .massages-list-leave-active {
    transition: all .7s ease;
  }
  .massages-list-enter-from,
  .massages-list-leave-to {
    transform: translateY(20px);
  }
</style>
