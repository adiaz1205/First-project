input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.plotBarGraph(
    5,
    1,
    false
    )
    basic.clearScreen()
})
basic.forever(function () {
	
})
