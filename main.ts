/**
 * BearLab graphics blocks
 */
//% color="#2A94E0" weight=100 icon="\uf1b0" block="BearLab"
namespace BearLab {
    //% block="receive|data|Form|Module"
    export function receive() {
            led.toggle(0, 0)
            led.toggle(4, 0)

    }

    //% block="initial|Module"
    export function init() {
        SerialPin.P0
        SerialPin.P1
        BaudRate.BaudRate115200
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
