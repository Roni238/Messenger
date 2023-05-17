<template>
    <div class="main">
        <container class="chat">
            <div class="chat-header">
                <h3>Friend</h3>
            </div>

            <message-list :messages="getMessages">
                <observer-intersection :action="'messageModule/getMessages'">
                    <loader-spin/>  
                </observer-intersection>
                <error-load/>
            </message-list>

            <div class="chat-footer">
                
                <message-textarea :model-value="newMessage" @update:model-value="setNewMessage"/> 
                <send-message-button/>
            </div>
        </container> 
       
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'

export default {
    computed:{
        ...mapState({
            newMessage:state=>state.messageModule.newMessage,
        }),
        ...mapGetters({
            getUsers:'usersModule/getUsers',
            getMessages:'messageModule/getMessages'
        })
    },
    methods:{
        ...mapMutations({
            setNewMessage:'messageModule/setNewMessage',
        }),
    }
}
</script>
<style>

    .main{
        margin: auto;
        display: flex;
        justify-content: center;
        height: 100vh;
    }
    .chat{
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 20px;
        border: 2px solid #311a20;
        border-radius: 15px;
        background-color: #fee7c7;
    }
    .chat-footer{
        display: flex;
        box-sizing: border-box;
        padding: 10px;
        align-items: center;
        gap: 10px;
        border-top: 2px solid #311a20;
        width: 100%;
    }
    .chat-header{
        box-sizing: border-box;
        padding: 10px;
        border-bottom: 2px solid #311a20;
        width: 100%;
    }
    h3{
        margin: 5px;
    }
</style>