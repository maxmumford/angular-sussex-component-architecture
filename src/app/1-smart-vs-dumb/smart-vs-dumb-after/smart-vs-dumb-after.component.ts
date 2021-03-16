import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.types';

@Component({
  selector: 'app-smart-vs-dumb-after',
  templateUrl: './smart-vs-dumb-after.component.html',
  styleUrls: ['./smart-vs-dumb-after.component.scss']
})
export class SmartVsDumbAfterComponent implements OnInit {

  company: Company;
  videoUrlSafe: SafeResourceUrl;

  constructor(private companyService: CompanyService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(company => {
      this.company = company;
      this.videoUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(company.videoUrl);
    });
  }

}
