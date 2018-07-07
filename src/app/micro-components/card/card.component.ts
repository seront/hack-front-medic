import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() inputCard;
  card: ICardObj;

  constructor() { 
    
  }
  ngOnInit() {
    this.card = this.inputCard;
  }

}
