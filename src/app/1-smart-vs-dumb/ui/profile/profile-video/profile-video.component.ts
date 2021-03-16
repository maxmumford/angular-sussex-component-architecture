import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-video',
  templateUrl: './profile-video.component.html',
  styleUrls: ['./profile-video.component.scss']
})
export class ProfileVideoComponent implements OnChanges {

  @Input() src: string;

  srcSafe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.srcSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

}
