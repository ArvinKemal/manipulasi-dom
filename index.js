const index = document.getElementById('input');
const root = document.getElementById('root');
const fizzbuzz1 = document.createElement("h3");
const fizzbuzz2 = document.createElement("h3");
const fizzbuzz3 = document.createElement("h3");
const fizzbuzz4 = document.createElement("h3");


let tahap = 0


const tampilkan = () => {
    jawaban = index.value

    tahap += 1

    if (tahap === 1) {
        if (jawaban != 0) {
            if (jawaban % 3 === 0 && jawaban % 5 === 0) {
                console.log("dibagi 3 & 5")
                fizzbuzz1.innerHTML = "FizzBuzz!"
            }
            else if (jawaban % 3 === 0) {
                console.log("dibagi 3")
                fizzbuzz1.innerHTML = "Fizz!"
            }
            else if (jawaban % 5 === 0) {
                console.log("dibagi 5")
                fizzbuzz1.innerHTML = "Buzz!"
            }
            else {
                fizzbuzz1.innerHTML = jawaban
            }
            fizzbuzz1.style.color = "black"
        }
        else {
            fizzbuzz1.innerHTML = "Invalid input!"
            fizzbuzz1.style.color = "red"
        }
    
        root.append(fizzbuzz1)
        console.log(root)
    }
    if (tahap === 2) {
        if (jawaban != 0) {
            if (jawaban % 3 === 0 && jawaban % 5 === 0) {
                console.log("dibagi 3 & 5")
                fizzbuzz2.innerHTML = "FizzBuzz!"
            }
            else if (jawaban % 3 === 0) {
                console.log("dibagi 3")
                fizzbuzz2.innerHTML = "Fizz!"
            }
            else if (jawaban % 5 === 0) {
                console.log("dibagi 5")
                fizzbuzz2.innerHTML = "Buzz!"
            }
            else {
                fizzbuzz2.innerHTML = jawaban
            }
            fizzbuzz2.style.color = "black"
        }
        else {
            fizzbuzz2.innerHTML = "Invalid input!"
            fizzbuzz2.style.color = "red"
        }
    
        root.append(fizzbuzz2)
        console.log(root)
    }
    if (tahap === 3) {
        if (jawaban != 0) {
            if (jawaban % 3 === 0 && jawaban % 5 === 0) {
                console.log("dibagi 3 & 5")
                fizzbuzz3.innerHTML = "FizzBuzz!"
            }
            else if (jawaban % 3 === 0) {
                console.log("dibagi 3")
                fizzbuzz3.innerHTML = "Fizz!"
            }
            else if (jawaban % 5 === 0) {
                console.log("dibagi 5")
                fizzbuzz3.innerHTML = "Buzz!"
            }
            else {
                fizzbuzz3.innerHTML = jawaban
            }
            fizzbuzz3.style.color = "black"
        }
        else {
            fizzbuzz3.innerHTML = "Invalid input!"
            fizzbuzz3.style.color = "red"
        }
    
        root.append(fizzbuzz3)
        console.log(root)
    }
    if (tahap === 4) {
        if (jawaban != 0) {
            if (jawaban % 3 === 0 && jawaban % 5 === 0) {
                console.log("dibagi 3 & 5")
                fizzbuzz4.innerHTML = "FizzBuzz!"
            }
            else if (jawaban % 3 === 0) {
                console.log("dibagi 3")
                fizzbuzz4.innerHTML = "Fizz!"
            }
            else if (jawaban % 5 === 0) {
                console.log("dibagi 5")
                fizzbuzz4.innerHTML = "Buzz!"
            }
            else {
                fizzbuzz4.innerHTML = jawaban
            }
            fizzbuzz4.style.color = "black"
        }
        else {
            fizzbuzz4.innerHTML = "Invalid input!"
            fizzbuzz4.style.color = "red"
        }
    
        root.append(fizzbuzz4)
        console.log(root)
    }

    if (tahap === 5) {
        location.reload()
    }

}
