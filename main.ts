/**
 * BearLab graphics blocks
 */
//% weight=100 color=#0f9c11 icon="\f1b0"
namespace BearLab {

    /**
         * Turns left by 90 degrees
         */
    //% blockId=BearLabTurnLeft block="turn left"
    //% weight=89 blockGap=8
    input.onButtonPressed(Button.A, function () {
        led.toggle(0, 0)
    })
    /**
         * Turns left by 90 degrees
         */
    //% blockId=BearLabTurnRight block="turn right"
    //% weight=89 blockGap=8
    input.onButtonPressed(Button.B, function () {
        led.toggle(0, 0)
    })
    
}
