/** @type {HTMLCanvasElement} */
const c = document.getElementById('canvas')
const ctx = c.getContext("2d")

let startX = 500
let startY = 300
let drawDistance = 10
ctx.lineWidth = 2
ctx.moveTo(startX,startY)

document.addEventListener("keydown", draw)

function draw(e) {
    if (e.key == "ArrowRight" || e.key == "d") {
        ctx.lineTo(startX + drawDistance, startY)
        ctx.stroke()
        startX += drawDistance
        ctx.moveTo(startX,startY)
    }
    if (e.key == "ArrowLeft" || e.key == "q" || e.key == "a") {
        ctx.lineTo(startX - drawDistance, startY)
        ctx.stroke()
        startX -= drawDistance
        ctx.moveTo(startX,startY)
    }
    if (e.key == "ArrowUp" || e.key == "z" || e.key == "w") {
        ctx.lineTo(startX, startY - drawDistance)
        ctx.stroke()
        startY -= drawDistance
        ctx.moveTo(startX,startY)
    }
    if (e.key == "ArrowDown" || e.key == "s") {
        ctx.lineTo(startX, startY + drawDistance)
        ctx.stroke()
        startY += drawDistance
        ctx.moveTo(startX,startY)
    }
}
