import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialongComponent } from './components/error-dialong/error-dialong.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MainToolBarComponent } from './main-tool-bar/main-tool-bar.component';



@NgModule({
  declarations: [
    ErrorDialongComponent
  ],
  imports: [
    MainToolBarComponent,
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    MainToolBarComponent,
    ErrorDialongComponent
  ]
})
export class SharedModule { }
