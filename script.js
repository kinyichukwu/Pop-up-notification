const buttons = document.querySelectorAll('.ripple')
const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})


const messages = [
    'Hey cutie',
    'Hire me :)',
    "i'm kin",
    'warris',
    'I eat meat',
    'Nigerian',
    "i'm kin",
    'E choke',
    'God is good',
    'it shows',
    'OMG do u know',
    'wow',
    'coding',
    "finess",
    'kinyickukwu@github',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomText()
    toasts.appendChild(notif)
    console.log('function working')

    setTimeout(() => notif.remove(), 3000)
}

function getRandomText() {
    return messages[Math.floor(Math.random() * messages.length)]
}