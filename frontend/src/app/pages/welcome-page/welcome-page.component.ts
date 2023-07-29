import { Component } from '@angular/core';
import { Scroll } from '@angular/router';
import { ScrollService } from 'src/app/shared/service/scroll.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
    constructor(
        private readonly scrollService: ScrollService,
    ) {
        
    }

    scrollToDetails(): void {
        this.scrollService.triggerScrollTo();
    }
}
