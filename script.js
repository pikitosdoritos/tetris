const canvas = document.createElement('canvas')

document.body.append(canvas)

const ctx = canvas.getContext("2d")

canvas.width = innerWidth 
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

const {unit, offset} = drawBoard()

drawTetromino()

function drawBoard() {
    const unit = canvas.height/20
    const height = canvas.height
    const width = height/2
    const offset = (canvas.width - width)/2
    const y = 0

    ctx.strokeRect(offset, y, width, height)

    return {unit, offset}
}

function drawTetromino() {
    const shape = [
        [0, 0, 0],
        [0, 1, 1], 
        [1, 1, 0]
    ]
    const startX = offset + 6*unit
    const startY = 3*unit

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (shape1[i][j]) {
                ctx.fillRect(startX + j*unit, startY + i*unit, unit, unit)
            }
        }
    }
}