import { Component, signal, WritableSignal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter';

@Component({
  selector: 'app-about',
  imports: [Counter],
  templateUrl: './about.html',
  //styleUrl: './about.css',
})
export class About {
  duration: WritableSignal<number> = signal(15);
  message: WritableSignal<string> = signal('Hello!');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
