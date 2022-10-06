import { Component, Input } from "@angular/core"

@Component({
    selector: 'app-card-resource',
    templateUrl: './card-resource.component.html',
    styleUrls: ['./card-resource.component.scss']
})

export class AppCardResourceComponent {
    @Input() link:string = '';
    @Input() text:string = '';
    @Input() gliffy:string = '';
}