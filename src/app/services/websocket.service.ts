import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;
  private readonly SERVER_URL = 'ws://localhost:8080';

  constructor() {
    this.socket$ = new WebSocketSubject(this.SERVER_URL);
    console.log("websocket constructor called -> ")
    this.socket$.subscribe();
  }

  public isConnected(): boolean {
    return this.socket$.closed;
  }
  
  public sendMessage(message: any): void {
    console.log("sending this message -> "+ message );

    this.socket$.next(JSON.stringify(message));
  }

  public onMessage(): WebSocketSubject<any> {
    return this.socket$;
  }

  public close(): void {
    this.socket$.complete();
  }
}
