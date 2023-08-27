import { DataStoreService } from './data-store.service';
import { WebsocketService } from './websocket.service'; // Import your service

export class ServiceLocator {
  private static instances = new Map();

  static setInstance(key: string, instance: any): void {
    this.instances.set(key, instance);
  }

  static getInstance(key: string): any {
    return this.instances.get(key);
  }
}

// Set your services in the ServiceLocator
ServiceLocator.setInstance('websocketService', new WebsocketService());
ServiceLocator.setInstance('dataStoreService', new DataStoreService());
