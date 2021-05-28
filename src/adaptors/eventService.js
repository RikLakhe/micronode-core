import axios from 'axios'

const event_module_url = process.env.PROJECT_EVENT_URL

export default class EventService{
    static async fetchAllEvent(){
        const response = await axios.get(`${event_module_url}/v1/event`)
        return  response.data.data;
    }

    static async fetchEvent(id){
        const response = await axios.get(`${event_module_url}/v1/event/`+id)
        return  response.data.data;
    }

    static async createEvent({title,date,note}){
        const response = await axios.post(`${event_module_url}/v1/event`,{title,date,note})
        return  response.data.data;
    }

    static async updateEvent({id,title,date,note,active}){
        const response = await axios.put(`${event_module_url}/v1/event/`+id,{title,date,note, active})
        return  response.data.data;
    }

    static async deleteEvent(id){
        const response = await axios.delete(`${event_module_url}/v1/event/`+id)
        return  response.data.data;
    }
}
