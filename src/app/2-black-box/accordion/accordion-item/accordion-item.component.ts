import { Component, Input, OnInit } from '@angular/core';
import { faCandyCane, faCoffee, faHamburger, faPizzaSlice, IconDefinition } from '@fortawesome/free-solid-svg-icons';

// decoupled via public, well-defined interfaces and types
// reusable via generic domain
export interface AccordionItemData {
  heading: string;
  icon: AccordionItemIcon;
  color: string;
}

export type AccordionItemIcon = 'coffee' | 'pizza' | 'hamburger' | 'candy-cane';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  // Only relies on inputs - no services
  @Input() data: AccordionItemData;
  @Input() open = false;

  icons: Record<AccordionItemIcon, IconDefinition> = {
    coffee: faCoffee,
    pizza: faPizzaSlice,
    hamburger: faHamburger,
    'candy-cane': faCandyCane,
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.open = !this.open;
  }

}
