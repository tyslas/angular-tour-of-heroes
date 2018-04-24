import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// obj template
import { Hero } from './hero';
// message service
import { MessageService } from './message.service';
// mock data
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    // TODO: seand the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetching hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
