import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from '../ProjectsCatalog.js';
import { ProjectType } from '../projectType.js';
import { Project } from '../project/project.js';

@Component({
  selector: 'app-project-container',
  imports: [Project],
  templateUrl: './project-container.html',
  styleUrl: './project-container.scss',
})
export class ProjectContainer {

  route: ActivatedRoute = inject(ActivatedRoute);

  selectedProject: ProjectType = {id: '', name: ''};

  constructor(private router: Router) {
    router.events.subscribe((val) => {
        if (val) {
            const projectId = this.route.snapshot.params['project'],
              project = projectId ? Projects.find((projectItem) => projectItem.id === projectId) : null;
            
            if (project) {
              this.selectedProject = project;
              console.log(this.selectedProject);
            }
        }
    });
  }

}
