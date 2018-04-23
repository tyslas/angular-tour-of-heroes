import { Injectable } from '@angular/core';

// obj template
import { Hero } from './hero';

// mock data
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
