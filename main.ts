/**
 * BearLab graphics blocks
 */
//% color="#2A94E0" weight=100 icon="\uf1b0" block="BearLab"
namespace BearLab {
    //% block
    export function helloWorld() {
    }
    
    //% blockId=device_show_number
    //% block="show|number %v"
    export function showNumber(value: number, interval?: number) {
    }

    //% block="Connect|device|Pin %v"
    export function device_connect(value: number) {
        showNumber(value);
    }
    
    //% block
    export function add(x: number, y: number): number {
        return x + y;
    }

    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}
