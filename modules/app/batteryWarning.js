import { charger, battery } from "power";

export default class batteryWarning { 
  get() {
    console.log('app - batteryWarning - get()')
    let percent = Math.floor(battery.chargeLevel)
    let visible = false;
    if(percent <= 15) {
      visible=true;
    }
    return {
      visible: visible,
    }
  }
};