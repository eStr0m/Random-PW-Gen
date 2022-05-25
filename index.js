const generateBtn = document.getElementById("gen-pw-btn")
const pwCont = document.getElementById("pw-cont")
const inputElem = document.getElementById("pw-length-input")
const pwOutput1 = document.getElementById("pw-output-1")
const pwOutput2 = document.getElementById("pw-output-2")
const pwOutput3 = document.getElementById("pw-output-3")
const pwOutput4 = document.getElementById("pw-output-4")

const charString = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz{|}~`

//__ Default password length if not user specified__
let lengthInput = 8


// __ Callback function for generating a random PW __
function randomPwGenerator(length) {
    let result = ``
    const charLength = charString.length
    for(let i = 0; i < length; i++) {
        result += charString.charAt(Math.floor(Math.random() * charLength))
    }
    return result
}


// __ Generates pw's and pushes them to the pw containers + changes cursor to pointer on hover__ 
generateBtn.addEventListener("click", () => {
    if(inputElem.value){
        lengthInput = inputElem.value
    }
    let pw = [``, ``, ``,``]
    
    for(let i = 0; i < pw.length; i++){
        pw[i] = randomPwGenerator(lengthInput)
        pwCont.children[i].textContent = pw[i]
        pwCont.children[i].classList.add("pw_op_hover")
    }
})


// __ COPY TO CLIPBOARD __ 
pwOutput1.addEventListener("click", () => {
    if(!!pwOutput1.textContent) {
        let texteronies = pwOutput1.textContent
        navigator.clipboard.writeText(texteronies).then( () => {
            alert("Password Copied!")
        })
    }
})

pwOutput2.addEventListener("click", () => {
    if(!!pwOutput2.textContent) {
        let texteronies = pwOutput2.textContent
        navigator.clipboard.writeText(texteronies).then( () => {
            alert("Password Copied!")
        })
    }
})

pwOutput3.addEventListener("click", () => {
    if(!!pwOutput3.textContent) {
        let texteronies = pwOutput3.textContent
        navigator.clipboard.writeText(texteronies).then( () => {
            alert("Password Copied!")
        })
    }
})

pwOutput4.addEventListener("click", () => {
    if(!!pwOutput4.textContent) {
        let texteronies = pwOutput4.textContent
        navigator.clipboard.writeText(texteronies).then( () => {
            alert("Password Copied!")
        })
    }
})

