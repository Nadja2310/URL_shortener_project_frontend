import { DatePipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[DatePipe]
})
export class HomepageComponent implements OnInit {
  form: FormGroup|undefined;
  private display: boolean|undefined;
  pattern = 'https?:\\\\/\\\\/(www\\\\.)?[-a-zA-Z0-9@:%._\\\\+~#=]{1,256}\\\\.[a-zA-Z0-9()]{1,6}' +
    '\\\\b([-a-zA-Z0-9()!@:%_\\\\+.~#?&\\\\/\\\\/=]*)';

  constructor(private fb: FormBuilder,private datePipe:DatePipe) {
  }

  ngOnInit(): void {
    this.display=false;
    this.formInit();
  }

  formInit() {

    this.form = this.fb.group(
      {
        longUrl: [null, [Validators.required, Validators.pattern(this.pattern)]],
        expirationDate:[]
      }
    );
    const date=new Date();
    this.form.controls.expirationDate.setValue(this.datePipe.transform(date,'yyyy-MM-dd'));
  }

  onClickSubmit(): void {
    this.display=true;
    console.log(this.display);
  }
}
