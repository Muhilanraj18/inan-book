//selecting popup box,popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox= document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup")

 addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelbutton =document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"  
})

//select container,add book,book title,book aurthor,book description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookaurthor=document.getElementById("book-aurthor")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${bookaurthor.value}</h5>
        <p>${bookdescription.value}</p>
         <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none" 

})

function deletebook(event)
{
    event.target.parentElement.remove()
}



