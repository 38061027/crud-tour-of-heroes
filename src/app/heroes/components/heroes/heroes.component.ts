import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';
import { MessageService } from 'src/app/core/services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{


  displayedColumn: string[] = ['id', 'name'];
  heroes: Hero[] = [];




  constructor(private heroService: HeroService,
    private messageService: MessageService){}


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
      this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes);

  }



}