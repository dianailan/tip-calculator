import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TipService {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      bill: '',
      people: '',
      percent: ''
    })
  }
}
