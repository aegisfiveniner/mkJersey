function handleSubmit () {
    const name = document.getElementById('name').value;
    const nohp = document.getElementById('nohp').value;
    const total = document.getElementById('total').innerText
    const alamat = document.getElementById('alamat').value
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("NOHP", nohp);
    sessionStorage.setItem('TOTAL', total)
    sessionStorage.setItem('ALAMAT', alamat)

    return;
}

function isInputNumber(evt){
                
    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
  
    
}

