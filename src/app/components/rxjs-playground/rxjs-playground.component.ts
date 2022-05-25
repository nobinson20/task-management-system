import { Component, OnInit } from '@angular/core';
import {
  concat,
  concatMap,
  delay,
  filter,
  from,
  fromEvent,
  interval,
  map,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  Observable,
  of,
  share,
  take,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.css'],
})
export class RxjsPlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const person: Person = {
      name: 'Brian',
    };

    // ********** Start

    // const foo1 = of(1,2,3,4);
    // const foo2 = of(5,6,7,8);

    // const merged = merge(foo1, foo2).subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map(() => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());

    // firstOrder.subscribe((x) => console.log(x));

    //  const timer1 = interval(1000).pipe(take(10));
    //   const timer2 = interval(2000).pipe(take(6));
    //   const timer3 = interval(500).pipe(take(10));

    //   const concurrent = 3; // the argument
    //   const merged = merge(timer1, timer2, timer3, concurrent);
    //   merged.subscribe((x) => console.log(x));

    const observerA = interval(1000).pipe(
      take(5)
    );
    const observerB = interval(1000).pipe(
      take(5),
      map((x) => (x * 100).toString())
    );
    const result$ = concat(observerA, observerB).subscribe((x) =>
      console.log(x)
    );

    // ********** End
  }
}
export interface Person {
  name: string;
}
