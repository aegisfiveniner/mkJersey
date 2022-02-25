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

// CATALOGUE JS
function submitCustom(custom){
    custom.preventDefault()
    let customnya = document.getElementsByClassName('boxe').value
    return customnya
}
function submitSize(size){
    size.preventDefault()
    let ukuran = document.getElementsByClassName('box').value
    return ukuran 
}

function submitBahan(bahan){
    bahan.preventDefault()
    let bahannya = document.getElementsByClassName('boxed').value
    return bahannya
}

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

function pesanBaju(bahan, size, custom, jumlah){
    const bahanKaos = ['interlock', 170000, 'adidas', 170000, 'elite uv milano', 150000, 'reguler', 135000, 'standart', 120000]
    const sizeKaos = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
    const customKaos = ['no sleeve', -20000, 'long sleeve', 20000, 'kerah resleting', 15000 , 'kerah kancing', 10000]
    let summaryPesanan = ''
    let totalHarga = 0
    for(let i = 0; i < bahanKaos.length; i++){
        for(let j = 0; j < sizeKaos.length; j++){
            for(let k = 0; k < customKaos.length; k++){
                if(bahan === bahanKaos[i] && size === sizeKaos[j] && custom === customKaos[k]){
                    totalHarga = (bahanKaos[i+1] + customKaos[k+1]) * jumlah
                }
            }
        }
    }
    summaryPesanan = `Pesanan kaos dengan:
    Bahan: ${bahan} 
    Ukuran: ${size}
    Custom: ${custom}
    Jumlah: ${jumlah}
    =========================
    total harga = ${rupiah(totalHarga)}`
    return summaryPesanan
}


