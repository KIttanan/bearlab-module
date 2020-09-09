enum linetracking_position {
    //% block="Left"
    Left,
    //% block="Right"
    Right
}

/**
 * BearLab graphics blocks
 */
//% color="#2A94E0" weight=100 icon="\uf1b0" block="BearLab"
namespace BearLab {
    //% block="receive|data|Form|Module"
    export function receive() {
        let test = serial.readUntil(serial.delimiters(Delimiters.NewLine))
        if (test.includes("11")) {
            led.toggle(0, 0)
            led.toggle(4, 0)
        } else if (test.includes("00")) {
            led.toggle(2, 0)
        } else if (test.includes("10")) {
            led.toggle(0, 0)
        } else if (test.includes("01")) {
            led.toggle(4, 0)
        }
        if (test.includes("22")) {
            led.toggle(1, 4)
        } else if (test.includes("33")) {
            led.toggle(3, 4)
        }
    }

    //% block="Line|tracking|$position|sensor"
    export function line_receive(position: linetracking_position): boolean {
        let test = serial.readUntil(serial.delimiters(Delimiters.NewLine))
        if (position == 0) {
            if (test.includes("11") || test.includes("10")) {
                return true
            }
            else
                return false
        }
        else if (position == 1) {
            if (test.includes("11") || test.includes("01")) {
                return true
            } else
                return false
        }
        else
            return false
    }

    //% block="initial|Module"
    export function init() {
        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        )
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
