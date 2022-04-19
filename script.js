//HAMBURGER MENU
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.mini-nav').classList.toggle('change');
})


//MENU SHRINK ON SCROLL

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    // left side
    document.getElementById("header").style.height = "6vw";
    document.getElementById ("header").style.paddingBottom = "1rem";
    document.getElementById("invisible-home-link").style.fontSize = "99%";
    document.getElementById("change-logo").style.width = "80%";
   
    document.getElementById("change-heading").style.display = "none";
    document.getElementById("navbar-icons").style.paddingTop = ".3rem";
   
    // right side
    // document.getElementById("change-links-news").style.fontSize = "60%";
    // document.getElementById("change-links-artists").style.fontSize = "60%";
    // document.getElementById("change-links-music").style.fontSize = "60%";
    // document.getElementById("change-links-about").style.fontSize = "60%";
    // document.getElementById("change-links-team").style.fontSize = "60%";
    // document.getElementById("change-links-contact").style.fontSize = "60%";
    


    
  } else {
    // Left side
    document.getElementById("header").style.height = "12vw";
    document.getElementById ("header").style.paddingBottom = "0";
    document.getElementById("invisible-home-link").style.fontSize = "4rem";
    document.getElementById("change-logo").style.width = "100%";
 
    document.getElementById("change-heading").style.display = "block";
    document.getElementById("navbar-icons").style.paddingTop = "0";
   
    // right side
    // document.getElementById("change-links-news").style.fontSize = "initial";
    // document.getElementById("change-links-artists").style.fontSize = "initial";
    // document.getElementById("change-links-music").style.fontSize = "initial";
    // document.getElementById("change-links-about").style.fontSize = "initial";
    // document.getElementById("change-links-team").style.fontSize = "initial";
    // document.getElementById("change-links-contact").style.fontSize = "initial";
  } 
  };


//SCROLL TO TOP BUTTON APPEARS AT ARTIST SECTION

lateScroll = document.getElementById("chevron-btn");

var myScrollFunction = function() {
  var y = window.scrollY;
  if (y > 999) {
    lateScroll.className = "scroll-up-btn show"
  } else {
    lateScroll.className = "scroll-up-btn hide"
  }
};

window.addEventListener("scroll", myScrollFunction);


//SLIDESHOW

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); 
}


//FORM SUBMIT 

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}










  
    

    
  
