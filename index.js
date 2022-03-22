import {Awesome} from './modules/class.js';
export const awesome = new Awesome();

import {pressButton} from './modules/EventListeners.js';
import {removeList} from './modules/EventListeners.js';
pressButton;
removeList;

import {date} from './modules/variables.js';
import { DateTime} from '../node_modules/luxon/src/luxon.js';

setInterval(() => {
    const time = DateTime.now();
    date.innerHTML = time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS).slice(0, -4);
  }, 1000);

import {change} from './modules/section.js';
document.addEventListener('DOMContentLoaded', awesome.returnInfo(), change());
