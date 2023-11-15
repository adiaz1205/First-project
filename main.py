def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_pressed():
    music.play(music.builtin_playable_sound_effect(soundExpression.hello),
        music.PlaybackMode.UNTIL_DONE)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    pass
basic.forever(on_forever)
