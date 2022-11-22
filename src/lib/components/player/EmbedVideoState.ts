import { writable } from "svelte/store";

export const video_id = writable('')


export const playing = writable(false)


export const update_time = writable([false, 0.])