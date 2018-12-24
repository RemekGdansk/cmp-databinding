import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output()
  serverCreated: EventEmitter<{ serverName: string, serverContent: string }> =
    new EventEmitter<{ serverName: string, serverContent: string }>();

  // tslint:disable no-output-rename // Just for testing aliases
  @Output('bpCreated')
  blueprintCreated: EventEmitter<{ serverName: string, serverContent: string }> =
    new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

}
