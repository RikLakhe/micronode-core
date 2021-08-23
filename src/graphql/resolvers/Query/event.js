import EventService from "#root/adaptors/eventService";

export const event = async () =>{
    return await EventService.fetchAllEvent();
}

export const findEvent = async (obj, {id}) =>{
    return await EventService.fetchEvent(id);
}