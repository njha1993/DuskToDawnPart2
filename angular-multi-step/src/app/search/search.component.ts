import { Component, OnInit, Input } from '@angular/core';
import { FormDataService }     from '../data/formData.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   @Input() formData;
 constructor(private formDataService: FormDataService) {}

  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log("logging", this.formData );
      
  }

}
