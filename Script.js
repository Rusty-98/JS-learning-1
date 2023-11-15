const button = document.querySelectorAll(".switch");
const body = document.querySelector("body");
const box = document.querySelector(".box")
const h = document.querySelectorAll("h1")

button.forEach(function (element){
    element.addEventListener("click", function(e){
        var style = window.getComputedStyle(e.target)
        body.style.backgroundColor = style.backgroundColor
        box.style.backgroundColor = style.backgroundColor
        h.forEach(function (elem){
            elem.style.backgroundColor = style.backgroundColor
        })
    })
})