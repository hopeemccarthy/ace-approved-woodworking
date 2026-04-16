import {Component} from '@angular/core';
import {Home} from './home/home.js';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Navigation } from './navigation/navigation.js';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, RouterLink, Navigation],
  templateUrl: './app.html',
  styleUrls: ['./app.css', 'housing-location/housing-location.css', 'home/home.css'],
})
export class App {
  title = 'default';
}
