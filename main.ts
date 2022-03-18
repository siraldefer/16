function biratu_goiara () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.North)
    }
}
function biratu_berara () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.South)
    }
}
function biratu_eskuinera () {
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
}
function biratu_eskerrera () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
}
basic.forever(function () {
    biratu_eskerrera()
    biratu_eskuinera()
    biratu_goiara()
    biratu_berara()
})
