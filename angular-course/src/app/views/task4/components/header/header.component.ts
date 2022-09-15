import { 
  Component, 
  ViewChild, 
  ElementRef, 
  AfterViewInit, 
  EventEmitter, 
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  constructor(header: ElementRef){
    this.header = header;
  }

  @ViewChild("header") header: ElementRef;
  @Output() featureSelected:EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit(): void {
    // this.header.nativeElement.offsetHeight;
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
}
