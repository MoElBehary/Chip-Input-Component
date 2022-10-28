import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.scss']
})
export class FormOutputComponent implements OnInit {
  @Input() selectedItems: any = []
  constructor() { }

  ngOnInit(): void {
  }

}
