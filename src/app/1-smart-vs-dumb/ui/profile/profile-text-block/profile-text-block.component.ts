import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-text-block',
  templateUrl: './profile-text-block.component.html',
  styleUrls: ['./profile-text-block.component.scss']
})
export class ProfileTextBlockComponent implements OnInit {

  @Input() heading: string;

  constructor() { }

  ngOnInit(): void {
  }

}
