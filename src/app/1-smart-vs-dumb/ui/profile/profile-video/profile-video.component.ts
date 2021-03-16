import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-video',
  templateUrl: './profile-video.component.html',
  styleUrls: ['./profile-video.component.scss']
})
export class ProfileVideoComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
