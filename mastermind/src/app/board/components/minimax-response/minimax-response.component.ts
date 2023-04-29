import {Component, EventEmitter, Output} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {IResponse} from "../response-slot/response-slot.component";

@Component({
  selector: 'app-minimax-response',
  templateUrl: './minimax-response.component.html',
  styleUrls: ['./minimax-response.component.scss']
})
export class MinimaxResponseComponent {

  @Output()
  submit: EventEmitter<IResponse> = new EventEmitter<IResponse>();

  responseForm = this.fb.group({
    good: ['', Validators.required],
    correct: ['', Validators.required]
  });
  constructor(private fb: UntypedFormBuilder) { }

  handleSubmit() {
    this.submit.emit(this.responseForm.value);
    console.log(this.responseForm.value);
    this.responseForm.reset();
  }
}
