import {Component} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Navigation } from './navigation/navigation.js';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,  Navigation],
  templateUrl: './app.html',
  styleUrls: ['./app.css',],
})
export class App {
  title = 'default';
}
