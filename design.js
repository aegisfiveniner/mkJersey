function pilihDesain (event) {
  event.preventDefault()
  // alert("hello")
 let desain = document.querySelectorAll('#design input:checked'); //array
 
 let selectedDesain = []
 for (let i = 0; i < desain.length; i++) {
   selectedDesain.push(desain[i].value) 
 }
  localStorage.setItem("selectedDesain", JSON.stringify(selectedDesain))
  window.location= "catalogue.html"
}