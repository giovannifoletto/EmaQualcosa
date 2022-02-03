import { writable } from 'svelte/store';
import { idList } from './header';

export const firstTimeContent = writable(true);

export const RegList = writable(idList);