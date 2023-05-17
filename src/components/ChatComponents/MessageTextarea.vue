<template>
    <textarea type="text" rows="3" :value="modelValue" @input="updateInput" placeholder="Введите текст"/>
</template>
<script>
export default {
    name:'message-textarea',
    props: {
        modelValue: {
            type:String,
            required:true
        }
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
</script>
<style scoped>
textarea{
        width: 100%;
        font-size: 16px;
        padding: 5px;
        border-radius:6px;
        border: gray 1px solid;
        resize: vertical;
    }
</style>