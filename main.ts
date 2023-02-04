input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    Temperatura = input.temperature()
    Delta_T = Temperatura - Temperatura_precedente
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Delta_T))
})
let Temperatura_precedente = 0
let Temperatura = 0
let Delta_T = 0
Delta_T = 0
Temperatura = 0
Temperatura_precedente = 0
