// Add the coffee to local storage with key "coffee"
const url=` https://masai-mock-api.herokuapp.com/coffee/menu`


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
data.forEach(function (el){
   let box=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image
    image.setAttribute("class","cofyimg")
    let type=document.createElement("h2")
     type.innerText=el.title
     type.setAttribute("class","typlee")
    let price=document.createElement("p")
    price.innerText=el.price+"$"
    price.setAttribute("class","coprice")
    let ading=document.createElement("button")
    ading.innerText="Add to Bucket"
    ading.setAttribute("id","add_to_bucket")
    ading.onclick="godata()"
   box.append(image,type,price,ading)
   container.append(box)
})
}
var arr=[]
//console.log(arr)
function godata(){
  var obj={
      title:typlee.value,
      image:cofyimg.value,
      price:coprice.value
  }
  arr.push(obj)
}
