import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hero = HEROES.find((hero) => hero.id == id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
}
