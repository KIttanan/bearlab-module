enum linetracking_position {
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Left & Right"
    Bold
}

enum linetracking_power {
    //% block="on"
    on,
    //% block="off"
    off,
}

/**
 * BearLab graphics blocks
 */
//% color="#2A94E0" weight=100 icon="\uf1b0" block="BearLab"
namespace BearLab {
    //% block="Test|data|receive|rorm|Module|to|LED"
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

    //% block="Power|Linetracking|is|$switch_"
    export function Power_line(switch_: linetracking_power) {
        if(switch_ == 0)
            serial.writeLine("start")
        if(switch_ == 1)
            serial.writeLine("stop")
    }
    //% block="Line|tracking|$position|sensor"
    export function line_receive(position: linetracking_position): boolean {
        let test = serial.readUntil(serial.delimiters(Delimiters.NewLine))
        if (test.includes("11"))
            return true
        else if (position == 0 && test.includes("10"))
            return true
        else if (position == 1 && test.includes("01"))
            return true
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
}
