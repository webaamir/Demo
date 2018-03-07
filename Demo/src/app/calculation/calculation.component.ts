import { Component, OnInit }            from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
import { Entity }                       from '../Model/Entity.Model';
import { CalculationService }           from '../Shared/CalculationService';
import { IMockData }                    from '../Model/IMockData.Model';
import { OnDestroy }                    from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector:    'RPC-calculation',
  templateUrl: './calculation.component.html',
  styleUrls:   ['./calculation.component.css']
})
export class CalculationComponent implements OnInit, OnDestroy {

  constructor(private calculationService:CalculationService) {
    this.imagePath     = '/assets/Spinner.gif';
  }

  ngOnInit() {
    this.loading = false;
  }

   messages:       string[]    = [];
   executionTypes: any         = ['Simple', 'Complex'];
   entity:         Entity      = new Entity();
   imagePath:      string;
   loading:        boolean;
   result:         IMockData[] = [];

  fetchCalculation(frmValues) {
    this.loading = true;
    this.result  = [];
    this.calculationService.getCalculatedMockData()
      .subscribe(MockingData => {
        this.result = MockingData;
        this.loading = false;
      },
      errors => this.handleErrors(errors));
 }
 ngOnDestroy() {
 }
  private handleErrors(errors: any) {
    this.messages = [];
    for (const msg of errors) {
      this.messages.push(msg);
    }
  }
}
