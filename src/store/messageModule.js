import MessageServise from "@/Servise/MessageServise"

export default {
    state:()=>({
        messages:[],
        errorMessage:'',
        newMessage:'',
        
    }),
    mutations:{
        setMessages(state,value){state.messages=[...state.messages,...value]},
        setErrorMessage(state,value){state.errorMessage=value},
        setNewMessage(state,value){state.newMessage=value},
        unshiftNewMessage(state,value){state.messages.unshift(value)},
    },
    getters:{
        getMessages(state){return state.messages},
        getErrorMessage(state){return state.errorMessage},
        getNewMessage(state){return state.newMessage},
    },
    actions:{
        async getMessages({commit,getters}){ 
            const res = await MessageServise.loadMoreMessage(getters.getMessages.length)
            //тут должны были быть .then().cathc(), но сервер возвращает "ошибку" со стотусом 200 а не как ошибку, по этому вместо отлова ошибки подгрузки
            //и достования оттуда поля message проверяем если ли поле result, если оно undefined то должна быть ошибка

            //Для удобства дам каждому сообщению автора
            if(res.data.result){
                const newRes = res.data.result.map(message =>{
                    return {
                        textMessage:message,
                        autor:Math.random()<0.5?'your':'friend'
                    }
                })

                commit('setMessages', newRes)
                commit('setErrorMessage','')
                if(newRes.length===0){
                    commit('setErrorMessage','Больше сообщений нет!')
                }
            }else{
                commit('setErrorMessage',res.data)
            }
        },
        async sendMessage({commit,getters}){
            //Тут должно быть обращение к серверу через MessageServise.sendMessage()
            if(getters.getNewMessage){
                const newMessage ={
                    textMessage: getters.getNewMessage,
                    autor:'your'
                }
             commit('unshiftNewMessage',newMessage)
             commit('setNewMessage', '')   
            }
            
        }
    },
    namespaced:true
}