import '/assets/css/main.css';

import counter from './counter';

import Alpine from 'alpinejs';
 
window.Alpine = Alpine;

Alpine.data('counter', counter);
 
Alpine.start();
