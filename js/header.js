$(document).ready(function() {
  
  // On click, remove class on active element, add it to the new one
  
  $('header nav a').click(function(e) {
    
    $('header nav a.active').removeClass('active');
    $(this).addClass('active');
    
    // Scroll to anchor
    
    $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');
    
    e.preventDefault();
    return false;
    
  });

  $('.test').click(function() {
  	  $(this).toggleClass('bg');
  })
  
  // On scroll, remove class on active element and add it to the new one
  
  $(document).scroll(function() {
     
     var position = Math.floor($(this).scrollTop() / 800) + 1;
    
     $('header nav a.active').removeClass('active');
     $('header nav a.link-' + position).addClass('active');
    
  });

  
  
});

/*function switch_color() {
var test = 0;
if (test = 0){
  document.getElementsByClassName("test")[0].style.background = "rgba(29, 230, 29, 0.7)";
  var test = 1;
  console.log(test);
  } else {
   document.getElementsByClassName("test")[0].style.background = "rgba(29, 230, 29, 0)";
  var test = 0;
  console.log(test);
  }
  };*/
  function switch_color1() {
  document.getElementsByClassName("test")[0].style.display = "flex";
  }
   function switch_color2() {
  document.getElementsByClassName("test")[0].style.display = "none";
  }
