import EventService from "../../../adaptors/eventService";

export const createEvent = async (obj, {title,date,note}) =>{
    return await EventService.createEvent({title,date,note});
}

export const updateEvent = async (obj, {id, title,date,note, active}) =>{
    return await EventService.updateEvent({id, title,date,note, active});
}

export const deleteEvent = async (obj, {id}) =>{
    return await EventService.deleteEvent(id);
}
