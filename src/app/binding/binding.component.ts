import { Component } from "@angular/core";

@Component({
    selector:'my-binding',
    templateUrl:'./binding.component.html',
})

export class BindingComponent {
    title:string = 'Binding component!!';
    count:number = 0;
    increase(event) : void {
        console.log(event)
        this.count+=1;
    }
}