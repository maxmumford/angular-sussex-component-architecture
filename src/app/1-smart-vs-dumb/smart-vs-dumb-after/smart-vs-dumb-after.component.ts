import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.types';

@Component({
  selector: 'app-smart-vs-dumb-after',
  templateUrl: './smart-vs-dumb-after.component.html',
  styleUrls: ['./smart-vs-dumb-after.component.scss']
})
export class SmartVsDumbAfterComponent implements OnInit {

  company: Company;

  // single responsibility - dom sanitizer moved into profile-video component
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe(company => {
      this.company = company;
    });
  }

}
