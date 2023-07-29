import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
    private _scrollTo = new Subject<void>();
    scrollTo$ = this._scrollTo.asObservable();

    triggerScrollTo() {
        this._scrollTo.next();
    }
}
