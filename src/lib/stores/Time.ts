import { writable } from "svelte/store";

export let current_time = writable(0.);


export let progress = writable(0.)


export let duration = writable('')