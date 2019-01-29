import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';

@Injectable()
export class CardService {

  public readonly cardDecks: string[] = ['Alliance', 'Common', 'Druid', 'Pirate', 'Priest', 'Warrior'];

  public getAllCardDecks(): Observable<string[]> {
    return ObservableOf(this.cardDecks);
  }

}
