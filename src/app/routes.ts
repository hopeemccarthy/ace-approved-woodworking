import {Routes} from '@angular/router';
import {Details} from './details/details.js';
import { About } from './about/about.js';
import { Items } from './items/items.js';
import { Homepage } from './homepage/homepage.js';
import { ProjectContainer } from './project-container/project-container.js';
const routeConfig: Routes = [
  {
    path: '',
    component: Homepage,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Item details',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'items',
    component: Items,
    title: 'Items',
  },
  {
    path: 'items/:category',
    component: Items,
    title: 'Items',
  },
    {
    path: 'projects/:project',
    component: ProjectContainer,
    title: 'Projects',
  },
];
export default routeConfig;