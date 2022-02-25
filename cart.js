// [{}]

let cart = localStorage.getItem("selectedBaju")

let arrCart = JSON.parse(cart)

// console.log(arrCart) + totalprice, price, qty

let database = {
  bahan: [
    {
      nama: "interlock",
      harga: 170000
    },
    {
      nama: "adidas",
      harga: 170000
    },
    {
      nama: "elite uv milano",
      harga: 150000
    },
    {
      nama: "reguler",
      harga: 135000
    },
    {
      nama: "standart",
      harga: 120000
    }
  ],
  customKaos: [
    {
      nama: "no sleeve",
      harga: -20000
    },
    {
      nama: "long sleeve",
      harga: 20000
    },
    {
      nama: "kerah resleting",
      harga: 15000
    },
    {
      nama: "kerah kancing",
      harga: 10000
    },
  ]
}


for (const obj of arrCart) { 
  obj.price = 0
  for (let i = 0; i < database.bahan.length; i++) {
    if (obj.bahan === database.bahan[i].nama) {
      obj.price += database.bahan[i].harga
    }
  }
  for (let j = 0; j < database.customKaos.length; j++) {
    if (obj.model === database.customKaos[j].nama) {
      obj.price += database.customKaos[j].harga
    }
  }
  obj.qty = 1
  obj.totalPrice = obj.qty * obj.price
}
// console.log(arrCart)

const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}
function desainBajuImg (desain) {
  if (desain === "Design 1") {
    return "img/short-sleeve-modified.png"
  }
  else {
    return "img/long-sleeve-modified.png"
  }
}

function renderCart () {
  let tableElement = document.getElementById("inputPesanan")
  tableElement.innerHTML = ""

  for (let i = 0; i < arrCart.length; i++) {
    let template = `<tr>
    <td><img class="product-image" src="${desainBajuImg(arrCart[i].desain)}" alt=""></td>
    <td>${arrCart[i].bahan}</td>
    <td>${arrCart[i].model}</td>
    <td>${arrCart[i].size}</td>
    <td><input id="short-qty" class="form-control" type="text" value="${arrCart[i].qty}"></td>
    <td><button onclick="updateQty('${arrCart[i].desain}', '+')"><img class="plus-img" src="img/plus-solid.svg" alt=""></button><button onclick="updateQty('${arrCart[i].desain}', '-')"><img class="minus-img" src="img/minus-solid.svg" alt=""></button></td>
    <td class="text-right">${rupiah(arrCart[i].price)}</td>
    <td id="total-price-short">${rupiah(arrCart[i].totalPrice)}</td>
    <td class="text-right"><button class="btn btn-outline-light"><img onclick="hapusQty('${arrCart[i].desain}')" class="trash-image" src="img/trash-can-solid.svg" alt=""></button></td>
  </tr>` 
  
  tableElement.innerHTML += template
  console.log(template)
  }
  subTotal()

}
renderCart()


function updateQty (desain, operator) {
  for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].desain === desain) {
      if (operator === "+") {
        arrCart[i].qty++
        arrCart[i].totalPrice += arrCart[i].price
      } else {
        if (arrCart[i].qty > 0) {
          arrCart[i].qty --
          arrCart[i].totalPrice -= arrCart[i].price
        }
      }
    }
  }
  renderCart()
}

function hapusQty (desain) {
  for (let i = 0; i < arrCart.length; i++) {
    if (arrCart[i].desain === desain) {
      arrCart[i].qty = 0
      arrCart[i].totalPrice = 0

      // if (operator === "+") {
      //   arrCart[i].qty++
      //   arrCart[i].totalPrice += arrCart[i].price
      // } else {
      //   if (arrCart[i].qty > 0) {
      //     arrCart[i].qty --
      //     arrCart[i].totalPrice -= arrCart[i].price
      //   }
      // }
    }
  }
  renderCart()
}

function subTotal () {
  let subtotal = 0
  let totalSum = 0
  for (let i = 0; i < arrCart.length; i++) { 
    subtotal += arrCart[i].totalPrice
  }
  totalSum += (subtotal + 10000)
  document.getElementById("subtotal").innerText = rupiah(subtotal)
  document.getElementById("totalSum").innerHTML = rupiah(totalSum)
}