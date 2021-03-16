import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './company.types';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompany(): Observable<Company> {
    return of({
      bannerUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
      videoUrl: 'https://www.youtube.com/embed/xg9R4yykvqU',
      name: 'Mumford Tech',
      tagline: 'Fastest computery tech in the tech world',
      aboutUs: 'Saint Petersburg, the second-largest city in Russia, is situated at the head of the Gulf of Finland on the Baltic Sea. This photograph shows the eastern end of Vasilyevsky Island, known as the spit, surrounded by the river Neva. The Old Saint Petersburg Stock Exchange and Rostral Columns, built in the Greek Revival style in the first decade of the nineteenth century, is visible in the centre.',
      features: 'YadadaIn the tradition of Irish psalters, the 150 psalms are divided into three groups of fifty, each headed by a full-page miniature facing a text page with decorated initial and border. The figures in the miniatures are highly stylised in the tradition of Irish manuscripts at this time, and painted in a palette of yellow, purple and red. The three full page miniatures show David in two scenes with animals, a Crucifixion of Jesus and David and Goliath.',
      market: 'The office predates 1857 and played a critical role when the capitol of the United States was New York. One of the earliest Consuls-General was Thomas Henry Barclay, a native New Yorker who was a Loyalist during the American Revolution who later served the Crown as a resident of Nova Scotia. He served as Consul-General in New York from 1799 (to 1822), replacing Sir John Temple, the first Consul-General and also native born to North America.',
      teamMembers: [
        { name: 'Sam Greener', imageUrl: '/assets/images/people/1.jpg' },
        { name: 'John Applebaum', imageUrl: '/assets/images/people/2.jpg' },
        { name: 'Amy Render', imageUrl: '/assets/images/people/3.jpg' },
        { name: 'Jane Smith', imageUrl: '/assets/images/people/4.jpg' },
      ]
    });
  }
}
