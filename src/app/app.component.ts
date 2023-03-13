import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyma-chap3.2';
  public part: string = '';
  public parts: string[] = ["Moteur 2JZ", "Moteur BMW"];

  public addPart() {
    console.log(this.part);
    this.parts.push(this.part);
    this.part = '';

    console.log(this.parts);
  }
}
