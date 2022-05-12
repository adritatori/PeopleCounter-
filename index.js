let count = 0

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")



console.log(countEl)

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
  counte= count + " - "
  saveEl.textContent += counte
  countEl.textContent = 0
  count = 0

}


