var swiper =new Swiper(".popular-content",{
    slidesPerview:1,
    spaceBetween:10,
   
    autoplay:{
        delay:755500,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev"
    },
    breakpoints:{
        280:{
            slidesPerview:1,
            spaceBetween:10,
        },
        320:{
            slidesPerview:2,
            spaceBetween:10,
        },
        510:{
            slidesPerview:3,
            spaceBetween:10,
        },
        758:{
            slidesPerview:4,
            spaceBetween:15,
        },
        900:{
            slidesPerview:5,
            spaceBetween:20,
        },
  
    }
});
let playButton =document.querySelector('.play-movie');
let video =document.querySelector('.video-container');
let closebtn =document.querySelector('.close-video');
playButton.onclick=()=>{
    video.classList.add('show-video');
    
}