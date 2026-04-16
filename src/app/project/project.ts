import { Component, input } from '@angular/core';
import { ProjectType } from '../projectType.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [ CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  project = input.required<ProjectType>();
  dateCompleted: string | undefined;

  constructor() {
    console.log(this.project);  
    // this.dateCompleted = this.project().date;
  }

  ngOnInit() {
    this.dateCompleted = this.project().date?.toDateString();

  }

}
