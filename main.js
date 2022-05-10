document.addEventListener('keydown', (event) => {
    const keyName = event.key
    console.log('keydown event\n' + 'key: ' + keyName)
})

const box = document.createElement('div')
box.id = 'box'
const body = document.querySelector('body')

body.appendChild(box)

box.style = 'width: 100px;' + 'height: 100px;' + 'position: absolute;' + 
            'background: gray;' + 'left: 200px;' + 'top: 200px;';

let boxTop = 200
let boxLeft = 200

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        boxTop -= 10
    } else if (event.key == "ArrowDown") {
        boxTop += 10
    } else if (event.key == "ArrowLeft") {
        boxLeft -= 10
    } else if (event.key == "ArrowRight") {
        boxLeft += 10
    }

    box.style.left = boxLeft + "px"
    box.style.top = boxTop + "px"
})