<template>
<transition name="error-load">
    <div class="error" v-if="getErrorMessage" @click="this.$store.dispatch('messageModule/getMessages')">
        <h2>{{ getErrorMessage }}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </svg>
    </div>
</transition>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters({
            getErrorMessage:'messageModule/getErrorMessage'
        })
    },
    name:'error-load'
}
</script>
<style scoped>
div{
    cursor: pointer;
}
    .error{
        background: #b04545;
        width: 100%;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 15px;
        box-sizing: border-box;
    }
    .error-load-enter-active {
        transition: all 0.3s ease-out;
      }
      
      .error-load-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
      }
      
      .error-load-enter-from,
      .error-load-leave-to {
        transform: translateX(20px);
        opacity: 0;
      }
</style>