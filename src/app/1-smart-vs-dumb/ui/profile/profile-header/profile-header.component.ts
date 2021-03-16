import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  // Properties names are decopled
  @Input() heading: string;
  @Input() subHeading: string;
  @Input() backgroundImageUrl: string;

  // complexity encapsulated into this component
  @HostBinding('style.background-image') get styleBackgroundImage(): string {
    return 'url(' + this.backgroundImageUrl + ')';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
