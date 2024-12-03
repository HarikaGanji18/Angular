import { Component } from '@angular/core';
import { Student3Service } from '../services/student3.service';
import { Student3 } from '../models/student3';

@Component({
  selector: 'app-student3',
  templateUrl: './student3.component.html',
  styleUrls: ['./student3.component.css'],
})
export class Student3Component {
  records: Student3[]=[]
  constructor(private service: Student3Service) {}
  ngOnInit():void{
    this.getRecords();
  }
  getRecords():void{
    this.service.getall().subscribe(data=>this.records=data)
  }
}
