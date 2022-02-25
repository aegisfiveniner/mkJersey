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