import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  card:any
  constructor(private service:CardsService,private route:ActivatedRoute){}
    
      ngOnInit(): void{
        const id=Number(this.route.snapshot.paramMap.get('id'))
        this.service.getDetails().subscribe(data=>{this.card=data.find(c=>c.id ===id)})

}
}
