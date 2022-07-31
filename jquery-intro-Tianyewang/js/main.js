// this is your custom Javascript file
$(function () {
  //everything else you put into this file goes below here

  $("#heading1").mouseover(function () {
    // put here what you want to have happen when the user mouses over the heading1 element
    // $("#heading1").css("color", "purple")
    // $("#heading1").css("font-size", "50px")
    $("#heading1").addClass("highlight")
  })

  $("#heading1").mouseout(function () {
    // put here what you want to have happen when the user mouses over the heading1 element
    // $("#heading1").css("color", "black")
    // $("#heading1").css("font-size", "32px")
    $("#heading1").removeClass("highlight")
  })

  $("#button1").click(function () {
    // put here what you want to have happen when the user clicks the button with the id button1
    $("#paragraph1").text("I love your choice! Wish you lucky today")
    $("#question1").fadeOut(1000)
    $("#question2").fadeOut(1000)
    $("#button1").fadeOut(1000)
    $("#button2").fadeOut(1000)
  })

  
  $("#button2").click(function () {
    // put here what you want to have happen when the user clicks the button with the id button1
    $("#paragraph1").text("No!!!!!!!")
    $("#question1").fadeOut(1000)
    
    $("#button1").fadeOut(1000)
    $("#button2").fadeOut(1000)
  })
  
  var windowWidth = window.screen.width;
  var windowHeight = window.screen.height;
 
  function createSnow(){
            var left = 0;
            var top = 0;
 
            
            var left_random = Math.random() * windowWidth;
            var top_random = Math.random()* windowHeight;
            var div = document.createElement('div');
            div.className = 'snow';
            div.style.transform = 'scale('+(Math.random())+')'
 
            document.body.appendChild(div);
 
            
            setInterval(function () {
 
                div.style.left = left_random + left +'px';
                div.style.top = top_random + top +'px'
                left += 0.2;
                top += 0.2;
 
                
                if(left_random + left >= windowWidth){
                    left_random = Math.random();
                    left = 0;
                }
 
                if(top_random + top >= windowHeight){
                    top_random = Math.random();
                    top = 0;
                }
            },10)
 
        }
        for(var i = 0 ; i < 200 ; i++){
            createSnow()
        }
        

  



  $("#question1").mouseover(function () {
    $("#question1").attr("src", "images/happy.jpg")
  })

  $("#question2").mouseover(function () {
    $("#question2").attr("src", "images/sad.jpg")
  })

 



  setTimeout(function () {
    //everything you want to have happen after the specified time has passed goes below here
    $("#paragraph1").text("I know you will give me full mark! Don't hesitate! Just Do that!")
    //everything you want to have happen after the specified time has passed goes above here
  }, 10000) // 2000 represents 2 seconds (in milliseconds) ... adjust this number as needed

  //everything else you put into this file goes above here
})


$("img#question2").click(function () {
  $("img#question2").animate(
    {
      left: -3000,
      top: 1000,
    },
    2000
  )
})

