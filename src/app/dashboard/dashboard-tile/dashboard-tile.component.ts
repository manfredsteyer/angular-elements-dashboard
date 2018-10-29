import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DashboardTileComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  data: object = {};

  constructor(private elm: ElementRef) {
  }

  ngOnInit() {

    this.data = [
      {
        name: 'a',
        value: this.a
      },
      {
        name: 'b',
        value: this.b
      },     
      {
        name: 'c',
        value: this.c
      }
    ];
  }
  
  queryAssignedContent(slotName: string) {
    const selector = `slot[name=${slotName}]`;
    const slot = this.elm.nativeElement.shadowRoot.querySelectorAll(selector);
    if (slot.length === 0) return null;
    return slot[0].assignedNodes();
  }

  queryFirstAssignedContnet(slotName: string) {
    const result = this.queryAssignedContent(slotName);
    if (result === null) return null;
    if (result.length === 0) return null;
    return result[0];
  }

  slotChange($event) {
    const content = this.queryFirstAssignedContnet('legend');
    console.debug('slotChange', content.innerHTML);
  }
}
