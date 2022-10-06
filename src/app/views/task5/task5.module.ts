import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared/shared.module";
import { Task5RoutingModule } from "./task5-routing.module";
import { Task5Component } from "./task5.component";
import { GameControl } from "./components/GameControl/GameControl.component";
import { Number } from "./components/Number/Number.component";

@NgModule({
    declarations: [Task5Component, GameControl, Number],
    imports: [SharedModule, Task5RoutingModule]
})

export class Task5Module {}