
 $("#one").click(function (){
console.log("ttt")
    $("#one").css({border : "3px solid red"})
 }) 


 /////////////////////////////////////////////////////////
 var count=0;
 $("span").each(function()
 {
     $(this).text(count)
     count ++ ;
     if(count==5)
     {
         $(this).text("empty")
     }

 })
 /////////////////////////////////////////////////////////////
 
 var s="https://reqres.in/api/users/"
 $("#txt").change(function()
 {
     var x=$("#txt").val()
     s="https://reqres.in/api/users/"+x ;
     console.log(x)
     $.getJSON(s,function(data)
       {
           console.log(data)
           $("#first").text(data.data.first_name);
           $("#second").text(data.data.second_name);
           $("#third").text(data.data.second_name);
           $("#four").text(data.data.first_name);
 })

 })

 ////////////////////////////////////////////////////

 $(".twodiv").mouseover(function()
 {
     console.log(this)
     $(this).toggleClass("firstdiv");
 });
    

 $(".images").mouseover(function()
 {
    
     var images=parseInt($(".images").css("opacity"))
     var ints=setInterval(function()
     {
        console.log(images)
         images-=0.3;
         $(".images").css({opacity:images})
         if(images<=0)
         clearInterval(ints)
     },2000)
 })
 
 $(".images").mouseleave(function()
 {
     var images=parseInt($(".images").css("opacity"))
     var ints=setInterval(function()
     {
         images+=0.3;
         $(".images").css({opacity:images})
         if(images<=1)
         clearInterval(ints)
     },2000)
 })