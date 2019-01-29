import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardService } from './shared/card.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    CardDeckPage
  ],
  providers: [
    CardService
  ]
})

export class CardDeckPageModule {}
