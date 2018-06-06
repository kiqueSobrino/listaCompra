import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const shoppingLists  = [
      { id: 1, name: 'Super'},
      { id: 2, name: 'Todo a 100'},
      { id: 3, name: 'Mercado del barrio'},
      { id: 4, name: 'Bodega'}
    ];
    const superList = [
      { id: 0, name: 'Manzanas', price: '10' },
      { id: 1, name: 'Peras', price: '12' },
      { id: 2, name: 'Patatas', price: '5' }
    ];
    const bodegaList = [
      { id: 0, name: 'Vino', price: '30' },
      { id: 1, name: 'Zumo', price: '3' },
      { id: 2, name: 'Cerveza', price: '9' }
    ];
    return { shoppingLists, superList, bodegaList };
  }
}