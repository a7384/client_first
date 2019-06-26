
$(document).ready(function(){
function haederanimation(){
    $(".header-desc").slideDown(1000);
    
    $(".slide-image").animate({
        left:'20px'  
     },1000);
}
haederanimation();
    //close nav js 
$(".mobile-menu-btn").click(function(){
 if($(".mobile-menu").hasClass("open_nav")){
   $(".mobile-menu").removeClass("open_nav");                                       
 }else{
    $(".mobile-menu").addClass("open_nav");  
 }

});
//close nav js  
$(".mobile-menu li").click(function(){
    $(".mobile-menu").removeClass("open_nav");
});
 //qusetion answer show js
 $(".question-show-btn").click(function(){
      $(".question-ans p").slideToggle(1000);
     
 });
  //counter up
$('.counter').countUp({
    time: 1000
});
//jquery end     
});
