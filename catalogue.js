function goToCart(event) {
  event.preventDefault()
  // alert("hello")
 let bahan = document.querySelector('#bahan input:checked').value; //array
 let model = document.querySelector("#model input:checked").value
 let size = document.querySelector("#size input:checked").value
 let selectedBaju = {}
     
 selectedBaju.bahan = bahan
 selectedBaju.model = model
 selectedBaju.size = size

  console.log(selectedBaju)

  localStorage.setItem("selectedBaju", JSON.stringify(selectedBaju))
  window.location= "cart.html"
}
