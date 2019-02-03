import { Component, OnInit } from '@angular/core';
import { Getbooks } from '../../models/books';
import { ProductsService } from '../../services/products.service';
import { MathService } from '../../services/math.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public price: number;
    public bookImage: string;
    public booksName: string;
    public booksArr: Getbooks[];
    public avarage: number;
    public minPrice: number;
    public maxPrice: number;

    constructor(private productsService: ProductsService,
        private mathService: MathService) { }

    ngOnInit() {

        // console.log("1");
// this.productsService.getBooksArrAsync((arr: Getbooks[]) => {// למה לא לכתוב ככה?
        // tslint:disable-next-line:prefer-const
        const callBackFunction = ((arr: Getbooks[]) => {
            // console.log("2");
            this.booksArr = arr;  // השמה של מה שהתקבל בפוקנצית callback?

            const priceArray = new Array<number>();
            for (let i = 0; i < this.booksArr.length; i++) {
                priceArray.push(this.booksArr[i].price);
            }
            this.avarage = this.mathService.getAvarage(priceArray);
            this.maxPrice = this.mathService.getMax(priceArray);
            this.minPrice = this.mathService.getMin(priceArray);
        });

        // console.log("3");
        this.productsService.getBooksArrAsync(callBackFunction);  //  קריאה לפונקצית מערך הספרים
        // console.log("4");
    }
}





        //   this.booksArr=new Array<Getbooks>();
        //   this.booksArr.push(new Getbooks(60,'../assets/images/puppy.jpg',"צילה של הרוח"));
        //   this.booksArr.push(new Getbooks(70,'../assets/images/puppy.jpg',"חכמת הבייגלה"));
        //   this.booksArr.push(new Getbooks(80,'../assets/images/puppy.jpg',"זהבה ושלושת הדובים"));


        // var callBackFunction = ((prods: Getbooks[]) => {
        //     // console.log("2");
        //     this.booksArr = prods;

        //     let priceArray = new Array<number>();
        //     for (let i = 0; i < this.booksArr.length; i++) {
        //         priceArray.push(this.booksArr[i].price);
        //     }
        //     this.maxPrice = this.mathService.getMax(priceArray);

        // });

        // // console.log("3");
        // this.productsService.getBooksArrAsync(callBackFunction);
        // // console.log("4");




        // var callBackFunction = ((prods: Getbooks[]) => {
        //     // console.log("2");
        //     this.booksArr = prods;

        //     let priceArray = new Array<number>();
        //     for (let i = 0; i < this.booksArr.length; i++) {
        //         priceArray.push(this.booksArr[i].price);
        //     }
        //     this.minPrice = this.mathService.getMin(priceArray);
        // });

        // // console.log("3");
        // this.productsService.getBooksArrAsync(callBackFunction);
        // // console.log("4");

