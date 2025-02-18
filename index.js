//document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

let saveEl = document.getElementById("save-el")

function increment() {
	count += 1
	countEl.textContent = count
}

function save(){

//what the class asked for
//let countStr = count + " - "
//saveEl.textContent += countStr

saveEl.textContent += count + " - "

count = 0
countEl.textContent = count

}