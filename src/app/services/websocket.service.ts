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
  private url: string = 'ws://localhost:8080';

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
    this.socket.send(JSON.stringify(msg));
  }

  public onMessage (): Observable<any> {
    return this.messages$;
  }
}
