var overlay=document.querySelector(".overlay")
var addbook=document.querySelector(".addbook")
var btn=document.getElementById("btn")
var cancel =document.getElementById("cancel")
var container=document.querySelector(".container")
var containerbox=document.querySelector(".containerbox")
var add=document.getElementById("add")
var bookname=document.getElementById("bookname")
var author=document.getElementById("author")
var describe=document.getElementById("describe")
var form=document.querySelector("form")


btn.addEventListener("click",function () {
  overlay.style.display = "block";
  addbook.style.display = "block";

});

cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    addbook.style.display="none"
     form.reset();
})

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","containerbox")
    div.innerHTML=`<h2>${bookname.value}</h2><h3>${author.value}</h3><p>${describe.value}</p><button onclick="saya(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    addbook.style.display="none"
    form.reset()
    

})
function rem(event){
    event.target.parentElement.remove()
}





