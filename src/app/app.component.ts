import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    name= '';
    date= ' ';
    amount= '';
    miles=  '';
    onNameChange(event: Event){
      this.name = (event.target as HTMLInputElement).value;
    }

    onDateChange(event:Event) {
      this.date = (event.target as HTMLInputElement).value;
    }

    onAmountChange(event:Event) {
      this.amount = (event.target as HTMLInputElement).value;
    }

    onMilesChange(event:Event) {
      this.miles = (event.target as HTMLInputElement).value;
    }
}
