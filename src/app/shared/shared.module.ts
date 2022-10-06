
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AsideComponent } from './layout/AppAside/aside.component';
import { BackdropComponent } from './base/AppBackdrop/backdrop.component';
import { ButtonComponent } from './base/AppButton/button.component';
import { ButtonGroupComponent } from './base/AppButtonGroup/button-group.component';
import { TitleComponent } from './layout/AppTitle/title.component';
import { InputComponent } from './base/AppInput/input.component';
import { CardComponent } from './base/AppCard/card.component';
import { AlertComponent } from './base/AppAlert/alert.component';
import { IconComponent } from './base/AppIcon/icon.component';
import { OffCanvasComponent } from './base/AppOffCanvas/offcanvas.component';
import { DropdownDirective } from './directives/dropdown.directive';




const components = [
    AlertComponent,
    AsideComponent,
    BackdropComponent,
    ButtonComponent,
    ButtonGroupComponent,
    TitleComponent,
    CardComponent,
    IconComponent,
    InputComponent,
    OffCanvasComponent
];

const directives = [
    DropdownDirective
];

const declarations = [
    components,
    directives
];

const imports = [
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
];

const exports = [
    imports,
    components,
    directives
];

@NgModule({
    declarations,
    imports,
    exports,
})

export class SharedModule {}