import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Product } from './product';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getProducts() :Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json())
  }

  getAlbum(id:number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json())
  }
}
