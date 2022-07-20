radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(3)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(2)
})
basic.forever(function () {
	
})
