/** @type {HTMLCanvasElement} */
const c = document.getElementById('canvas')
const ctx = c.getContext("2d")
const c2 = document.getElementById("inner-canvas")
const ctx2 = c2.getContext("2d")

let posX = 500
let posY = 300
let stylusPosX = 500
let stylusPosY = 300
let drawDistance = 10
ctx.lineWidth = 2
ctx2.lineWidth = 2
ctx.moveTo(posX,posY)
ctx2.moveTo(stylusPosX,stylusPosY)
ctx2.strokeStyle = "red"

document.addEventListener("keydown", draw)

function draw(e) {
    if (e.key == "ArrowRight" || e.key == "d") {
        ctx.lineTo(posX + drawDistance, posY)
        ctx.stroke()
        posX += drawDistance
        ctx.moveTo(posX,posY)
    }
    /* support for both AZERTY and QWERTY */
    if (e.key == "ArrowLeft" || e.key == "q" || e.key == "a") {
        ctx.lineTo(posX - drawDistance, posY)
        ctx.stroke()
        posX -= drawDistance
        ctx.moveTo(posX,posY)
    }
    /* support for both AZERTY and QWERTY */
    if (e.key == "ArrowUp" || e.key == "z" || e.key == "w") {
        ctx.lineTo(posX, posY - drawDistance)
        ctx.stroke()
        posY -= drawDistance
        ctx.moveTo(posX,posY)
    }
    if (e.key == "ArrowDown" || e.key == "s") {
        ctx.lineTo(posX, posY + drawDistance)
        ctx.stroke()
        posY += drawDistance
        ctx.moveTo(posX,posY)
    }
}

document.getElementById("reset").addEventListener("click", reset)

function reset() {
    ctx.clearRect(0,0,c.width,c.height)
    ctx.beginPath()
    ctx.moveTo(posX,posY)
}

/* Stylus */

document.addEventListener("keydown", drawStylus)

function drawStylus(e) {
    if (e.key == "ArrowRight" || e.key == "d") {
        resetStylus()
        ctx2.lineTo(stylusPosX + drawDistance, stylusPosY)
        ctx2.stroke()
        stylusPosX += drawDistance
        ctx2.moveTo(stylusPosX,stylusPosY)
    }
    /* support for both AZERTY and QWERTY */
    if (e.key == "ArrowLeft" || e.key == "q" || e.key == "a") {
        resetStylus()
        ctx2.lineTo(stylusPosX - drawDistance, stylusPosY)
        ctx2.stroke()
        stylusPosX -= drawDistance
        ctx2.moveTo(stylusPosX,stylusPosY)
    }
    /* support for both AZERTY and QWERTY */
    if (e.key == "ArrowUp" || e.key == "z" || e.key == "w") {
        resetStylus()
        ctx2.lineTo(stylusPosX, stylusPosY - drawDistance)
        ctx2.stroke()
        stylusPosY -= drawDistance
        ctx2.moveTo(stylusPosX,stylusPosY)
    }
    if (e.key == "ArrowDown" || e.key == "s") {
        resetStylus()
        ctx2.lineTo(stylusPosX, stylusPosY + drawDistance)
        ctx2.stroke()
        stylusPosY += drawDistance
        ctx2.moveTo(stylusPosX,stylusPosY)
    }
}

document.getElementById("reset").addEventListener("click", resetStylus)

function resetStylus() {
    ctx2.clearRect(0,0,c2.width,c2.height)
    ctx2.beginPath()
    ctx2.moveTo(stylusPosX,stylusPosY)
}