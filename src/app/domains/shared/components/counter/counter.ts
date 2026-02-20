import {
  Component,
  Input,
  signal,
  SimpleChange,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  //styleUrl: './counter.css',
})
export class Counter {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter: WritableSignal<number> = signal(0);
  intervalRef: number | undefined;

  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue != duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log(`duration: ${this.duration}`);
    console.log(`message: ${this.message}`);
    this.intervalRef = window.setInterval(() => {
      console.log('counter updated');
      this.counter.update((previous: number) => previous + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    console.log('ngAfterView');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.intervalRef);
  }

  doSomething() {
    console.log('Something supposed to happen had happened');
  }
}
