import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
    constructor(
        private translate: TranslateService
    ) {}
}
