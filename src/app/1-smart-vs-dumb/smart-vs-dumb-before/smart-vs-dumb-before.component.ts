import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.types';

@Component({
  selector: 'app-smart-vs-dumb-before',
  templateUrl: './smart-vs-dumb-before.component.html',
  styleUrls: ['./smart-vs-dumb-before.component.scss']
})
export class SmartVsDumbBeforeComponent implements OnInit {

  company: Company | undefined;

  constructor(private companyService: CompanyService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(company => {
      this.company = {
        ...company,
        youtubeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(company.youtubeUrl),
      };
    });
  }

}
