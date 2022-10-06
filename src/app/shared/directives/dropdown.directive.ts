import { 
    Directive, 
    HostBinding, 
    HostListener, 
    ElementRef, 
    ViewChild, 
    Renderer2 
} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @ViewChild('ref', { static: false }) ref: ElementRef;

    constructor(private renderer: Renderer2, ref: ElementRef,) {
        this.ref = ref;
        this.renderer = renderer;
    }

    @HostBinding('class.show') show: boolean = false;
    
    @HostListener('click') toggleShow() {
        this.show = !this.show;

        const childrens = [...this.ref.nativeElement.children];
        
        const dropdownElements = childrens.filter(children => 
            [...children.classList].includes('dropdown-toggle') || 
            [...children.classList].includes('dropdown-menu')
        );

        dropdownElements.map(element => this.show 
            ? this.renderer.addClass(element, 'show') 
            : this.renderer.removeClass(element, 'show')
        );
    } 
}