


let desain = localStorage.getItem("selectedDesain")
let arrDesain = JSON.parse(desain)
let baju = []
console.log(arrDesain)

let desainElement = document.getElementById("desain")
for(i = 0; i < arrDesain.length; i++) {
  let template = `<option value="${arrDesain[i]}">${arrDesain[i]}</option>`
  desainElement.innerHTML += template
}

function pilihProperti(event) {
  event.preventDefault()
  // alert("hello")
 let bahan = document.querySelector('#bahan input:checked').value; //array
 let model = document.querySelector("#model input:checked").value
 let size = document.querySelector("#size input:checked").value
 let selectedBaju = {}
 let desain = document.querySelector("#desain").value   
 selectedBaju.bahan = bahan
 selectedBaju.model = model
 selectedBaju.size = size
 selectedBaju.desain = desain

  // console.log(selectedBaju)

  baju.push(selectedBaju)
  localStorage.setItem("selectedBaju", JSON.stringify(baju))
  
}

function goToCart() {
  
  
  window.location = "cart.html"
  
}

/*hasil akhir */
// obj = {
//   desain: desain2,
//   bahan: interlock, 
//   mode: long, 
//   size: XL,
// }