
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AsideComponent } from './layout/AppAside/aside.component';
import { ButtonComponent } from './base/AppButton/button.component';
import { HeaderComponent } from './layout/AppHeader/header.component';
import { TitleComponent } from './layout/AppTitle/title.component';
import { InputComponent } from './base/AppInput/input.component';
import { CardComponent } from './base/AppCard/card.component';
import { AlertComponent } from './base/AppAlert/alert.component';
import { IconComponent } from './base/AppIcon/icon.component';
import { CustomClassDirective } from './directives/class.directive';

const components = [
    AlertComponent,
    AsideComponent,
    ButtonComponent,
    HeaderComponent,
    TitleComponent,
    CardComponent,
    IconComponent,
    InputComponent
]

const directives = [
    CustomClassDirective
];

const imports = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
]

@NgModule({
    declarations: [components, directives],
    imports: [imports],
    exports: [imports, components]
})

export class SharedModule {}