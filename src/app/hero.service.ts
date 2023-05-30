import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{

    const heroes = of(HEROES);


    // return throwError(new Error('Ocorreu um problema'));

    return heroes

  }



}
