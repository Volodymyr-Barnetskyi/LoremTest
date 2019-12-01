import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() {
  }

  form = new FormGroup({
      full: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
    }
  );
  ngOnInit(): void {
  }

  Submit() {
    const test = this.form.value;
    console.log(test);
  }
}
