import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-return-button',
  templateUrl: './return-button.component.html',
  styleUrls: ['./return-button.component.scss']
})
export class ReturnButtonComponent implements AfterViewInit {
    @ViewChild('scrollBtn') scrollBtn!: ElementRef;

    constructor(
        private readonly renderer: Renderer2
    )
    {}

    ngAfterViewInit(): void {
        window.addEventListener("scroll", () => {
            this.detectScroll(this.scrollBtn);
        })
    }

    detectScroll(scrollBtn: ElementRef): void {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
        {
            this.renderer.setStyle(this.scrollBtn.nativeElement, 'display', 'block');
        }
        else
        {
            this.renderer.setStyle(this.scrollBtn.nativeElement, 'display', 'none');
        }

    }

    onScrollBtnClick()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
