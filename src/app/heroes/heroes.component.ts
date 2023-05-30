import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/internal/Observable';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{



  heroes: Hero[] = [];

  selectedHero?: Hero;


  constructor(private heroService: HeroService,
    private messageService: MessageService){}


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
      this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes);

  }


  onSelect(hero: Hero):void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComonent: selected hero id=${hero.id}` )
  }

}
