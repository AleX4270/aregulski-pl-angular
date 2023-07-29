import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/shared/service/scroll.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements AfterViewInit, OnDestroy {
    private subscription!: Subscription;

    constructor(
        private el: ElementRef,
        private readonly scrollService: ScrollService
    ) {}

    ngAfterViewInit(): void {
        this.subscription = this.scrollService.scrollTo$.subscribe(() => {
            this.el.nativeElement.scrollIntoView({ behavior: 'smooth'});
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


}
