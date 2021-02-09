
const [...links]=document.querySelectorAll(".alternative-style"),
      switcher=document.querySelector(".toggle-style-switcher"),
      [...bodySkin]=document.querySelectorAll(".body-skin"),
      body=document.querySelector('body')

function setActiveStyle (color){
   for (let i=0 ; i<links.length ; i++){
       if(color == links[i].getAttribute("title")){
           links[i].removeAttribute('disabled')
       }
       else{
           links[i].setAttribute("disabled","true")
       }
   }
}
bodySkin.forEach(ele=>{
    ele.addEventListener("change",function(){
        if(ele.value==="dark"){
        body.className="dark"
        }
        else{
            body.className="";
        }
    })
    
})

switcher.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle("open")
})