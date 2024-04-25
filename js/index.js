let bt=document.querySelector(".li")
bt.onclick=function(){
    this.innerHTML="<i class='fa-solid fa-check'></i> liked"
}
let btn2=document.querySelector(".like")
btn2.onclick=function(){
    this.innerHTML="<i class='fa-solid fa-check'></i> liked"
}
let btnn=document.querySelector(".like-2")
btnn.onclick=function(){
    this.innerHTML="<i class='fa-solid fa-check'></i> liked"
}
// second button
let btn=document.querySelector(".btn")
let a=document.querySelector(".replies")
btn.onclick=function(){
    if(a.classList.contains("hide")){
        a.classList.remove("hide")
    }
    else{
        a.classList.add("hide")
    }
}
// another button
let btn3=document.querySelector(".btn-2")
let b=document.querySelector(".con")
btn3.onclick=function(){
    if(b.classList.contains("hide")){
        b.classList.remove("hide") 
    }
    else{
        b.classList.add("hide")
    }
}
//  third button
let btn4=document.querySelector(".btn-3")
let c=document.querySelector(".con-2")
btn4.onclick=function(){
    if(c.classList.contains("hide")){
        c.classList.remove("hide") 
    }
    else{
        c.classList.add("hide")
    }
}