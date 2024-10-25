let I = 0
let DOT = game.createSprite(0, 0)
basic.forever(function () {
    I += 1
    DOT.set(LedSpriteProperty.X, Math.cos(I) * 4)
    DOT.set(LedSpriteProperty.Y, Math.sin(I) * 4)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    I,
    I,
    255,
    0,
    75,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
})
