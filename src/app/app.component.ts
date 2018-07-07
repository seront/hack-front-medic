import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ServiceCardService } from './services/service-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  arrayOfCards: ICardObj[];

  constructor( public _serviceCardService: ServiceCardService) {
    console.log('constructor');
    this._serviceCardService.getCards().subscribe((response: ICardObj[]) => {this.arrayOfCards = response; });
  }
  production = environment.production;

  ngOnInit() {


  }
}
