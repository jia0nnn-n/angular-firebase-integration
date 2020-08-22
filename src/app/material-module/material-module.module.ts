import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule,MatCardModule],
  exports: [MatButtonModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule,MatCardModule],
})

export class MaterialModuleModule { }
