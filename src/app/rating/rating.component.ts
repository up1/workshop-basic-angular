import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  private starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClickRating() {
    console.log('Click on rating');
    this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
  }
}
