import { Injectable } from '@angular/core';
import { StorageVariables } from '../enum/enums';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  SetStorageVariable<T>(_key: StorageVariables,_value: T): void{
    let serializedValue: string = JSON.stringify(_value);

    localStorage.setItem(_key, serializedValue);
  }

  GetStorageVariable<T>(_key: StorageVariables, _defaultReturnValue?: any): T{
    const VALUE = localStorage.getItem(_key);

    return VALUE ? JSON.parse(VALUE) : _defaultReturnValue;
  }

  RemoveStorageVariable(_key: StorageVariables): void{
    localStorage.removeItem(_key);
  }
}
