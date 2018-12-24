import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent {

  // tslint:disable-next-line:no-input-rename // Just testing how alias works
  @Input('srvElement')
  element: { type: string, name: string, content: string };

}
