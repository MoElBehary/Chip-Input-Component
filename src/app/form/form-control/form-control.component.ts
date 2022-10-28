import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  form!: FormGroup;
  programmingLanguages: Array<string> = ['Javascript', 'Php', 'Python', 'Go', 'NodeJs', 'C', 'C++', 'C#']
  selectedItems: Array<string> = []
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      chip: new FormControl([])
    })
  }


  onSubmit() {
    this.selectedItems = this.form.value.chip
    console.log(this.form.value.chip)

  }
}
