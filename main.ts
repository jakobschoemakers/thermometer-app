let temperatur = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    temperatur = input.temperature()
    basic.showNumber(temperatur)
})
