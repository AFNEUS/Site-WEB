import { Component, signal } from '@angular/core';
import{ IconPole } from './components/icon-pole/icon-pole';


@Component({
  selector: 'app-root',
  templateUrl:  './app.html',
  imports: [IconPole],
  styleUrl: './app.css',
  standalone: true
})
export class App {

}
