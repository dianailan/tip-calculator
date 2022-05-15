import { Component, OnInit } from '@angular/core';
import {TipService} from "../tip.service";
import {FormControl, FormGroup} from "@angular/forms";
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-tip-display',
  templateUrl: './tip-display.component.html',
  styleUrls: ['./tip-display.component.scss']
})
export class TipDisplayComponent implements OnInit {
  values: FormGroup;
  valueChangesSub!: Subscription;

  constructor(private tipService:TipService) {
    this.values = new FormGroup({
      tipAmount: new FormControl('$0.00'),
      total: new FormControl('$0.00')
    });
  }

  reset() {
    this.tipService.form.reset();
    this.values.reset();
    this.values.controls['tipAmount'].setValue('$0.00');
    this.values.controls['total'].setValue('$0.00');
  }
  ngOnInit(): void {
    this.valueChangesSub = this.tipService.form.valueChanges.subscribe(changes => {
      if(!Object.values(changes).includes(0) && !Object.values(changes).includes("") && !Object.values(changes).includes(null)) {
        this.values.controls['tipAmount'].setValue((changes.bill * changes.percent / 100).toFixed(2));
        this.values.controls['total'].setValue(((+changes.bill + +this.values.controls['tipAmount'].value) / +changes.people).toFixed(2))
      }
    });
  }

}
