import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  @Output()
  reset = new EventEmitter<void>();

  emitReset() {
    this.reset.emit();
  }
}
