import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
    ngOnInit(): void {
    }
  constructor() { }
    form = new FormGroup({
    full: new FormControl(''),
    group: new FormControl(''),
  }
    );
  Submit() {

  }
}
