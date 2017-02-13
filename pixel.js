let body = document.getElementsByTagName('html')[0]
let pixel = document.getElementsByClassName('pixel')

let boxContainer = document.createElement('div')
let container = boxContainer.className = "container"
boxContainer.style.height = '300px'
boxContainer.style.width = '750px'
body.appendChild(boxContainer)

let palette = document.createElement('div')
palette.id = "palette"
palette.style.className = "palette"
// palette.style.position = "absolute"
palette.style.height = '750px';
palette.style.width = '200px';
palette.style.padding = "20px"
palette.style.marginTop = '-170px'
palette.style.backgroundColor = 'rgb(255, 230, 96)'
palette.style.borderRadius = '10%  20% 60% 30% '
palette.style.border = '10px solid black'
palette.style.float = "right"
body.appendChild(palette)

for (let i = 0; i < 700; i++) {
    let div = document.createElement('div')
    div.style.height = '20px'
    div.style.width = '20px'
    div.style.border = '1px'
    div.style.borderColor = 'black'
    div.style.borderStyle = 'inset'
    div.style.borderCollapse = 'separate'
    div.style.padding = "5px"
    div.style.display = "inline-block"
    let pixel = div.className = "pixel"
    boxContainer.appendChild(div)
}

for (var i = 0; i < 11; i++) {
    let div = document.createElement('div')
    let colorValue = ['maroon', 'red', 'orange', 'yellow', 'lime', 'green', 'blue', 'violet', 'purple', 'black', 'white']
    let id = div.id = colorValue[i]
    div.style.height = '100px'
    div.style.width = '75px'
    div.style.border = '2px solid black'
    div.style.display = 'inline-block'
    div.style.padding = '3px'
    // div.style.position = 'relative'
    // div.style.margin = '-90% 0% 95% 5%'
    div.style.borderRadius = '75% 30% 80% 75%'
    div.style.backgroundColor = colorValue[i]
    palette.appendChild(div)
}





palette.addEventListener("click", function() {
    let coloring = event.target.style.backgroundColor
    let alert = document.createElement('div')
    alert.style.backgroundImage = 'url("https://media.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif")'
    alert.style.backgroundRepeat = 'no-repeat'
    alert.style.height = '500px'
    alert.style.width = '500px'
    alert.style.position = "relative"
    alert.style.marginLeft = "-700px"

    let msg = document.createElement('h1')
    msg.innerText = "You picked  " + coloring + " now paint me some happy trees"
    msg.style.position = "relative"
    msg.style.right = "300px"
    msg.style.display = "inline-block"

    palette.appendChild(msg)
    palette.appendChild(alert)

    boxContainer.addEventListener('mousedown', function() {
        event.target.style.backgroundColor = coloring

                    event.target.style.backgroundColor = coloring
                })

    })
