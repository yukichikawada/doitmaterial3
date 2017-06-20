import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModules } from './material.modules';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    ReactiveFormsModule,
    RouterModule,
  ]
})

export class SharedModules {}
