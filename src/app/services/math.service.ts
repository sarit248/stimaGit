import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MathService {




    public getAvarage(arr: number[]): number {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return Math.floor(sum / arr.length * 100) / 100;
    }


    

    public getMax(arr: number[]): number {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }




    public getMin(arr: number[]): number {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

}

