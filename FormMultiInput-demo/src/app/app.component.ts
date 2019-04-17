import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
  constructor(fb: FormBuilder) { //Il costruttore riceve come parametro il From Builder
    
    /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
     *Chiamato sku, con valore di default ABC123 */
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.required],
      'firstname': ['FIRSTNAME', Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
