/** @type {HTMLCanvasElement} */
const c = document.getElementById('canvas')
const ctx = c.getContext("2d")

let posX = 500
let posY = 300
let drawDistance = 10
ctx.lineWidth = 2
ctx.moveTo(posX,posY)

document.addEventListener("keydown", draw)

function draw(e) {
    if (e.key == "ArrowRight" || e.key == "d") {
        ctx.lineTo(posX + drawDistance, posY)
        ctx.stroke()
        posX += drawDistance
        ctx.moveTo(posX,posY)
    }
    if (e.key == "ArrowLeft" || e.key == "q" || e.key == "a") {
        ctx.lineTo(posX - drawDistance, posY)
        ctx.stroke()
        posX -= drawDistance
        ctx.moveTo(posX,posY)
    }
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

function reset () {
    ctx.clearRect(0,0,c.width,c.height)
    ctx.beginPath()
    ctx.moveTo(posX,posY)
}