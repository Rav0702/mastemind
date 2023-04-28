import { Component } from '@angular/core';
import {RoutesConstants} from "../core/constants/routes/routes.constant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly guessLink = `/${RoutesConstants.GUESS}`;
}
