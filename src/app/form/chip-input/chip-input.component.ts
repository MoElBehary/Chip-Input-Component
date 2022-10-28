import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ChipInputComponent,
    multi: true
  }]
})
export class ChipInputComponent implements OnInit, ControlValueAccessor {
  value: Array<string> = []
  onChange!: (value: any) => void;

  @Input() autocompleteItems: Array<string> = [];
  
  constructor() { }
  
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnInit(): void {
  }

  onAdd(event: any){
    this.onChange(this.value)
  }
  onRemove(event: any){
    this.onChange(this.value)
  }


}
