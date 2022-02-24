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
