input.onGesture(Gesture.Shake, function () {
    Secouses += 1
})
let Minutes = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.clearScreen()
let Secouses = 0
let Heure = 21
let Définition_de_lheure = 0
let Définition_des_minutes = 0
let Heure_définie = 0
basic.showNumber(Heure)
basic.clearScreen()
while (Définition_de_lheure == 0) {
    if (input.buttonIsPressed(Button.A)) {
        Heure += 1
        basic.showNumber(Heure)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.B)) {
        Définition_de_lheure = 1
    }
}
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.showNumber(Heure)
basic.clearScreen()
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.clearScreen()
Heure_définie = 1
if (Heure_définie == 1) {
    Minutes = 0
    basic.showNumber(Minutes)
    basic.clearScreen()
    while (Définition_des_minutes == 0) {
        if (input.buttonIsPressed(Button.A)) {
            Minutes += 5
            basic.showNumber(Minutes)
            basic.clearScreen()
        }
        if (input.buttonIsPressed(Button.B)) {
            Heure_définie = 2
            Définition_des_minutes = 1
        }
    }
}
loops.everyInterval(1000, function () {
    serial.writeValue("Heure", Heure)
    serial.writeValue("Minute", Minutes)
    serial.writeValue("Nombre de secousses", Secouses)
})
loops.everyInterval(1000, function () {
    serial.redirectToUSB()
})
loops.everyInterval(60000, function () {
    Minutes += 1
})
loops.everyInterval(3600000, function () {
    Définition_de_lheure += 1
})
