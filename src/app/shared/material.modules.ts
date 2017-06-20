import { NgModule } from '@angular/core';
import {
  MdChipsModule,
  MdInputModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';


@NgModule({
  imports: [
    MdChipsModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdMenuModule,
    MdGridListModule,
    MdTabsModule
  ],
  exports: [
    MdChipsModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdMenuModule,
    MdGridListModule,
    MdTabsModule
  ]
})

export class MaterialModules { }
