<template>
    <div class="observer" ref="observer">
        <slot/>
    </div>
</template>
<script>
export default {
    name:'observer-intersection',
    props:{
      action:{
        type:String
      }
    },
    mounted(){
      const options={
          rootMargin:'0px',
          threshold:1.0
      }
      const callback= (entress) =>{
          if(entress[0].isIntersecting){
            this.$store.dispatch(this.action)
          }
      }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(this.$refs.observer )
    }
}
</script>
<style>
.observer{
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 15px 0px;
}
</style>