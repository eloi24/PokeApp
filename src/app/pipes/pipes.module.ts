import { PokenamePipe } from './pokename/pokename.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PokenamePipe],
  imports: [
    CommonModule
  ],
  exports: [PokenamePipe]
})
export class PipesModule { }
