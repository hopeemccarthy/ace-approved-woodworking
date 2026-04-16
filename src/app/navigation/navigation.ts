import { Component } from '@angular/core';
import { NavigationMenu } from '../constants.js';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule,  RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  routesList = NavigationMenu;

  constructor() {
  }

}
