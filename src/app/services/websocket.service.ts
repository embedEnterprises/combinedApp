import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export  class WebsocketService {
  private socket: WebSocket;
  private messages$: Observable<any>;
  private observer: Observer<any>;
  private url: string = 'ws://192.168.0.101/ws';

  constructor() {
    this.socket = new WebSocket(this.url);
    this.messages$ = new Observable((observer: Observer<any>) => {
      this.observer = observer;
      this.socket.onmessage = (event) => {
        this.observer.next(event.data);
      };
      this.socket.onerror = (error) => {
        this.observer.error(error);
      };
      this.socket.onclose = () => {
        this.observer.complete();
      };
    });
  }

  public sendMessage(msg: any) {
    console.log(msg);
    this.socket.send(msg);
  }

  public onMessage (): Observable<any> {
    return this.messages$;
  }
}
