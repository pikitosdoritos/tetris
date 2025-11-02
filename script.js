const canvas = document.createElement('canvas')

document.body.append(canvas)

const ctx = canvas.getContext("2d")

canvas.width = innerWidth - 1
canvas.height = innerHeight - 1

const shapes = [
    [
        [
            [1, 1],
            [1, 1]
        ]
    ],

    [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ],

        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0]
        ],

        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],

        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ],

    [
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ],

        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ],

        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],

        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
    ],

    [
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ],

        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ],

        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],

        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ]
    ],

    [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],

        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    ],

    [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],

        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1]
        ],

        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0]
        ],

        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0]
        ]
    ],

    [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],

        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 1, 0]
        ],

        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ],

        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0]
        ]
    ]
]
const shape = [[1]]
const position = { x: 4, y: 5 }
const { unit, offset } = drawBoard()

drawTetromino()

window.onkeydown = handleKeys

function drawBoard() {
    const unit = canvas.height / 20
    const height = canvas.height
    const width = height / 2
    const offset = (canvas.width - width) / 2
    const y = 0

    ctx.strokeRect(offset - 1, y - 1, width + 2, height + 2)

    return { unit, offset }
}

function clearBoard() {
    ctx.clearRect(offset, 0, unit * 10, unit * 20)
}

function drawTetromino() {
    const startX = offset + position.x * unit
    const startY = position.y * unit

    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape.length; j++) {
            if (shape[i][j]) {
                ctx.fillRect(startX + j * unit, startY + i * unit, unit, unit)
            }
        }
    }
}

function handleKeys(event) {
    if (event.key == 'ArrowUp') {
        rotate()
    } else if (event.key == 'ArrowDown') {
        moveDown()
    } else if (event.key == 'ArrowLeft') {
        moveLeft()
    } else if (event.key == 'ArrowRight') {
        moveRight()
    }
}

function render() {

}

function rotate() {

}

function moveDown() {
    if (position.y == 19) return

    position.y++

    clearBoard()
    drawTetromino()
}

function moveLeft() {
    if (position.x == 0) return

    position.x -= 1

    clearBoard()
    drawTetromino()
}

function moveRight() {
    if (position.x == 9) return

    position.x++

    clearBoard()
    drawTetromino()
}