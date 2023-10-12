// accordion.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() title: string = '';
  isActive: boolean = false;

  toggleAccordion() {
    this.isActive = !this.isActive;
  }
}
