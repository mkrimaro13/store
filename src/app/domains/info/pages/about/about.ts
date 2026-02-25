import { Component, signal, WritableSignal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter';
import { Highlight } from "@shared/directives/highlight";

@Component({
  selector: 'app-about',
  imports: [Counter, Highlight],
  templateUrl: './about.html',
  //styleUrl: './about.css',
})
export default class About {
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
