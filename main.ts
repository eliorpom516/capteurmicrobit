input.onButtonPressed(Button.B, function () {
    serial.redirectToUSB()
})
input.onGesture(Gesture.Shake, function () {
    Secouses += 1
})
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.clearScreen()
let Secouses = 0
let Heure = 21
let Définition_de_lheure = 0
basic.showNumber(Heure)
while (Définition_de_lheure == 0) {
    if (input.buttonIsPressed(Button.A)) {
        Heure += 1
        basic.showNumber(Heure)
    }
    if (input.buttonIsPressed(Button.B)) {
        Définition_de_lheure = 1
    }
}
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.showNumber(Heure)
basic.clearScreen()
loops.everyInterval(1000, function () {
    serial.writeValue("Heure", Heure)
    serial.writeValue("Nombre de secousses", Secouses)
})
