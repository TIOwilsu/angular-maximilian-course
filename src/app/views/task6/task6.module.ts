import { NgModule } from "@angular/core";
import { Task6Component } from "./task6.component";
import { SharedModule } from "app/shared/shared.module";
import { Task6RoutingModule } from "./task6-rounting.module";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserComponent } from "./components/users-list/user/user.component";
import { UserService } from "./services/user.service";


@NgModule({
    declarations: [Task6Component, UsersListComponent, UserComponent],
    imports: [SharedModule, Task6RoutingModule],
    providers: [UserService]
})

export class Task6Module {}
