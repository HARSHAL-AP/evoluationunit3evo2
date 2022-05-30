// Add the coffee to local storage with key "coffee"
const url=` https://masai-mock-api.herokuapp.com/coffee/menu`
var cartdata = JSON.parse(localStorage.getItem("cartitems")) || []
//console.log(cartdata)
async function getdata(){
    try{
    let res=await fetch(url)
    let product =await res.json()
    apendata(product.menu.data)
    console.log(product.menu.data)
    }catch (err){
    console.log(err)
}
}

getdata()


function apendata(data){

let container=document.getElementById("menu")
data.forEach(function (element){
   let box=document.createElement("div")

    let image=document.createElement("img")
    image.src=element.image
   
    let type=document.createElement("h2")
     type.innerText=element.title
     
    let price=document.createElement("p")
    price.innerText=element.price+"$"
   
    let ading=document.createElement("button")
    ading.innerText="Add to Bucket"
    ading.addEventListener("click",function(){
      addToCart(element);
    })
    
   box.append(image,type,price,ading)
   container.append(box)
})
}

function addToCart(element){
 // console.log(element)
  cartdata.push(element)
     localStorage.setItem("cartitems",JSON.stringify(cartdata))
    
}
let count=document.getElementById("coffee_count")
count.innerText=cartdata.length