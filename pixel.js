let body = document.getElementsByTagName('body')[0]
let pixel = document.getElementsByClassName('pixel')

let boxContainer = document.createElement('div')
let container = boxContainer.className = "container"
boxContainer.style.height = '50%'
boxContainer.style.width = '50%'
boxContainer.display = 'inline-block'
body.appendChild(boxContainer)

let palette = document.createElement('div')
palette.id = "palette"
palette.style.className = "palette"
palette.style.display = "block"
palette.style.position = "absolute"
palette.style.height = '25%'
palette.style.width = '25%'
palette.style.right = '1em'
palette.style.top = '45em'
palette.style.paddingRight = '10em;'
palette.style.paddingTop = '45em'
palette.style.marginTop = '-40em'
palette.style.backgroundColor = 'rgb(255, 230, 96)'
palette.style.borderRadius = '10%   20% 60% 30% '
palette.style.border = '10px solid black'
body.appendChild(palette)

for (let i = 0; i < 810; i++) {
    let div = document.createElement('div')
    div.style.height = '.5em'
    div.style.width = '.5em'
    div.style.border = '1%'
    div.style.borderRadius = '5%'
    div.style.borderColor = 'black'
    div.style.borderStyle = 'inset'
    div.style.borderCollapse = 'separate'
    div.style.padding = '1% 1% 1% 1%'
    div.style.margin = '0%'
    div.style.float = 'left'
    let pixel = div.className = "pixel"
    boxContainer.appendChild(div)
}

for (var i = 0; i < 11; i++) {
    let div = document.createElement('div')
    let colorValue = ['maroon', 'red', 'orange', 'yellow', 'lime', 'green', 'blue', 'violet', 'purple', 'black', 'white']
    let id = div.id = colorValue[i]
    div.style.height = '1em'
    div.style.width = '1em'
    div.style.border = '2px solid black'
    div.style.display = 'inline-block'
    div.style.padding = '3em'
    div.style.margin = '-90% 2% 95% 5%'
    div.style.borderRadius = '75% 30% 80% 75%'
    div.style.backgroundColor = colorValue[i]
    palette.appendChild(div)
}

palette.addEventListener("click", function() {
    let coloring = event.target.style.backgroundColor

    let alert = document.createElement('div')
    alert.style.position = "absolute"
    alert.style.backgroundImage = 'url("https://media.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif")'
    alert.style.backgroundRepeat = 'no-repeat'
    alert.style.height = '100%'
    alert.style.width = '100%'
    alert.style.bottom = '-100%'
    alert.style.left = '20%'

    let msg = document.createElement('h1')
    msg.innerText = "You picked  " + coloring + " now paint me some happy trees"
    msg.style.marginTop = "-43em"
    palette.appendChild(alert)
    palette.appendChild(msg)

    boxContainer.addEventListener('mousedown', function() {
        event.target.style.backgroundColor = coloring

                    event.target.style.backgroundColor = coloring
                })

    })
