import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { ServiceLocator } from './locator.services';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  speed: number = 0;
  gear: string = "N";
  battery: number = 0;
  lighting: number = 0;
  break: number = 0;
  gas: number = 0;
  steer: number = 0;
  horn: boolean = false;
  ws: WebsocketService;


  //create behavior subject for each of the above variables
  
  public speedSubject = new BehaviorSubject<number>(this.speed);
  public gearSubject = new BehaviorSubject<string>(this.gear);
  public batterySubject = new BehaviorSubject<number>(this.battery);
  public lightingSubject = new BehaviorSubject<number>(this.lighting);
  public breakSubject = new BehaviorSubject<number>(this.break);
  public gasSubject = new BehaviorSubject<number>(this.gas);
  public steerSubject = new BehaviorSubject<number>(this.steer);
  public hornSubject = new BehaviorSubject<boolean>(this.horn);

  // create observable for each of the above variables
  public speedObservable = this.speedSubject.asObservable();
  public gearObservable = this.gearSubject.asObservable();
  public batteryObservable = this.batterySubject.asObservable();
  public lightingObservable = this.lightingSubject.asObservable();
  public breakObservable = this.breakSubject.asObservable();
  public gasObservable = this.gasSubject.asObservable();
  public steerObservable = this.steerSubject.asObservable();
  public hornObservable = this.hornSubject.asObservable();

  public speedObservable$: Observable<{ previous: number; current: number }> = this.speedSubject.pipe(
    scan((acc, current) => ({ previous: acc.current, current }), { previous: null, current: null })
    );

  public steerObservable$: Observable<{ previous: number; current: number }> = this.steerSubject.pipe(
    scan((acc, current) => ({ previous: acc.current, current }), { previous: null, current: null })
    );


  constructor() {
    this.ws = ServiceLocator.getInstance("websocketService");
  }

  setSpeed(speed: number) {
    this.speed = Math.round(speed);
    this.speedSubject.next(this.speed);
  }
  getSpeed() {
    return this.speed;
  }

  setGear(gear: string) {
    this.gear = gear;
    this.gearSubject.next(gear);
  }
  getGear() {
    return this.gear;
  }

  setBattery(battery: number) {
    if(battery < 0 || battery > 100) return;
    this.battery = battery;
    this.batterySubject.next(battery);
  }
  getBattery() {
    return this.battery;
  }

  setLighting(lighting: number) {
    this.lighting = lighting;
    this.lightingSubject.next(lighting);
  }
  getLighting() {
    return this.lighting;
  }

  setBreak(breakVal: number) {
    this.break = breakVal;
    this.breakSubject.next(breakVal);
  }
  getBreak() {
    return this.break;
  }

  setGas(gas: number) {
    this.gas = gas;
    this.gasSubject.next(gas);
  }
  getGas() {
    return this.gas;
  }

  setSteer(steer: number) {
    this.steer = Math.round(steer);
    this.steerSubject.next(this.steer);
  }
  getSteer() {
    return this.steer;
  }

  setHorn(horn: boolean) {
    this.horn = horn;
    this.hornSubject.next(horn);
  }
  getHorn() {
    return this.horn;
  }

  
}
