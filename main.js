window.addEventListener("load",function(){
    document.querySelector(".preload").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preload").style.display="none";
    },1000)
})

/**********************Project Items***********************/ 
const filterContainer=document.querySelector(".projects-filter"),
      [...filterBtn]=filterContainer.children,
      [...projectItems]=document.querySelectorAll(".projects-items")

filterBtn.forEach(btn => {
    btn.addEventListener("click",function(){
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active")

    const filterValue=this.getAttribute("data-filter");
    projectItems.forEach(item=>{
        if(filterValue === item.getAttribute("data-category")){
            item.classList.remove("hide");
            item.classList.add("show")
        }
        else{
            item.classList.remove("show");
            item.classList.add("hide")

        }
         if(filterValue==="all"){
         item.classList.remove("hide");
         item.classList.add("show")
        }
    })
    })
});

/**********************Lightbox***********************/ 

const lightbox=document.querySelector(".lightbox"),
      lightboxImg=document.querySelector(".lightbox-img"),
      lightboxText=document.querySelector('.caption-text'),
      lightboxCounter=document.querySelector('.caption-counter'),
      closeLightbox=document.querySelector(".lightbox-close");

projectItems.forEach((item,index )=>{
    item.addEventListener('click',function(){
        changeItem();
        ToggleLightbox();

        const prev = document.querySelector(".prev-item")
        const next = document.querySelector(".next-item")

         next.addEventListener('click',()=> {
            if(index == projectItems.length-1){
                index = 0
            } else{
                index++
            }
            changeItem();
        });
         lightboxImg.addEventListener('click',()=> {
            if(index == projectItems.length-1){
                index = 0
            } else{
                index++
            }
            changeItem();
        })
      
        prev.addEventListener('click',()=>
        {
            if(index == 0){
                index = projectItems.length-1
            } else{
                index--
        }
            changeItem();
            
        }
        )
  

})
  function changeItem(){
  imgSrc=projectItems[index].querySelector('.projects-img img').getAttribute("src");
  lightboxImg.src=imgSrc;
  lightboxText.innerHTML=projectItems[index].querySelector("h4").innerHTML
  lightboxCounter.innerHTML=(index+1)+ " of " + projectItems.length
}
 
})
 const ToggleLightbox=()=>{
  lightbox.classList.toggle("lightbox-open")
} 
lightbox.addEventListener("click" ,(e)=>{
   if(e.target === closeLightbox || e.target === lightbox){
       ToggleLightbox();
}

})

/*****************************Slide Page********************************/

const nav=document.querySelector(".nav"),
      [...li]=nav.querySelectorAll("li"),
      [...Allsection]=document.querySelectorAll('.section')

for (let i=0 ; i<li.length ; i++){
    const a = li[i].querySelector("a");
 li[i].addEventListener("click",function(){
     for(let i=0 ; i<Allsection.length ; i++){
        Allsection[i].classList.remove("prev-section")
    }
       for (let j=0 ; j<li.length ; j++){
         if(li[j].querySelector("a").classList.contains("active")){
         Allsection[j].classList.add("prev-section")
        }
        
        li[j].querySelector("a").classList.remove("active")

    }
    a.classList.add("active")
    showSection(this)
 })        
}

function showSection(ele){
    for(let i=0 ; i<Allsection.length ; i++){
        Allsection[i].classList.remove("active")
    }
    const target = ele.querySelector("a").getAttribute("href").substr(1)
    document.querySelector(`#${target}`).classList.add("active")
}
/*****************************hire me********************************/

document.querySelector(".hire-me").addEventListener('click',function(){
 const target= document.querySelector(".hire-me").getAttribute("href").substr(1)
   document.querySelector(`#${target}`).classList.add("active");
   for(let i=0 ; i<li.length;i++){
        li[i].querySelector("a").classList.remove("active")
      const target= this.getAttribute("href").substr(1)
      if(target === li[i].querySelector("a").getAttribute("href").substr(1)){
        li[i].querySelector("a").classList.add("active")
      }
   }

})
/*****************************Nav Toggler********************************/

const navToggle=document.querySelector(".nav-toggler");
const aside=document.querySelector(".aside");

navToggle.addEventListener("click",function(){
    aside.classList.toggle("open")
    navToggle.classList.toggle("open")
    for(let i=0 ; i<Allsection.length ; i++){
        Allsection[i].classList.toggle("open")
    }
})