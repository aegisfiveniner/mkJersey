let name = document.getElementById('name')
let nohp = document.getElementById('nohp')
let forms = document.getElementById('form')
let selects = document.getElementById('select')
let ongkirs = document.getElementById('ongkir')
let hargaBaju = document.getElementById('hargabaju')
let namaBaru = document.getElementById('namaBaru')


let obj = {
    name :'',
    Nohp : 0,
    TotalHarga : 0
}


selects.addEventListener('click',function(e){
    e.preventDefault();
    if(selects.value === 'bandung'){
        ongkirs.innerText = Number(hargaBaju.innerText)+2000
    }else if(selects.value === 'jakarta'){
        ongkirs.innerText = Number(hargaBaju.innerText)+5000
    }else if(selects.value === 'bali'){
        ongkirs.innerText = Number(hargaBaju.innerText)+10000
    }else{
        ongkirs.innerText = 0
    }

    obj.TotalHarga =  ongkirs.innerText
})


forms.addEventListener("submit", function (e) {
    e.preventDefault();
    if(selects.value === 'bandung'){
        ongkirs.innerText = Number(hargaBaju.innerText)+2000
    }else if(selects.value === 'jakarta'){
        ongkirs.innerText = Number(hargaBaju.innerText)+5000
    }else if(selects.value === 'bali'){
        ongkirs.innerText = Number(hargaBaju.innerText)+10000
    }else{
        ongkirs.innerText = 0
    }

    obj.TotalHarga =  ongkirs.innerText
    location.href = 'index2.html'
    namaBaru.innerText =  name.value


  });

  // CART2 JS
  window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const hp = sessionStorage.getItem('NOHP');
    const ALAMAT = sessionStorage.getItem('ALAMAT');
    const total = sessionStorage.getItem('TOTAL');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-hp').innerHTML = hp;
    document.getElementById('result-total').innerHTML = total;
    document.getElementById('result-alamat').innerHTML = ALAMAT;
})

// CART JS
  document.getElementById("plus-btn-incre-short").addEventListener("click", function(e) {
    e.preventDefault()
    let shortQty = document.getElementById("short-qty").value
    console.log(shortQty)
    shortQty+= 1
    
  })
