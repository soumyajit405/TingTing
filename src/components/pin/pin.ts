import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
 
@Component({
  selector: "custom-pin",
  templateUrl: "pin.html"
})
export class PinComponent {
  @Input() pagetitle: String;

  pin:string= "";
  @Input() type;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  enteredPin: string = '';
  isSetPin: any;

  constructor(private navParams: NavParams) {
    console.log('type is...',this.type);
    setTimeout(()=>{
      console.log(this.type)
    },100);
    console.log(this.navParams.get('isNewPin'));
    this.isSetPin = this.navParams.get('isNewPin');
  }

  emitEvent() {
    this.change.emit(this.pin);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pin');
  }

  handleInput(pin: string) {
    console.log(pin);
    this.enteredPin += pin;
    if (pin === "clear") {
      this.pin = "";
      this.enteredPin = '';
      return;
    }

    if (this.pin.length === 10) {
      return;
    }
    this.pin += pin;
  }
  eventCapture ($event){
    
  }
}