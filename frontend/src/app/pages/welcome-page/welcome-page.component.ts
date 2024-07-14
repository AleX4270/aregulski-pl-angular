import { Component } from '@angular/core';
import { Scroll } from '@angular/router';
import { ScrollService } from 'src/app/shared/service/scroll.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

export class WelcomePageComponent {
    constructor(
        private readonly scrollService: ScrollService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('en'); //TODO Aleks: Change to en
        this.translate.use('en');
    }

    switchLanguage() {
        if(this.translate.currentLang == 'pl') {
            this.translate.use('en');
        }
        else {
            this.translate.use('pl');
        }
    }

    scrollToDetails(): void {
        this.scrollService.triggerScrollTo();
    }
}
