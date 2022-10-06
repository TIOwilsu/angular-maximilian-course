import { 
  Component, 
  OnInit, 
  ElementRef, 
  ViewChild, 
  EventEmitter, 
  Output 
} from '@angular/core';
import { Ingredient } from 'app/shared/model/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInputRef") nameInputRef: ElementRef;
  @ViewChild("amountInputRef") amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>()

  constructor(nameInputRef: ElementRef, amountInputRef: ElementRef) {
    this.nameInputRef = nameInputRef;
    this.amountInputRef = amountInputRef;
  }

  ngOnInit(): void {
  }

  onAddItem () {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
