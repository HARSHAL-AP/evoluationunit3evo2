var cartdata = JSON.parse(localStorage.getItem("cartitems")) || []
console.log(cartdata)

let container=document.getElementById("bucket")
cartdata.map(function (ele){
let box=document.createElement("div")
let imag=document.createElement("img")
imag.src=ele.image
let title=document.createElement("p")
title.innerText=ele.title
let price=document.createElement("h3")
price.innerText=ele.price


box.append(imag,title,price)
container.append(box)


})

