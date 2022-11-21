basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P0) < 100) {
        led.plot(1, 1)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1)
    } else {
        led.unplot(1, 1)
    }
})
