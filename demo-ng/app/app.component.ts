import { Component } from "@angular/core";

import { registerElement } from "nativescript-angular/element-registry";
registerElement('ConfettiView', () => require('nativescript-confettiview').ConfettiView);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }
