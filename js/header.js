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

    var counter = 0;
    $('.test').click(function() {
  	  $(this).toggleClass('substract');

	  if($(this).hasClass('substract')) {
	  	  counter++
		  console.log(counter)
	  } else {
	  	  counter--
		  console.log(counter)
	  }
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
 /* var counter = 0;
  $(".counter").text(counter);

  $(".add").click(function(){
	counter = counter + 1
	console.log(counter);
	$(".counter").text(counter);
	});

$(".substract").click(function(){
  counter = counter - 1;
  console.log(counter);
  $(".counter").text(counter);
});
*/

