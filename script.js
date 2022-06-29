const neymar = document.querySelector('input')
const messi = document.querySelector('ol')
let ramos = []

function adicionar(){
  ramos.push(neymar.value)
  render()
}

function render(){
  messi.innerHTML = null
  ramos.forEach(function(tarefa){
    const li = document.createElement('li')
    li.innerText = tarefa
    messi.appendChild(li)
  })
}
function apagar(){
  ramos = []
  messi.innerHTML = null
}
