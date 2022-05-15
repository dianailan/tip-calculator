import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import {TipService} from "../tip.service";

@Component({
  selector: 'app-tip-calc',
  templateUrl: './tip-calc.component.html',
  styleUrls: ['./tip-calc.component.scss']
})
export class TipCalcComponent implements OnInit {
  form: FormGroup;

  constructor(private tipService: TipService) {
    this.form = tipService.form;
  }

  ngOnInit(): void {
    
  }
}
