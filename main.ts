input.onButtonPressed(Button.A, function () {
    led.unplot(x1, y1)
    led.unplot(x2, y1)
    x2 = x2 - 1
    x1 = x1 - 1
    if (x2 < 0) {
        x2 = 0
        x1 = 1
    }
    if (x1 < 1) {
        x1 = 1
    }
    led.plot(x1, y1)
    led.plot(x2, y1)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x1, y1)
    led.unplot(x2, y1)
    x2 = x2 + 1
    x1 = x1 + 1
    if (x2 > 3) {
        x2 = 3
    }
    if (x1 > 4) {
        x1 = 4
    }
    led.plot(x1, y1)
    led.plot(x2, y1)
})
let y2 = 0
let x2 = 0
let x1 = 0
let y1 = 0
x2 = 1
x1 = 2
y1 = 4
led.plot(x1, y1)
led.plot(x2, y1)
let x3 = randint(1, 3)
led.plot(x3, y2)
let richting_x = randint(-1, 1)
let richting_y = 1
basic.pause(300)
basic.forever(function () {
    led.unplot(x3, y2)
    x3 = x3 + richting_x
    y2 = y2 + richting_y
    led.plot(x3, y2)
    basic.pause(300)
    if (x3 < 1) {
        led.unplot(x3, y2)
        richting_x = 1
        x3 = x3 + richting_x
        y2 = y2 + richting_y
        led.plot(x3, y2)
        basic.pause(300)
    }
    if (x3 > 3) {
        led.unplot(x3, y2)
        richting_x = -1
        x3 = x3 + richting_x
        y2 = y2 + richting_y
        led.plot(x3, y2)
        basic.pause(300)
    }
    if (y2 > 4) {
        basic.showString("GAME OVER")
        led.unplot(x3, y2)
        led.unplot(x2, y1) && [x1, y1]
    }
    if (x3 == x1 && y2 == y1 || x3 == x2 && y2 == y1) {
        richting_y = -1
        led.unplot(x3, y2)
        richting_x = randint(-1, 1)
        x3 = x3 + richting_x
        y2 = y2 + richting_y
        led.plot(x2, y1)
        led.plot(x1, y1)
        led.plot(x3, y2)
        basic.pause(200)
        if (x3 > 3) {
            led.unplot(x3, y2)
            richting_x = -1
            led.plot(x3, y2)
            basic.pause(300)
        }
        if (x3 < 1) {
            led.unplot(x3, y2)
            richting_x = 1
            led.plot(x3, y2)
            basic.pause(300)
        }
    }
})
