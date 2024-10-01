console.log("Hi i am running")

// initilizing the veriables

let popup = document.getElementById("pop")
let btn = document.querySelector(".btn")
let close = document.getElementById("close")

// adding function to the button for opening popup box

btn.addEventListener("click", function () {
    popup.classList.add("popup-open")

})

// adding function to the button for close popup box

close.addEventListener("click", function () {
    popup.classList.remove("popup-open")

})