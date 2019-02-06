window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY >= 150) nav.className = 'navbar navpos navbar-expand-lg navbar-dark bg-set fixed-top'; else nav.className = 'navbar navpos navbar-expand-lg navbar-dark bg-set';
}



$("#homepage").on("click",function(){
        $('html,body').animate({
        scrollTop: $(".homepage").offset().top},
        'slow');
})
$("#aboutus").on("click",function(){
        $('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
})
$("#services").on("click",function(){
        $('html,body').animate({
        scrollTop: $("#section3").offset().top},
        'slow');
})
$("#contact").on("click",function(){
        $('html,body').animate({
        scrollTop: $(".contactform").offset().top},
        'slow');
})

$("#homepage1").on("click",function(){
        $('html,body').animate({
        scrollTop: $(".homepage").offset().top},
        'slow');
})
$("#aboutus1").on("click",function(){
        $('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
})
$("#services1").on("click",function(){
        $('html,body').animate({
        scrollTop: $("#section3").offset().top},
        'slow');
})
$("#contact1").on("click",function(){
        $('html,body').animate({
        scrollTop: $(".contactform").offset().top},
        'slow');
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".homepage").offset().top},"1000");return false})})




                  function write (obj, sentence, i, cb) {
                    if (i != sentence.length) {
                      setTimeout(function () {
                        i++
                        obj.innerHTML = sentence.substr(0, i+1) +' <em aria-hidden="true"></em>';
                        write(obj, sentence, i, cb)
                      }, 50)
                    } else {

                      cb()
                    }
                  }
                   function erase (obj, cb,i) {
                   var sentence = obj.innerText
                      if (sentence.length != 0) {
                       setTimeout(function () {
                       sentence = sentence.substr(0,sentence.length-1)

                       obj.innerText = sentence
                       erase(obj, cb)
                        }, 18/(i*(i/10000000)))
                        } else {
                        obj.innerText = " "
                        cb()
                     }
                    }
                    var typeline = document.querySelector("#typeline")

                     function writeerase(obj, sentence, time, cb) {
                      write(obj, sentence, 0, function () {
                       setTimeout(function () {
                       erase(obj, cb) }, time) })
                       }

                  var sentences = [
                    "an Engineer. ",
                    "a Developer. ",
                    "a Web Designer."
                  ]

                  var counter = 0
                  function loop () {
                    var sentence = sentences[counter % sentences.length]
                    writeerase(typeline, sentence, 1500, loop)
                    counter++
                  }

                  loop()


$(document).ready(function() {
  $(".container").css(
    "background-image",
    "url(../static/RKI.png)"
  );
  $(".text-1").css({
    "background-color": "rgba(72, 72, 72, 1)",
    color: "white"
  });

  $(".text-1").hover(function() {
    $(".container").css(
      "background-image",
      "url(../static/RKI.png)"
    );
    $(".container").css(
      "background-size",
      "cover"
    );
    $(".text-1").css({
      "background-color": "rgba(72, 72, 72, 1)",
      color: "white"
    });
    $(".text-2, .text-3, .text-4").css({
      "background-color": "rgba(255,255,255,0.6)",
      color: "black"
    });
  });

  $(".text-2").hover(function() {
    $(".container").css(
      "background-image",
      "url(../static/SP.png)"
    );
    $(".text-2").css({
      "background-color": "rgba(72, 72, 72, 1)",
      color: "white"
    });
    $(".text-1, .text-3, .text-4").css({
      "background-color": "rgba(255,255,255,0.6)",
      color: "black"
    });
  });

  $(".text-3").hover(function() {
    $(".container").css(
      "background-image",
      "url(../static/BLOG.png)"
    );
    $(".container").css(
      "background-size",
      "cover"
    );
    $(".container").css(
      "background-repeat",
      "no-repeat"
    );
    $(".container").css(
      "background-position",
      "center"
    );
    $(".text-3").css({
      "background-color": "rgba(72, 72, 72, 1)",
      color: "white"
    });
    $(".text-1, .text-2, .text-4").css({
      "background-color": "rgba(255,255,255,0.6)",
      color: "black"
    });
  });

  $(".text-4").hover(function() {
    $(".container").css(
      "background-image",
      "url(https://raw.githubusercontent.com/PiyushMishra318/PythonAnywhere/master/static/Profileimg.png)"
    );
    $(".text-4").css({
      "background-color": "rgba(72, 72, 72, 1)",
      color: "white"
    });
    $(".text-1, .text-2, .text-3").css({
      "background-color": "rgba(255,255,255,0.6)",
      color: "black"
    });
  });
});
