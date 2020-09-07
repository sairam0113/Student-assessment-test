import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-verifymail',
  templateUrl: './verifymail.component.html',
  styleUrls: ['./verifymail.component.scss']
})
export class VerifymailComponent implements OnInit {


  constructor(
    public authService: AuthService
  ) {
  }

  ngOnInit() {
  }
}
