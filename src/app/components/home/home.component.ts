import { ThisReceiver } from "@angular/compiler";
import { Component, ViewEncapsulation } from "@angular/core";
import { ShoppingItem } from "src/app/models/shopping-item.model";
import { Gender, User } from "src/app/models/user.model";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    name: string;
    lastName: string;
    message: string;
    isDisabled: boolean;
    secretMessageBackgroundColor: string;
    secretMessageFontSize: number;
    pStyles: object;
    shoppingItemName: string;
    shoppingItemQty: number;
    userName: string;
    userAge: number;
    userEmail: string;
    userGender: Gender;

    shoppingList: ShoppingItem[];
    userLess18List: User[];
    userLess65List: User[];
    userMore65List: User[];


    constructor() {
        this.name = '';
        this.lastName = '';
        this.message = 'Enter your the value';
        this.isDisabled = false;
        this.secretMessageBackgroundColor = 'aquamarine';
        this.secretMessageFontSize = 20;
        this.pStyles = { // así también se pueden añadir los estilos a las etiquetas.
            'color': 'lawngreen',
            'font-size.px': this.secretMessageFontSize,
            'background-color': this.secretMessageBackgroundColor
        }
        // this.shoppingList = ['Milk', 'Bread', 'Eggs', 'Cheese'];
        this.shoppingList = [new ShoppingItem('Milk', 1), new ShoppingItem('Bread', 2), new ShoppingItem('Eggs', 3), new ShoppingItem('Cheese', 4)];
        this.shoppingItemName = '';
        this.shoppingItemQty = 10;
        this.userName = '';
        this.userAge = 0;
        this.userEmail = '';
        this.userLess18List = [];
        this.userLess65List = [];
        this.userMore65List = [];
        this.userGender = Gender.no_binario;

    }



    // PROPERTY BINDING = [] y relacionamos propiedades de tags de HTML con VARAIBLES DE TYPESCRIPT
    // EVENT BINDING = () y relacionamos eventos de HTML para que nos llamen a FUNCIONES DE TYPESCRIPT
    // TWO WAY BINDING = [()] y relacionamos VARAIBLES DE TYPESCRIPT con INPUTS DE HTML

    sayHello(): void {
        this.secretMessageBackgroundColor = 'pink';
        alert(`${this.name} ${this.lastName}`);
    }

    printMessage(): void {
        alert('Detengase Malandro !!');
    }

    updateName(event: KeyboardEvent): void {
        console.log(event);
        // this.name = (<HTMLInputElement>event.target).value; // obtenemos el valor actual del input y lo asignamos a la variable name
        const currentInput = event.target as HTMLInputElement; // obtenemos el valor actual del input y lo asignamos a la variable name
        this.name = currentInput.value;
        // alert(this.name);
    }

    isPepe(): boolean {

        const stylesObject = {
            clave: 'valor',
            clave2: 1000
        }

        return this.name === 'Pepe';
    }

    addShoppingItem(): void {
        if(this.shoppingItemQty <= 0) {
            alert('La cantidad debe ser mayor a 0');
            return;
        }
        this.shoppingList.push(new ShoppingItem(this.shoppingItemName, this.shoppingItemQty));
        this.shoppingItemName = '';
        this.shoppingItemQty = 10;

    }

    isEven(i: number): boolean {
        return i % 2 === 0;
    }

    calculateStyles(i: number): object {
        return {'odd': !this.isEven(i), 'even': this.isEven(i)}
    }

    checkKeyPressed(event: KeyboardEvent): void {
        if(event.key === 'Enter') {
            this.addShoppingItem();
        }
    }
    addUser(): void {
        if(this.userAge <= 0) {
            alert('age shoud be more then 0');
            return;
        } else if(this.userAge <= 18) {
            this.userLess18List.push(new User(this.userName, this.userAge, this.userEmail, this.userGender))
        }else if(this.userAge <= 65) {
            this.userLess65List.push(new User(this.userName, this.userAge, this.userEmail,this.userGender))
        }else if(this.userAge <= 18) {
        this.userMore65List.push(new User(this.userName, this.userAge, this.userEmail, this.userGender))
    }
  

}
}