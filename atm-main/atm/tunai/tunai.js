let saldo = 5000000;
let tunai = {
   seratus: 100000,
   duaratus: 200000,
   tigaratus: 300000,
   limaratus: 500000,
   satujuta: 1000000,
   satujutalimaratus : 15000000,
   duajuta: 2000000,
}

function uang (value) {
    if (confirm (`anda akan menarik uang sebesar ${value}?`)) {
        alert(`saldo anda ${saldo-value}`)
        location.href ="../ambil/ambil.html"
    }
}