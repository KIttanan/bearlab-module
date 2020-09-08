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

    /**
     * Read a line of text from the serial port and return the buffer when the delimiter is met.
     * @param delimiter text delimiter that separates each text chunk
     */
    //% help=serial/read-until
    //% blockId=serial_read_until block="serial|read until %delimiter=serial_delimiter_conv"
    //% weight=19
    String readUntil(String delimiter) {
        return PSTR(uBit.serial.readUntil(MSTR(delimiter)));
      }

}
