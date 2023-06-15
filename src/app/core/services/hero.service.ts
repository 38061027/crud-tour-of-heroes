import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = 'api/heroes'




  constructor( private http: HttpClient, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl);



    //  const heroes = of(HEROES);
    //  this.log('fetched heroes')
    //  return heroes;



  }



  getHero(id: number): Observable<Hero>{

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find((hero) => hero.id == id)!;
    this.log(`fetched hero id=${id}`)
    return of(hero);
  }

  private log(message:string):void{
    this.messageService.add(`HeroService: ${message}`)
  }


}
