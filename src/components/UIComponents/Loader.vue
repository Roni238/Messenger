<template>
  <div class="loader"/>
</template>
<script>
export default {
    name:'loader-spin',
}
</script>
<style scoped>
.loader {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 32px 0 #fff, -32px 0 #fff;
    animation: flash 0.5s ease-out infinite alternate;
    display: flex;
    justify-content: center;
  }
  
  @keyframes flash {
    0% {
      background-color: #FFF2;
      box-shadow: 32px 0 #FFF2, -32px 0 #FFF;
    }
    50% {
      background-color: #FFF;
      box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
    }
    100% {
      background-color: #FFF2;
      box-shadow: 32px 0 #FFF, -32px 0 #FFF2;
    }
  }
        
</style>