import { Injectable } from '@angular/core';
import { Getbooks } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  // public returnNumberPlusOne(myNumber: number): number {
  //     return myNumber + 1;
  // }

  // var x = 5;
  // var numberNumberPlusOne = this.returnNumberPlusOne(x);

  public getBooksArrAsync(callback: (arr: Getbooks[]) => void): void {
    setTimeout(function () {
      let booksArr = new Array<Getbooks>();
      booksArr.push(
        new Getbooks(60, '../assets/images/puppy.jpg', 'צילה של הרוח')
      );
      booksArr.push(
        new Getbooks(70, '../assets/images/puppy.jpg', 'חכמת הבייגלה')
      );
      booksArr.push(
        new Getbooks(80, '../assets/images/puppy.jpg', 'זהבה ושלושת הדובים')
      );

      let booksArr2 = new Array<Getbooks>(3);
      booksArr2[0] = new Getbooks(60, '../assets/images/puppy.jpg', 'צילה של הרוח');
      booksArr2[1] = new Getbooks(
        70,
        '../assets/images/puppy.jpg',
        'חכמת הבייגלה'
      );
      booksArr2[2] = new Getbooks(
        80,
        '../assets/images/puppy.jpg',
        'זהבה ושלושת הדובים'
      );
      callback(booksArr);
    }, 3000);
    console.log('End of getTopProductsAsync');
  }
}

// public getBooksArr(): Getbooks[] {
//     let booksArr = new Array<Getbooks>();
//     booksArr.push(new Getbooks(60, '../assets/images/puppy.jpg', "צילה של הרוח"));
//     booksArr.push(new Getbooks(70, '../assets/images/puppy.jpg', "חכמת הבייגלה"));
//     booksArr.push(new Getbooks(80, '../assets/images/puppy.jpg', "זהבה ושלושת הדובים"));
//     return booksArr;
// }
