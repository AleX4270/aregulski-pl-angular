import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {
    constructor(
        private translate: TranslateService
    ) {}
}
