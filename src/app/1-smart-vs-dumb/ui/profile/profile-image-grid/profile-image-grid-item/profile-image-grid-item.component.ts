import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image-grid-item',
  templateUrl: './profile-image-grid-item.component.html',
  styleUrls: ['./profile-image-grid-item.component.scss']
})
export class ProfileImageGridItemComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
