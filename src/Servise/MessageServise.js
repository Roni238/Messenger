import axios from 'axios';
//по хорошему надо создать экземпляр axios через axios.create() в отдельном файле, указать url сервера и цеплять туда хедеры если нужно 

export default class MessageServise {
    static async loadMoreMessage(offset){
        return axios.get('https://numia.ru/api/getMessages', {
            params:{
                offset
            },
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}