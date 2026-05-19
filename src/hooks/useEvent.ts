import { create } from "zustand";
import type { Event } from "../types/event-env";

type EventStore = {
    event: Event;   
    getEvent: (eventid:string) => Promise<void>;
}

export const useEventStore = create<EventStore>()((set) =>({
    event: {} as Event,
    getEvent: async (eventid:string) => {
        try {
            const res = await fetch(`http://localhost:3001/api/get-event/${eventid}`);
            const data = await res.json();
            
            set({ event: data.data });
        } catch (error) {
            console.error(error);
        }
    } 
}));