const input = document.getElementById ("input")
const button = document.getElementById ("button")

button.addEventListener ("click", ()=> {
    if (input.value == "12345") {
        location.href = "../tunai/tunai.html"
    } else {
        alert ('SALAH!!!')
    }
})