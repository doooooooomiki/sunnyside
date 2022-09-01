import Alpine from 'alpinejs';
import testimonials from './data/testimonials.data.js';
import counter from './store/counter.store.js';

Alpine.data('testimonials', testimonials);

Alpine.store('counter', counter());

Alpine.start();