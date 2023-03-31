import './style.css'

document.querySelector('#app').innerHTML = `
  <img src="logo8.svg">
  <button>Count: 0</button>
`

let count = 0
const button = document.querySelector('#app button')
button.addEventListener('click', () => {
  count++
  button.textContent = `Count: ${count}`
})

